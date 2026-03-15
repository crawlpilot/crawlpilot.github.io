"use client";

import { motion } from "framer-motion";
import { Database, Zap, ArrowRight, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";


export function Features() {
    const featureItems = [
        {
            title: "Autonomous Intelligence",
            description: "Harness the power of AI that thinks like a human. Simply point and click—our intelligent engine autonomously identifies patterns and mapping structures, enabling complex web crawls with zero code.",
            image: "/screenshots/screenshot4.png",
            align: "right",
            icon: Zap,
            stats: ["99.9% High-Fidelity", "Autonomous Discovery"]
        },
        {
            title: "Trusted Data Pipelines",
            description: "Scale your extraction with confidence. Review, filter, and validate high-fidelity data in real-time. Export clean, structured intelligence directly to your stack via JSON, CSV, or global API sync.",
            image: "/screenshots/screenshot2.png",
            align: "left",
            icon: Database,
            stats: ["Trusted Output", "API-Driven Workflows"]
        },
        {
            title: "Fortified Extraction",
            description: "Bypass any digital boundary with advanced terminal-grade protocols. Built-in proxy shielding and stealth engines ensure regular, reliable data flow even from the most protected web environments.",
            image: "/screenshots/screenshot3.png",
            align: "right",
            icon: ShieldCheck,
            stats: ["Proxy Fortification", "Stealth Protocol"]
        }
    ];

    return (
        <section id="features" className="py-32 relative overflow-hidden bg-background">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-40">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-7xl font-heading font-black tracking-tighter mb-8 uppercase leading-none">
                            High-Fidelity <br />
                            <span className="text-primary">AI Intelligence</span>
                        </h2>
                        <p className="text-muted-foreground text-xl md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto">
                            Transform the way you interact with web data. Crawl Pilot delivers regular, trusted intelligence by leveraging modern AI architecture directly in your browser.
                        </p>
                    </motion.div>
                </div>

                <div className="space-y-64">
                    {featureItems.map((feature, index) => (
                        <div key={index} className={`flex flex-col ${feature.align === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 lg:gap-32 items-center`}>
                            {/* Text Content */}
                            <motion.div
                                className="flex-1 text-left"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <div className="inline-flex h-20 w-20 items-center justify-center rounded-[2rem] bg-primary/10 text-primary mb-10 ring-1 ring-primary/20 shadow-[0_0_30px_rgba(99,102,241,0.15)]">
                                    <feature.icon className="h-10 w-10" />
                                </div>
                                <h3 className="text-5xl md:text-6xl font-heading font-black mb-8 text-foreground tracking-tight leading-[0.9] uppercase">
                                    {feature.title}
                                </h3>
                                <p className="text-xl text-muted-foreground leading-relaxed mb-12 font-medium">
                                    {feature.description}
                                </p>

                                <div className="grid grid-cols-2 gap-8 mb-12">
                                    {feature.stats.map((stat, i) => (
                                        <div key={i} className="flex items-center gap-4 group">
                                            <div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(99,102,241,1)] group-hover:scale-150 transition-transform" />
                                            <span className="text-xs font-black uppercase tracking-[0.2em] text-foreground/80">{stat}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button variant="outline" className="h-16 px-10 rounded-2xl border-white/5 glass-panel font-black uppercase tracking-widest text-xs gap-4 hover:scale-105 transition-all hover:bg-white/5">
                                    See the Vision <ArrowRight className="h-4 w-4" />
                                </Button>
                            </motion.div>

                            {/* Image Content (Advanced Mockup) */}
                            <motion.div
                                className="flex-1 w-full"
                                initial={{ opacity: 0, y: 50, rotateY: feature.align === 'right' ? 10 : -10 }}
                                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                style={{ perspective: "1000px" }}
                            >
                                <div className="relative group">
                                    {/* Ambient Glow */}
                                    <div className="absolute -inset-16 bg-primary/10 blur-[100px] rounded-full opacity-40 group-hover:opacity-60 transition-opacity" />

                                    <div className="relative glass-panel rounded-3xl p-1.5 shadow-2xl transition-all duration-1000 group-hover:shadow-primary/10 group-hover:-translate-y-4">
                                        <div className="flex items-center gap-2.5 px-6 py-4 border-b border-white/5 bg-white/5 rounded-t-[1.4rem]">
                                            <div className="flex gap-2">
                                                <div className="w-3.5 h-3.5 rounded-full bg-white/10" />
                                                <div className="w-3.5 h-3.5 rounded-full bg-white/10" />
                                                <div className="w-3.5 h-3.5 rounded-full bg-white/10" />
                                            </div>
                                            <div className="mx-auto w-3/5 h-7 rounded-xl bg-black/40 border border-white/5" />
                                        </div>
                                        <div className="overflow-hidden rounded-b-[1.4rem] bg-zinc-950">
                                            <img
                                                src={feature.image}
                                                alt={feature.title}
                                                className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
