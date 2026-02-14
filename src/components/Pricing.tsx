"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
    {
        name: "Developer",
        price: "$0",
        description: "Perfect for hobby projects and testing.",
        features: ["1,000 requests/mo", "Basic Proxies", "Community Support", "1 Concurrent Thread"],
    },
    {
        name: "Startup",
        price: "$49",
        description: "For growing teams and production apps.",
        features: ["100,000 requests/mo", "Premium Proxies", "Email Support", "10 Concurrent Threads", "JS Rendering"],
        popular: true,
    },
    {
        name: "Business",
        price: "$199",
        description: "Scale your data operations.",
        features: ["1,000,000 requests/mo", "Residential Proxies", "Priority Support", "50 Concurrent Threads", "Anti-Bot Bypass"],
    },
];

export function Pricing() {
    return (
        <section id="pricing" className="py-24 border-t border-border/40">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Simple Pricing
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Pay only for successful requests. No hidden fees.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative rounded-2xl border ${plan.popular ? "border-primary shadow-lg shadow-primary/10" : "border-border"
                                } bg-zinc-900/50 p-8 flex flex-col`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                                    Most Popular
                                </div>
                            )}
                            <div className="mb-6">
                                <h3 className="text-xl font-bold">{plan.name}</h3>
                                <div className="mt-2 flex items-baseline gap-1">
                                    <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                                    <span className="text-muted-foreground">/mo</span>
                                </div>
                                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                            </div>
                            <ul className="space-y-3 mb-8 flex-1">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2 text-sm text-zinc-300">
                                        <Check className="h-4 w-4 text-primary" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Button
                                className="w-full"
                                variant={plan.popular ? "default" : "outline"}
                            >
                                Get Started
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
