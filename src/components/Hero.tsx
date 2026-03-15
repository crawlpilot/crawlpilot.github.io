"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Terminal, ArrowRight, CheckCircle2, ShieldCheck, Zap, Database } from "lucide-react";
import { useRef } from "react";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative pt-32 pb-20 md:pt-48 md:pb-48 overflow-hidden bg-background">
            {/* Dynamic Mesh Background */}
            <div className="absolute inset-0 -z-10 bg-background overflow-hidden">
                <motion.div
                    style={{ y: y1 }}
                    className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/20 rounded-full blur-[140px] opacity-40 animate-pulse"
                />
                <motion.div
                    style={{ y: y2 }}
                    className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/20 rounded-full blur-[160px] opacity-30"
                />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,transparent_70%)]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 lg:gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-start text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-black tracking-widest text-primary mb-8 backdrop-blur-md uppercase shadow-[0_0_30px_rgba(99,102,241,0.2)]"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(99,102,241,1)] animate-pulse"></span>
                            Browser-Based Data Extraction
                        </motion.div>

                        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[9.5rem] font-heading font-black tracking-tighter mb-8 leading-[0.8] text-foreground uppercase">
                            Trusted <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-indigo-400 to-primary bg-[length:200%_auto] animate-gradient inline-block">
                                Web Data
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-xl leading-relaxed font-medium">
                            Turn any website into structured data with a <span className="text-foreground border-b-2 border-primary/30">point-and-click browser extension</span>. Clean, regular, and trusted intelligence for your business pipelines.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
                            <Link href="https://chromewebstore.google.com/detail/Crawl%20Pilot/olkkbkkeikjphjoibfafnaiphdclffkd" target="_blank" className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-indigo-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                <Button size="lg" className="relative w-full gap-3 h-16 px-10 text-lg font-black uppercase tracking-widest shadow-2xl transition-all hover:scale-[1.02] active:scale-95 bg-primary hover:bg-primary/90 rounded-2xl">
                                    Start Free Crawl <ArrowRight className="h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="https://github.com/crawlpilot/crawlPilot" target="_blank">
                                <Button size="lg" variant="outline" className="w-full gap-3 h-16 px-10 text-lg font-black uppercase tracking-widest glass-panel border-white/10 transition-all hover:scale-[1.02] active:scale-95 rounded-2xl hover:bg-white/5">
                                    Developer SDK <Terminal className="h-5 w-5" />
                                </Button>
                            </Link>
                        </div>

                        <div className="mt-16 grid grid-cols-3 gap-12 w-full border-t border-white/5 pt-10">
                            {[
                                { label: "Hidelity", value: "99.9%+", icon: ShieldCheck },
                                { label: "Speed", value: "Instant", icon: Zap },
                                { label: "Processing", value: "Local", icon: Database },
                            ].map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 + i * 0.1 }}
                                    className="flex flex-col gap-2"
                                >
                                    <div className="text-primary/60 mb-1">
                                        <stat.icon className="h-5 w-5" />
                                    </div>
                                    <div className="text-3xl font-black text-foreground font-heading tracking-tighter uppercase leading-none">{stat.value}</div>
                                    <div className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] opacity-60">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
                        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                        className="relative hidden lg:block"
                        style={{ perspective: "1000px" }}
                    >
                        {/* Advanced Browser Mockup */}
                        <div className="relative z-10 glass-panel rounded-3xl p-1.5 shadow-[0_40px_100px_rgba(0,0,0,0.6)] group transition-all duration-1000 hover:shadow-primary/20">
                            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5 rounded-t-[1.4rem]">
                                <div className="flex gap-2">
                                    <div className="w-3.5 h-3.5 rounded-full bg-white/10 border border-white/5" />
                                    <div className="w-3.5 h-3.5 rounded-full bg-white/10 border border-white/5" />
                                    <div className="w-3.5 h-3.5 rounded-full bg-white/10 border border-white/5" />
                                </div>
                                <div className="mx-auto w-3/5 h-8 rounded-xl bg-black/40 border border-white/5 px-4 flex items-center gap-3 text-xs text-zinc-500 font-medium">
                                    <ShieldCheck className="h-3 w-3 text-primary/60" />
                                    <span className="truncate">secure.crawlpilot.ai/intelligence</span>
                                </div>
                                <div className="w-12" />
                            </div>
                            <div className="aspect-[16/10] overflow-hidden rounded-b-[1.4rem] bg-zinc-950 relative">
                                <motion.img
                                    initial={{ scale: 1.1, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 0.95 }}
                                    transition={{ duration: 1.5, delay: 0.5 }}
                                    src="/screenshots/screenshot1.png"
                                    alt="Crawl Pilot Intelligence Dashboard"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-indigo-500/10 mix-blend-overlay" />

                                {/* Pulse Effect Overlay */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1)_0%,transparent_50%)] animate-pulse" />
                            </div>
                        </div>

                        {/* Floating Interaction Cards */}
                        <motion.div
                            animate={{ y: [0, -20, 0], rotate: [2, 0, 2] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            className="absolute -top-12 -right-12 glass-panel p-6 rounded-2xl shadow-2xl z-20 border-primary/30 backdrop-blur-3xl"
                        >
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary ring-1 ring-primary/40 shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                                    <CheckCircle2 className="h-7 w-7" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1">Validated</div>
                                    <div className="text-base font-black text-foreground uppercase tracking-tight">Structured Data</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0], rotate: [-1, 1, -1] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-10 -left-12 glass-panel px-6 py-5 rounded-2x border-indigo-500/30 z-20 backdrop-blur-3xl flex items-center gap-4"
                        >
                            <div className="h-10 w-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                                <Zap className="h-5 w-5" />
                            </div>
                            <div className="text-sm font-black text-foreground uppercase tracking-wider">AI Extraction Active</div>
                        </motion.div>

                        {/* Aesthetic Glow Stacks */}
                        <div className="absolute -inset-16 bg-primary/10 blur-[120px] -z-10 rounded-full opacity-60" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/5 blur-[160px] -z-20 rotate-12" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
