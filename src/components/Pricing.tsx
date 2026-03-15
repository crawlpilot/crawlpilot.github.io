"use client";

import { Check, Zap, Shield, Crown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const plans = [
    {
        name: "Free",
        price: "$0",
        description: "Perfect for hobbyists and explorers.",
        features: [
            "Local Extraction (Basic)",
            "Unlimited Daily Runs",
            "CSV Export",
            "Community Support",
        ],
        cta: "Get Started",
        icon: Zap,
        popular: false,
    },
    {
        name: "Pro",
        price: "$29",
        description: "For power users and professionals.",
        features: [
            "AI-Powered Selectors",
            "Advanced JSON Export",
            "Auto-Pagination Support",
            "100k API Extraction Credits",
            "Priority Email Support",
        ],
        cta: "Upgrade to Pro",
        icon: Crown,
        popular: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "Scalable solutions for large teams.",
        features: [
            "Dedicated Support",
            "Custom Integration",
            "Infinite API Credits",
            "Team Management",
            "SLA Guarantees",
        ],
        cta: "Contact Sales",
        icon: Shield,
        popular: false,
    },
];

export function Pricing() {
    return (
        <section id="pricing" className="py-24 relative overflow-hidden bg-background">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter mb-6 uppercase">
                        Choose Your <span className="text-primary">Plan</span>
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">
                        Scale your data extraction from small scripts to enterprise-grade pipelines with simple, transparent pricing.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative group flex flex-col p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 ${plan.popular
                                ? "glass-panel border-primary/50 shadow-[0_0_40px_rgba(99,102,241,0.2)]"
                                : "glass-panel border-white/5"
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 stellar-gradient rounded-full text-xs font-black uppercase tracking-widest shadow-lg shadow-primary/30">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <div className={`h-12 w-12 rounded-2xl flex items-center justify-center mb-6 ring-1 ${plan.popular ? "bg-primary/20 text-primary ring-primary/30" : "bg-white/5 text-zinc-400 ring-white/10"
                                    }`}>
                                    <plan.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-2xl font-heading font-bold mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-4xl font-black">{plan.price}</span>
                                    {plan.price !== "Custom" && <span className="text-muted-foreground text-sm">/month</span>}
                                </div>
                                <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                                    {plan.description}
                                </p>
                            </div>

                            <ul className="space-y-4 mb-10 flex-1">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 text-sm font-medium text-zinc-400">
                                        <Check className="h-5 w-5 text-primary shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                size="lg"
                                variant={plan.popular ? "default" : "outline"}
                                className={`w-full h-14 rounded-2xl font-black uppercase tracking-widest text-xs gap-2 transition-all ${plan.popular ? "bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/20" : "glass-panel border-white/10"
                                    }`}
                            >
                                {plan.cta}
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
