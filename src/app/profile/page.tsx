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
    LogOut,
    CreditCard
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { cn } from "@/lib/utils";

export default function ProfilePage() {
    const { user, loading: authLoading, logout } = useAuth();
    const [subscription, setSubscription] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchSubscription() {
            if (user?.uid) {
                try {
                    const docRef = doc(db, "users", user.uid);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        setSubscription(docSnap.data().subscription);
                    }
                } catch (error) {
                    console.error("Error fetching subscription:", error);
                } finally {
                    setLoading(false);
                }
            } else if (!authLoading) {
                setLoading(false);
            }
        }
        fetchSubscription();
    }, [user, authLoading]);

    if (authLoading || loading) {
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
                        {/* <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-4">
                            <span className={cn(
                                "px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5 uppercase tracking-wider",
                                subscription?.status === "active"
                                    ? "bg-primary/10 text-primary border-primary/20"
                                    : "bg-white/5 text-muted-foreground border-white/10"
                            )}>
                                <Zap className={cn("h-3 w-3", subscription?.status === "active" ? "fill-primary" : "")} />
                                {subscription?.plan || "Free Plan"}
                                {subscription?.status && subscription.status !== "active" && ` (${subscription.status})`}
                            </span>
                            <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                                <Calendar className="h-3.5 w-3.5" />
                                Member since {registrationDate}
                            </span>
                        </div> */}
                        <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
                            <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                                <Calendar className="h-3.5 w-3.5" />
                                Member since {registrationDate}
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <Button variant="ghost" className="text-red-400 hover:text-red-400 hover:bg-red-400/10 justify-start gap-2 rounded-xl" onClick={() => logout()}>
                            <LogOut className="h-4 w-4" />
                            Sign Out
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div className="p-6 rounded-3xl bg-card border border-border/50 space-y-4">
                            <h4 className="font-bold">Need help?</h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Our support team is available 24/7 to help you with integration or billing questions.
                            </p>
                            <Button variant="link" className="text-primary p-0 h-auto text-sm font-bold">Contact Support</Button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
