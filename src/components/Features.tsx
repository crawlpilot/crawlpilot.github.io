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
            icon: Zap
        },
        {
            title: "Structured Data Export",
            description: "Review your extracted data in a clean, spreadsheet-like interface before exporting. Filter, sort, and edit your data, then download it as JSON, CSV, or directly to your clipboard.",
            image: "/screenshots/screenshot2.png",
            align: "left",
            icon: Database
        },
        {
            title: "Advanced Configuration",
            description: "Go beyond simple scraping with powerful configuration options. Set up custom headers, cookies, and wait conditions. Simulate user interactions to bypass complex anti-bot protections.",
            image: "/screenshots/screenshot3.png",
            align: "right",
            icon: Lock
        }
    ];

    return (
        <section id="features" className="py-24 bg-zinc-950 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                            Powerful Tools for <span className="text-primary">Modern Scraping</span>
                        </h2>
                        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                            Crawl Pilot brings enterprise-grade web scraping capabilities directly to your browser. No coding required, just point, click, and extract.
                        </p>
                    </motion.div>
                </div>

                <div className="space-y-32">
                    {featureItems.map((feature, index) => (
                        <div key={index} className={`flex flex-col ${feature.align === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
                            {/* Text Content */}
                            <motion.div
                                className="flex-1"
                                initial={{ opacity: 0, x: feature.align === 'right' ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6 ring-1 ring-primary/20">
                                    <feature.icon className="h-7 w-7" />
                                </div>
                                <h3 className="text-3xl font-bold mb-4 text-foreground">{feature.title}</h3>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                    {feature.description}
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {['AI-Powered Element Discovery', 'Local-First storage (IndexedDB)', 'Zero server-side dependencies'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-zinc-400">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Button variant="outline" className="gap-2 group">
                                    Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </motion.div>

                            {/* Image Content */}
                            <motion.div
                                className="flex-1 w-full"
                                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                                    <div className="relative rounded-2xl border border-white/10 bg-zinc-900 overflow-hidden shadow-2xl">
                                        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-zinc-900/90">
                                            <div className="flex gap-1.5">
                                                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                                <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                                <div className="w-3 h-3 rounded-full bg-green-500/20" />
                                            </div>
                                        </div>
                                        <img
                                            src={feature.image}
                                            alt={feature.title}
                                            className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.02]"
                                        />
                                    </div>

                                    {/* Decorative elements */}
                                    <div className={`absolute -z-10 top-1/2 ${feature.align === 'right' ? '-right-20' : '-left-20'} -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-20`} />
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
