"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export default function AuthCallback() {
    const router = useRouter();

    useEffect(() => {
        const supabase = createClient();

        // Supabase client automatically exchanges the URL code/hash for a session upon init.
        // We just wait for the session and redirect.
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session) {
                try {
                    const extensionId = "obkajpmefemkleeggkfhnmpileijgecc";
                    if (typeof window !== 'undefined' && (window as any).chrome && (window as any).chrome.runtime) {
                        (window as any).chrome.runtime.sendMessage(
                            extensionId,
                            { type: "AUTH_SUCCESS", token: session.access_token }
                        );
                    }
                } catch (extError) {
                    console.error(extError);
                }
                router.push("/");
            } else {
                router.push("/login?error=Invalid_link");
            }
        });
    }, [router]);

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-4"></div>
            <p className="text-muted-foreground text-sm">Authenticating, please wait...</p>
        </div>
    );
}
