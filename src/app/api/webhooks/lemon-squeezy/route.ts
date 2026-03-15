import { NextRequest, NextResponse } from "next/server";
import { verifyWebhookSignature } from "@/lib/lemonsqueezy";
import { adminDb } from "@/lib/firebase-admin";

export async function POST(req: NextRequest) {
    const payload = await req.text();
    const signature = req.headers.get("x-signature") || "";
    const secret = process.env.LEMON_SQUEEZY_WEBHOOK_SECRET || "";

    if (!verifyWebhookSignature(payload, signature, secret)) {
        return new NextResponse("Invalid signature", { status: 401 });
    }

    const data = JSON.parse(payload);
    const eventName = data.meta.event_name;
    const body = data.data;

    // Extract custom data (user_id) passed during checkout
    const userId = data.meta.custom_data?.user_id;

    if (!userId) {
        console.error("No user_id found in webhook metadata");
        return new NextResponse("Ignoring: No User ID", { status: 200 });
    }

    console.log(`Processing Lemon Squeezy event: ${eventName} for user: ${userId}`);

    const userRef = adminDb.collection("users").doc(userId);

    try {
        switch (eventName) {
            case "subscription_created":
            case "subscription_updated": {
                const subscription = body.attributes;
                const planName = getPlanName(subscription.variant_id);
                await userRef.set({
                    plan: planName, // Sync top-level plan for extension simplicity
                    subscription: {
                        id: body.id,
                        status: subscription.status,
                        variantId: subscription.variant_id,
                        customerId: subscription.customer_id,
                        endsAt: subscription.ends_at,
                        renewsAt: subscription.renews_at,
                        updateUrl: subscription.urls.update_payment_method,
                        cancelUrl: subscription.urls.cancel_url,
                        plan: planName,
                        updatedAt: new Date().toISOString(),
                    },
                }, { merge: true });
                break;
            }
            case "subscription_cancelled":
            case "subscription_expired": {
                await userRef.set({
                    subscription: {
                        status: "cancelled",
                        updatedAt: new Date().toISOString(),
                    }
                }, { merge: true });
                break;
            }
            default:
                console.log(`Unhandled event: ${eventName}`);
        }

        return new NextResponse("Webhook processed", { status: 200 });
    } catch (error) {
        console.error("Error processing webhook:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

function getPlanName(variantId: string | number): string {
    const vId = String(variantId);
    if (vId === process.env.LEMON_SQUEEZY_BASIC_ID || vId === "1405620") return "Basic";
    if (vId === process.env.LEMON_SQUEEZY_PRO_ID || vId === "1405790") return "Pro";
    if (vId === process.env.LEMON_SQUEEZY_TEAM_ID || vId === "1405794") return "Team";
    return "Custom";
}
