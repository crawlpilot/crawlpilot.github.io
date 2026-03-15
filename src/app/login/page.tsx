"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const supabase = createClient();

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                throw error;
            }

            // Successful login - sync with extension if requested
            if (data.session) {
                try {
                    // Extension ID: obkajpmefemkleeggkfhnmpileijgecc
                    const extensionId = "obkajpmefemkleeggkfhnmpileijgecc";
                    // We check if chrome runtime exists (only in Chrome-based browsers)
                    if (typeof window !== 'undefined' && (window as any).chrome && (window as any).chrome.runtime) {
                        (window as any).chrome.runtime.sendMessage(
                            extensionId,
                            { type: "AUTH_SUCCESS", token: data.session.access_token },
                            (response: any) => {
                                console.log("Extension response:", response);
                            }
                        );
                    }
                } catch (extError) {
                    console.error("Failed to sync with extension:", extError);
                }
            }

            router.push("/dashboard"); // or just back home depending on where you want them to go
            router.refresh();
        } catch (err: any) {
            setError(err.message || "Failed to log in.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-background flex flex-col text-foreground">
            <Navbar />
            <main className="flex-1 flex items-center justify-center p-4">
                <div className="w-full max-w-md p-8 space-y-8 rounded-2xl border border-border bg-card/50 backdrop-blur-xl shadow-2xl relative overflow-hidden">
                    {/* Decorative Gradients */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl -z-10" />
                    <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl -z-10" />

                    <div className="text-center">
                        <h1 className="text-3xl font-bold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                            Welcome back
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Sign in to sync your Crawl Pilot extractions.
                        </p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        {error && (
                            <div className="p-3 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg text-center">
                                {error}
                            </div>
                        )}

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium leading-none text-gray-300" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors hover:border-blue-500/50"
                                    placeholder="you@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <label className="text-sm font-medium leading-none text-gray-300" htmlFor="password">
                                        Password
                                    </label>
                                </div>
                                <input
                                    id="password"
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors hover:border-blue-500/50"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full active:scale-[0.98]"
                        >
                            {loading ? "Signing in..." : "Sign in"}
                        </button>
                    </form>

                    <div className="text-center text-sm text-muted-foreground mt-4">
                        Don&apos;t have an account?{" "}
                        <Link href="/signup" className="underline underline-offset-4 hover:text-white transition-colors">
                            Sign up
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
