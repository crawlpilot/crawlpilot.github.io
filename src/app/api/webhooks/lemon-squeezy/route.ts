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
                await userRef.update({
                    subscription: {
                        id: body.id,
                        status: subscription.status,
                        variantId: subscription.variant_id,
                        customerId: subscription.customer_id,
                        endsAt: subscription.ends_at,
                        renewsAt: subscription.renews_at,
                        updateUrl: subscription.urls.update_payment_method,
                        cancelUrl: subscription.urls.cancel_url,
                        plan: getPlanName(subscription.variant_id),
                        updatedAt: new Date().toISOString(),
                    },
                });
                break;
            }
            case "subscription_cancelled":
            case "subscription_expired": {
                await userRef.update({
                    "subscription.status": "cancelled",
                    "subscription.updatedAt": new Date().toISOString(),
                });
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
    // You should map your Lemon Squeezy Variant IDs here
    const PRO_VARIANT_ID = process.env.LEMON_SQUEEZY_PRO_VARIANT_ID;
    if (String(variantId) === PRO_VARIANT_ID) return "Pro";
    return "Custom";
}
