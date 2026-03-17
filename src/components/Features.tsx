"use client";

import { motion } from "framer-motion";
import { Database, Zap, ArrowRight, ShieldCheck, Cpu, Globe, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const features = [
    {
        title: "AI Selector Gen",
        description: "Autonomous CSS and XPath generation that learns from site structures to ensure zero-break extractions.",
        icon: <Cpu className="h-6 w-6" />,
        className: "md:col-span-2 md:row-span-2",
        image: "/screenshots/screenshot4.png",
    },
    {
        title: "Smart Navigation",
        description: "Adaptive browsing that mimics human behavior to navigate complex websites naturally.",
        icon: <Zap className="h-6 w-6" />,
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "Auto-Pagination",
        description: "Detects infinite scroll and list patterns without any manual configuration.",
        icon: <Rocket className="h-6 w-6" />,
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "Local Execution",
        description: "Runs completely in your browser. No external servers or proxies required.",
        icon: <ShieldCheck className="h-6 w-6" />,
        className: "md:col-span-1 md:row-span-2",
        image: "/screenshots/screenshot3.png",
    },
    {
        title: "Data Sync",
        description: "Push structured intelligence directly to Webhooks, Google Sheets, or your own API.",
        icon: <Database className="h-6 w-6" />,
        className: "md:col-span-2 md:row-span-1",
    },
];

export function Features() {
    return (
        <section id="features" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tight mb-6 uppercase">
                            Autonomous <span className="text-primary italic">Intelligence</span>
                        </h2>
                        <p className="text-muted-foreground text-lg font-medium">
                            Crawl Pilot isn't just a scraper. It's an AI-driven data engine that handles the complexity of the modern web for you.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 auto-rows-[240px]">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={cn(
                                "group relative overflow-hidden rounded-[2.5rem] glass-card p-8 flex flex-col justify-between",
                                feature.className
                            )}
                        >
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                                        {feature.icon}
                                    </div>
                                    <ArrowRight className="h-5 w-5 text-white/20 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-heading font-black mb-3 uppercase tracking-tight">{feature.title}</h3>
                                    <p className="text-muted-foreground text-sm font-medium leading-relaxed max-w-[280px]">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>

                            {feature.image && (
                                <div className="absolute bottom-0 right-0 w-3/4 h-1/2 opacity-20 group-hover:opacity-40 transition-opacity duration-500 transform translate-y-4 translate-x-4">
                                    <img src={feature.image} alt={feature.title} className="w-full h-full object-cover rounded-tl-3xl border-l border-t border-white/10" />
                                </div>
                            )}

                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
