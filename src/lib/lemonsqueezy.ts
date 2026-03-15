/**
 * Lemon Squeezy Utility
 * Handles checkout creation and webhook verification
 */

const LEMON_SQUEEZY_API_URL = "https://api.lemonsqueezy.com/v1";

export interface CheckoutOptions {
    storeId: string;
    variantId: string;
    userEmail: string;
    userId: string;
    userName?: string;
}

export async function createCheckout(options: CheckoutOptions) {
    const response = await fetch(`${LEMON_SQUEEZY_API_URL}/checkouts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/vnd.api+json",
            "Accept": "application/vnd.api+json",
            "Authorization": `Bearer ${process.env.LEMON_SQUEEZY_API_KEY}`,
        },
        body: JSON.stringify({
            data: {
                type: "checkouts",
                attributes: {
                    checkout_data: {
                        email: options.userEmail,
                        name: options.userName,
                        custom: {
                            user_id: options.userId,
                        },
                    },
                },
                relationships: {
                    store: {
                        data: {
                            type: "stores",
                            id: options.storeId,
                        },
                    },
                    variant: {
                        data: {
                            type: "variants",
                            id: options.variantId,
                        },
                    },
                },
            },
        }),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(`Lemon Squeezy error: ${JSON.stringify(error)}`);
    }

    const data = await response.json();
    return data.data.attributes.url;
}

export function verifyWebhookSignature(payload: string, signature: string, secret: string): boolean {
    const crypto = require("crypto");
    const hmac = crypto.createHmac("sha256", secret);
    const digest = Buffer.from(hmac.update(payload).digest("hex"), "utf8");
    const signatureBuffer = Buffer.from(signature, "utf8");

    if (signatureBuffer.length !== digest.length) {
        return false;
    }

    return crypto.timingSafeEqual(signatureBuffer, digest);
}
