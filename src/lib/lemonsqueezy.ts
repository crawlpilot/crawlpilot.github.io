import {
    lemonSqueezySetup,
    createCheckout as lsCreateCheckout
} from "@lemonsqueezy/lemonsqueezy.js";
import crypto from "crypto";

/**
 * Initialize Lemon Squeezy SDK
 */
lemonSqueezySetup({
    apiKey: process.env.LEMON_SQUEEZY_API_KEY,
    onError: (error) => console.error("Lemon Squeezy SDK Error:", error),
});

export interface CheckoutOptions {
    storeId: string | number;
    variantId: string | number;
    userEmail: string;
    userId: string;
    userName?: string;
}

export async function createCheckout(options: CheckoutOptions) {
    const apiKey = process.env.LEMON_SQUEEZY_API_KEY;
    const storeId = String(options.storeId);
    const variantId = String(options.variantId);

    // Detailed logging for server-side debugging
    console.log(`[LemonSqueezy] Checkout Attempt:`, {
        storeId,
        variantId,
        hasApiKey: !!apiKey,
        apiKeyLength: apiKey?.length || 0,
        envAppUrl: process.env.NEXT_PUBLIC_APP_URL
    });

    if (!apiKey) {
        throw new Error("Lemon Squeezy API Key (LEMON_SQUEEZY_API_KEY) is missing in environment variables.");
    }

    // Lemon Squeezy requires an absolute URL for redirects
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://crawlpilot.tech';
    const redirectUrl = `${appUrl}/profile`;

    const { data, error } = await lsCreateCheckout(
        storeId,
        variantId,
        {
            checkoutData: {
                email: options.userEmail,
                name: options.userName,
                custom: {
                    user_id: options.userId,
                },
            },
            productOptions: {
                redirectUrl,
                enabledVariants: [Number(variantId)],
            },
        }
    );

    if (error) {
        console.error(`[LemonSqueezy] API Error Details:`, error);
        throw new Error(`Lemon Squeezy error: ${error.message}`);
    }

    return data?.data.attributes.url;
}

/**
 * Verify Lemon Squeezy Webhook Signature
 */
export function verifyWebhookSignature(payload: string, signature: string, secret: string): boolean {
    const hmac = crypto.createHmac("sha256", secret);
    const digest = Buffer.from(hmac.update(payload).digest("hex"), "utf8");
    const signatureBuffer = Buffer.from(signature, "utf8");

    if (signatureBuffer.length !== digest.length) {
        return false;
    }

    return crypto.timingSafeEqual(signatureBuffer, digest);
}
