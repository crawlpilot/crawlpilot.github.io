"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setMessage(null);

        const supabase = createClient();

        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    emailRedirectTo: `${window.location.origin}/auth/callback`,
                },
            });

            if (error) {
                throw error;
            }

            // If sign up doesn't require verification (or if auto-login occurs)
            if (data.session) {
                try {
                    const extensionId = "obkajpmefemkleeggkfhnmpileijgecc";
                    if (typeof window !== 'undefined' && (window as any).chrome && (window as any).chrome.runtime) {
                        (window as any).chrome.runtime.sendMessage(
                            extensionId,
                            { type: "AUTH_SUCCESS", token: data.session.access_token }
                        );
                    }
                } catch (extError) {
                    // Ignore
                }
                router.push("/dashboard");
            } else {
                setMessage("Check your email for the confirmation link to complete registration.");
            }

        } catch (err: any) {
            setError(err.message || "Failed to create account.");
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
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500" />
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl -z-10" />
                    <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl -z-10" />

                    <div className="text-center">
                        <h1 className="text-3xl font-bold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                            Create an account
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Enter your email below to create your account.
                        </p>
                    </div>

                    <form onSubmit={handleSignup} className="space-y-6">
                        {error && (
                            <div className="p-3 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg text-center">
                                {error}
                            </div>
                        )}

                        {message && (
                            <div className="p-3 text-sm text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg text-center">
                                {message}
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
                                    className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors hover:border-purple-500/50"
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
                                    className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors hover:border-purple-500/50"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full active:scale-[0.98]"
                        >
                            {loading ? "Creating account..." : "Sign up"}
                        </button>
                    </form>

                    <div className="text-center text-sm text-muted-foreground mt-4">
                        Already have an account?{" "}
                        <Link href="/login" className="underline underline-offset-4 hover:text-white transition-colors">
                            Sign in
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
