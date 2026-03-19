"use client";

import { Check, Zap, Shield, Crown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { getCheckoutUrl } from "@/app/actions/checkout";

const plans = [
    {
        id: "STARTER",
        name: "Starter",
        price: "$0",
        description: "Essential tools for individual researchers and small data projects.",
        features: [
            "Unlimited Listing Extractions",
            "1 Browser Usage Limit",
            "Free Image Downloader",
            "Chrome, Edge, Brave Support",
        ],
        cta: "Start Free",
        icon: Zap,
        popular: false,
    },
    {
        id: "BASIC",
        name: "Basic",
        price: "$5",
        description: "A step up for enthusiasts needing simple, on-demand automation.",
        features: [
            "Page Image Listing Extractions",
            "On-Demand Job Triggers",
            "2 Concurrent Browsers",
            "CSV/JSON Data Exports",
            "Chrome, Edge, Brave Support",
        ],
        cta: "Go Basic",
        icon: Zap,
        popular: false,
    },
    {
        id: "PRO",
        name: "Pro",
        price: "$9",
        description: "Advanced intelligence for professionals requiring deep data & scale.",
        features: [
            "Includes all Basic features",
            "Autonomous Auto-Selectors",
            "Detailed Page Data",
            "Smart Auto-Pagination",
            "Up to 5 Concurrent Browsers",
            "Priority Support",
            "Advanced Job Scheduling",
            "Chrome, Edge, Brave Support",
        ],
        cta: "Go Pro",
        icon: Crown,
        popular: true,
    },
    {
        id: "TEAM",
        name: "Business",
        price: "$49",
        description: "Enterprise-ready infrastructure designed for high-frequency teams.",
        features: [
            "Includes all Pro features",
            "Webhook & API Sync",
            "Google Sheets Integration",
            "Unlimited Browser Usage",
            "Team Shared Workspaces",
            "Dedicated Support",
            "Chrome, Edge, Brave Support",
        ],
        cta: "Scale Now",
        icon: Shield,
        popular: false,
    },
];

export function Pricing() {
    const { user } = useAuth();
    const [loading, setLoading] = useState<string | null>(null);

    const handleUpgrade = async (plan: typeof plans[0]) => {
        if (!user) {
            window.location.href = "/login";
            return;
        }

        if (plan.price === "$0") {
            window.location.href = "/dashboard";
            return;
        }

        setLoading(plan.id);
        try {
            let variantId = "";
            switch (plan.id) {
                case "BASIC":
                    variantId = process.env.NEXT_PUBLIC_LEMON_SQUEEZY_BASIC_VARIANT_ID || "";
                    break;
                case "PRO":
                    variantId = process.env.NEXT_PUBLIC_LEMON_SQUEEZY_PRO_VARIANT_ID || "";
                    break;
                case "TEAM":
                    variantId = process.env.NEXT_PUBLIC_LEMON_SQUEEZY_TEAM_VARIANT_ID || "";
                    break;
            }

            if (!variantId) {
                const errorMsg = `Plan variant ID for "${plan.name}" (${plan.id}) is not configured.`;
                console.error(errorMsg);
                throw new Error(errorMsg);
            }

            const result = await getCheckoutUrl(variantId, user.uid, user.email || "", user.displayName || "");
            if (result.error) throw new Error(result.error);
            if (result.url) window.location.href = result.url;
        } catch (error) {
            console.error("Upgrade failed:", error);
            alert("Checkout failed. Please try again.");
        } finally {
            setLoading(null);
        }
    };

    return (
        <section id="pricing" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tight mb-6 uppercase">
                        Transparent <span className="text-primary italic">Pricing</span>
                    </h2>
                    <p className="text-muted-foreground text-lg font-medium">
                        Powerful data shouldn't break the bank. Choose the plan that fits your scale.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative group flex flex-col p-8 rounded-[2.5rem] glass-card ${plan.popular ? "border-primary/40 shadow-2xl shadow-primary/10" : "border-white/5"}`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-10 translate-y-[-50%] px-4 py-1.5 stellar-gradient rounded-full text-[10px] font-black uppercase tracking-widest">
                                    Recommended
                                </div>
                            )}

                            <div className="mb-8">
                                <div className={`h-12 w-12 rounded-2xl flex items-center justify-center mb-6 ring-1 ${plan.popular ? "bg-primary/10 text-primary ring-primary/20" : "bg-white/5 text-zinc-400 ring-white/10"}`}>
                                    <plan.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-2xl font-heading font-black mb-1 uppercase tracking-tight">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-5xl font-black">{plan.price}</span>
                                    <span className="text-muted-foreground text-xs font-black uppercase tracking-widest opacity-40">/mo</span>
                                </div>
                                <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                                    {plan.description}
                                </p>
                            </div>

                            <ul className="space-y-4 mb-10 flex-1">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 text-sm font-medium text-zinc-400">
                                        <Check className="h-5 w-5 text-primary shrink-0" />
                                        <span className="text-[10px] font-black tracking-widest uppercase">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                size="lg"
                                onClick={() => handleUpgrade(plan)}
                                disabled={loading === plan.id}
                                className={`w-full h-14 rounded-2xl font-black uppercase tracking-widest text-[10px] gap-2 transition-all ${plan.popular ? "bg-primary hover:bg-primary/90" : "bg-white/5 border border-white/10 hover:bg-white/10"}`}
                            >
                                {loading === plan.id ? (
                                    <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>
                                        {plan.cta}
                                        <ArrowRight className="h-4 w-4" />
                                    </>
                                )}
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
