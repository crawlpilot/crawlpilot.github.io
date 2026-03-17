"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Terminal, Rocket, Sparkles, Zap, Clock, Milestone, Database, Layers, Layout, Calendar } from "lucide-react";

const roadmapData = [
    {
        title: "Detailed Page Extraction",
        desc: "Automatically follow links from list views to extract full content from detail pages without manual mapping.",
        status: "Planned",
        timeline: "Q3 2026",
        icon: <Rocket className="h-5 w-5" />
    },
    {
        title: "Product Page Specialist Agent",
        desc: "Deep-learning driven agent specialized in identifying product specs, variants, and dynamic pricing cross-platform.",
        status: "Planned",
        timeline: "Q3 2026",
        icon: <Sparkles className="h-5 w-5" />
    },
    {
        title: "Autonomous Web Agents",
        desc: "AI agents that can navigate complex multi-step UI flows, handle logins, and perform goal-based actions.",
        status: "Planned",
        timeline: "Q4 2026",
        icon: <Zap className="h-5 w-5" />
    },
    {
        title: "Scheduled Extraction Jobs",
        desc: "Native support for recurring crawls with persistent state management and cloud-sync capabilities.",
        status: "Planned",
        timeline: "Q4 2026",
        icon: <Clock className="h-5 w-5" />
    },
    {
        title: "Attribute Extraction Engine",
        desc: "Advanced pattern matching engine for high-precision data capture across highly dynamic web elements.",
        status: "Deployed",
        timeline: "March 2026",
        icon: <Terminal className="h-5 w-5" />
    },
    {
        title: "Industry Specific Solutions",
        desc: "Tailored workflows for E-commerce, Lead Generation, and Real Estate intelligence.",
        status: "Deployed",
        timeline: "March 2026",
        icon: <Milestone className="h-5 w-5" />
    },
    {
        title: "SDR-Ready Lead Export",
        desc: "Optimized data structure exports specifically formatted for CRM ingestion and outreach automation.",
        status: "Deployed",
        timeline: "February 2026",
        icon: <Layers className="h-5 w-5" />
    }
];

export default function RoadmapPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />

            <main className="flex-1 pt-32 pb-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-5xl mx-auto space-y-16">
                        <div className="space-y-6 text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-4"
                            >
                                <Calendar className="h-3 w-3" />
                                2026 Protocol Timeline
                            </motion.div>
                            <h1 className="text-6xl md:text-8xl font-heading font-black leading-[0.9] uppercase tracking-tighter">
                                Protocol <span className="text-gradient">Roadmap</span>
                            </h1>
                            <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto">
                                The strategic evolution of Crawl Pilot. Our mission to turn the web into a machine-readable database, one breakthrough at a time.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {roadmapData.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.8 }}
                                    className="glass-card p-10 rounded-[3rem] border-white/5 hover:border-primary/20 transition-all group relative overflow-hidden"
                                >
                                    {/* Status Badge */}
                                    <div className={`absolute top-8 right-8 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${feature.status === 'Deployed'
                                            ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                                            : 'bg-primary/10 border-primary/20 text-primary animate-pulse'
                                        }`}>
                                        {feature.status}
                                    </div>

                                    <div className="space-y-8">
                                        <div className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors shadow-2xl">
                                            {feature.icon}
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] mb-1">{feature.timeline}</span>
                                                <h3 className="text-2xl font-black uppercase tracking-tighter leading-none group-hover:text-primary transition-colors">
                                                    {feature.title}
                                                </h3>
                                            </div>
                                            <p className="text-muted-foreground font-medium leading-relaxed">
                                                {feature.desc}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Subtle background glow on hover */}
                                    <div className="absolute -inset-24 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                                </motion.div>
                            ))}
                        </div>

                        {/* Visual Timeline Marker */}
                        <div className="pt-24 text-center">
                            <div className="inline-flex flex-col items-center gap-4">
                                <div className="h-16 w-px bg-gradient-to-b from-primary to-transparent" />
                                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground/40">Continuum Established 2026</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
