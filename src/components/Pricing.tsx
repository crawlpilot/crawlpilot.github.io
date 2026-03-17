"use client";

import { Check, Zap, Shield, Crown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { getCheckoutUrl } from "@/app/actions/checkout";

const plans = [
    {
        id: "BASIC",
        name: "Developer",
        price: "$9",
        description: "Perfect for secondary projects and side-hustles.",
        features: [
            "10,000 Extraction Credits",
            "CSV/JSON Export",
            "Community Support",
            "Local Run Execution",
        ],
        cta: "Fast Track",
        icon: Zap,
        popular: false,
    },
    {
        id: "PRO",
        name: "Power User",
        price: "$29",
        description: "For professionals needing scaling intelligence.",
        features: [
            "AI-Powered Selectors",
            "Auto-Pagination Support",
            "100,000 Extraction Credits",
            "Priority Support",
            "Advanced AI Selectors",
        ],
        cta: "Fast Track",
        icon: Crown,
        popular: true,
    },
    {
        id: "TEAM",
        name: "Enterprise",
        price: "$99",
        description: "Scalable solutions for high-frequency teams.",
        features: [
            "Shared Team Workspace",
            "Unlimited Extractions",
            "Custom API Limits",
            "Dedicated Engineer Support",
            "SLA Reliability",
        ],
        cta: "Contact Sales",
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

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
                                        <span className="uppercase text-[10px] font-black tracking-widest">{feature}</span>
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
