"use server";

import { createCheckout } from "@/lib/lemonsqueezy";

export async function getCheckoutUrl(variantId: string, userId: string, userEmail: string, userName: string) {
    try {
        const storeId = process.env.LEMON_SQUEEZY_STORE_ID;

        if (!storeId) {
            throw new Error("Lemon Squeezy Store ID is not configured");
        }

        const checkoutUrl = await createCheckout({
            storeId,
            variantId,
            userId,
            userEmail,
            userName,
        });

        return { url: checkoutUrl };
    } catch (error: any) {
        console.error("Checkout error:", error);
        return { error: error.message || "Failed to create checkout" };
    }
}
