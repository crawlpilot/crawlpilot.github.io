"use client";

import { motion } from "framer-motion";
import { Database, Globe, Lock, Zap, Code2, Layers, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const features = [
    {
        title: "AI-Powered Selectors",
        description: "Intelligent selection engine that understands page structure. Define extraction rules once, scrape everywhere.",
        icon: Database,
        className: "md:col-span-2",
    },
    {
        title: "Bypass Restrictions",
        description: "Advanced tools to handle copy protection and right-click disabling on any website.",
        icon: Zap,
        className: "md:col-span-1",
    },
    {
        title: "Community Ecosystem",
        description: "Access a suite of community-built extensions like StealthGeo and StreamFlix IPTV.",
        icon: Globe,
        className: "md:col-span-1",
    },
    {
        title: "Local-First Architecture",
        description: "All processing happens on your device. Your data never touches our servers—private by design.",
        icon: Lock,
        className: "md:col-span-2",
    },
];

export function Features() {
    const featureItems = [
        {
            title: "Smart Visual Extraction",
            description: "Simply point and click to define what you want to extract. Our intelligent selector engine understands the structure of the page, handling pagination, infinite scrolling, and nested lists automatically.",
            image: "/screenshots/screenshot4.png",
            align: "right",
            icon: Zap,
            stats: ["99.9% Accuracy", "No Coding Required"]
        },
        {
            title: "Structured Data Export",
            description: "Review your extracted data in a clean, spreadsheet-like interface before exporting. Filter, sort, and edit your data, then download it as JSON, CSV, or directly to your clipboard.",
            image: "/screenshots/screenshot2.png",
            align: "left",
            icon: Database,
            stats: ["Instant CSV/JSON", "Cloud Sync Ready"]
        },
        {
            title: "Advanced Configuration",
            description: "Go beyond simple scraping with powerful configuration options. Set up custom headers, cookies, and wait conditions. Simulate user interactions to bypass complex anti-bot protections.",
            image: "/screenshots/screenshot3.png",
            align: "right",
            icon: Lock,
            stats: ["Proxy Support", "Stealth Engine"]
        }
    ];

    return (
        <section id="features" className="py-24 relative overflow-hidden bg-background">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter mb-8 uppercase">
                            Enterprise <span className="text-primary">Capabilities</span>
                        </h2>
                        <p className="text-muted-foreground text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                            Crawl Pilot brings sophisticated web scraping infrastructure directly to your browser—zero server costs, zero complexity.
                        </p>
                    </motion.div>
                </div>

                <div className="space-y-48">
                    {featureItems.map((feature, index) => (
                        <div key={index} className={`flex flex-col ${feature.align === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-32 items-center`}>
                            {/* Text Content */}
                            <motion.div
                                className="flex-1 text-left"
                                initial={{ opacity: 0, x: feature.align === 'right' ? -40 : 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-8 ring-1 ring-primary/30 shadow-[0_0_20px_rgba(99,102,241,0.1)]">
                                    <feature.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-4xl md:text-5xl font-heading font-black mb-6 text-foreground tracking-tight leading-none uppercase">
                                    {feature.title}
                                </h3>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-10 font-medium">
                                    {feature.description}
                                </p>

                                <div className="grid grid-cols-2 gap-6 mb-10">
                                    {feature.stats.map((stat, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="h-2 w-2 rounded-full bg-primary" />
                                            <span className="text-sm font-black uppercase tracking-widest text-foreground/80">{stat}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button variant="outline" className="h-14 px-8 rounded-2xl border-white/10 glass-panel font-black uppercase tracking-widest text-xs gap-3 hover:scale-105 transition-all">
                                    Learn More <ArrowRight className="h-4 w-4" />
                                </Button>
                            </motion.div>

                            {/* Image Content (Browser Mockup) */}
                            <motion.div
                                className="flex-1 w-full"
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <div className="relative group">
                                    {/* Ambient Glow */}
                                    <div className="absolute -inset-10 bg-primary/10 blur-[80px] rounded-full opacity-50 group-hover:opacity-80 transition-opacity" />

                                    <div className="relative glass-panel rounded-2xl p-1 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                                        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5 rounded-t-2xl">
                                            <div className="flex gap-1.5">
                                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                            </div>
                                            <div className="mx-auto w-1/2 h-5 rounded-lg bg-black/40 border border-white/10" />
                                        </div>
                                        <div className="overflow-hidden rounded-b-2xl bg-zinc-950">
                                            <img
                                                src={feature.image}
                                                alt={feature.title}
                                                className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity"
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
