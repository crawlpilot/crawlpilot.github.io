"use client";

import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";
import {
    User,
    Mail,
    Calendar,
    ShieldCheck,
    Zap,
    ArrowRight,
    CheckCircle2,
    Settings as SettingsIcon,
    LogOut
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
    const { user, loading, logout } = useAuth();

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-32 flex items-center justify-center">
                <div className="h-8 w-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    if (!user) {
        return (
            <div className="container mx-auto px-4 py-32 text-center">
                <h1 className="text-2xl font-bold mb-4">Please log in to view your profile</h1>
                <Link href="/login">
                    <Button>Login</Button>
                </Link>
            </div>
        );
    }

    const registrationDate = user.metadata.creationTime
        ? new Date(user.metadata.creationTime).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
        : "Recent";

    return (
        <div className="container mx-auto px-4 py-8 max-w-5xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
            >
                {/* Header Profile Section */}
                <div className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-3xl bg-card border border-border/50 shadow-xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                        <User className="h-40 w-40" />
                    </div>

                    <div className="relative">
                        <div className="h-32 w-32 rounded-full bg-gradient-to-br from-primary to-purple-600 p-1 shadow-2xl">
                            {user.photoURL ? (
                                <img src={user.photoURL} alt="Avatar" className="h-full w-full rounded-full object-cover border-4 border-card" />
                            ) : (
                                <div className="h-full w-full rounded-full bg-card flex items-center justify-center text-4xl font-bold text-primary">
                                    {user.email?.[0].toUpperCase()}
                                </div>
                            )}
                        </div>
                        <div className="absolute bottom-2 right-2 h-6 w-6 rounded-full bg-green-500 border-4 border-card" />
                    </div>

                    <div className="flex-1 text-center md:text-left space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight">{user.displayName || "Crawl Pilot User"}</h1>
                        <p className="text-muted-foreground flex items-center justify-center md:justify-start gap-2">
                            <Mail className="h-4 w-4" />
                            {user.email}
                        </p>
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-4">
                            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20 flex items-center gap-1.5 uppercase tracking-wider">
                                <Zap className="h-3 w-3 fill-primary" />
                                Free Plan
                            </span>
                            <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                                <Calendar className="h-3.5 w-3.5" />
                                Member since {registrationDate}
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <Link href="/settings">
                            <Button variant="outline" className="w-full justify-start gap-2 rounded-xl">
                                <SettingsIcon className="h-4 w-4" />
                                Account Settings
                            </Button>
                        </Link>
                        <Button variant="ghost" className="text-red-400 hover:text-red-400 hover:bg-red-400/10 justify-start gap-2 rounded-xl" onClick={() => logout()}>
                            <LogOut className="h-4 w-4" />
                            Sign Out
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Account Details */}
                    <div className="md:col-span-2 space-y-8">
                        <section className="space-y-4">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                                <ShieldCheck className="h-5 w-5 text-primary" />
                                Account Verification
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-4 rounded-2xl bg-white/5 border border-border/50 flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center font-bold">✓</div>
                                    <div>
                                        <p className="text-sm font-medium">Email Verified</p>
                                        <p className="text-xs text-muted-foreground">{user.emailVerified ? "Verified" : "Pending"}</p>
                                    </div>
                                </div>
                                <div className="p-4 rounded-2xl bg-white/5 border border-border/50 flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">2FA</div>
                                    <div>
                                        <p className="text-sm font-medium">Two-Factor Auth</p>
                                        <p className="text-xs text-muted-foreground">Disabled</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Usage / Stats mockup */}
                        <section className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-bold">Current Usage</h2>
                                <Link href="/jobs" className="text-sm text-primary hover:underline">View All Jobs</Link>
                            </div>
                            <div className="p-6 rounded-3xl bg-white/5 border border-border/50 space-y-6">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm font-medium">
                                        <span>Extraction Credits</span>
                                        <span>24 / 100</span>
                                    </div>
                                    <div className="h-2 w-full bg-border/50 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary w-[24%]" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm font-medium">
                                        <span>API Calls</span>
                                        <span>4,102 / 10,000</span>
                                    </div>
                                    <div className="h-2 w-full bg-border/50 rounded-full overflow-hidden">
                                        <div className="h-full bg-purple-500 w-[41%]" />
                                    </div>
                                </div>
                                <p className="text-xs text-muted-foreground bg-white/5 p-3 rounded-lg border border-border/30">
                                    Your credits will reset on {new Date(new Date().setMonth(new Date().getMonth() + 1)).toLocaleDateString()}.
                                </p>
                            </div>
                        </section>
                    </div>

                    {/* Subscription Upsell */}
                    <div className="space-y-6">
                        <div className="p-6 rounded-3xl bg-gradient-to-br from-primary via-purple-600 to-primary text-white shadow-2xl shadow-primary/20 relative overflow-hidden group">
                            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/10 blur-2xl group-hover:scale-150 transition-transform duration-700" />

                            <h3 className="text-2xl font-bold mb-2">Upgrade to Pro</h3>
                            <p className="text-white/80 text-sm mb-6">Unlock powerful features and scale your data extraction.</p>

                            <ul className="space-y-3 mb-8">
                                {[
                                    "Unlimited extractions",
                                    "Premium residential proxies",
                                    "Advanced anti-bot bypass",
                                    "24/7 Priority support",
                                    "Webhooks & API access"
                                ].map((feature) => (
                                    <li key={feature} className="flex items-center gap-2 text-sm font-medium">
                                        <CheckCircle2 className="h-4 w-4 text-white" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link href="#pricing">
                                <Button className="w-full bg-white text-primary hover:bg-white/90 font-bold py-6 rounded-2xl group/btn">
                                    Become a Member
                                    <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>

                        <div className="p-6 rounded-3xl bg-card border border-border/50 space-y-4">
                            <h4 className="font-bold">Need custom limits?</h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Our Enterprise plan offers custom throughput, dedicated support, and on-premise solutions.
                            </p>
                            <Button variant="link" className="text-primary p-0 h-auto text-sm font-bold">Contact Sales</Button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
