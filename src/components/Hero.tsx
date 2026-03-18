"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Terminal, ArrowRight, CheckCircle2, ShieldCheck, Zap, Database, Chrome, PlayCircle } from "lucide-react";
import { useRef } from "react";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const yVal = useTransform(scrollYProgress, [0, 1], [0, 150]);

    return (
        <section ref={containerRef} className="relative pt-32 pb-32 md:pt-48 md:pb-64 overflow-hidden">
            {/* Semantic Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)]" />
                <div className="hero-glow" style={{ top: '30%' }} />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-black tracking-[0.2em] text-primary mb-10 shadow-2xl backdrop-blur-xl uppercase"
                    >
                        <Chrome className="h-3 w-3" />
                        Next-Gen Browser Intelligence
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-8xl lg:text-9xl font-heading font-black tracking-tight mb-8 leading-[0.9] uppercase"
                    >
                        Extract structured data <br />
                        <span className="text-gradient">from any website.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-muted-foreground text-xl md:text-2xl font-medium leading-relaxed max-w-2xl mb-12"
                    >
                        Click elements on a page and instantly export clean structured data. No coding required. Runs locally in your browser.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <Link href="https://chromewebstore.google.com/detail/crawl-pilot/olkkbkkeikjphjoibfafnaiphdclffkd?authuser=1&hl=en-GB" target="_blank">
                            <Button size="lg" className="h-16 px-10 rounded-2xl bg-primary font-black uppercase tracking-widest text-xs gap-3 hover:scale-105 transition-all shadow-xl shadow-primary/20">
                                Add to Chrome <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="#demo">
                            <Button variant="outline" size="lg" className="h-16 px-10 rounded-2xl border-white/5 glass-panel font-black uppercase tracking-widest text-xs gap-3 hover:bg-white/5 flex items-center w-full sm:w-auto">
                                Watch Demo <PlayCircle className="h-4 w-4 ml-1" />
                            </Button>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-12 flex flex-col items-center gap-4"
                    >
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4, 11].map((i) => (
                                <div key={i} className="h-10 w-10 rounded-full border-2 border-background bg-zinc-800 flex items-center justify-center overflow-hidden ring-2 ring-primary/20">
                                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="User" />
                                </div>
                            ))}
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60">
                            Used by <span className="text-primary italic">developers and growth teams</span>
                        </p>
                    </motion.div>

                    {/* Dashboard Preview */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-32 w-full relative group"
                        style={{ y: yVal }}
                    >
                        <div className="relative glass-panel rounded-[2rem] p-2 shadow-[0_50px_100px_rgba(0,0,0,0.8)] border-white/10 overflow-hidden">
                            <div className="flex items-center gap-2 px-6 py-4 border-b border-white/5 bg-white/5">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40" />
                                </div>
                                <div className="mx-auto w-3/5 h-6 rounded-lg bg-black/40 border border-white/5" />
                            </div>
                            <img
                                src="/walmart-demo.gif"
                                alt="Walmart Data Extraction Demo"
                                className="w-full h-auto object-cover rounded-b-[1.8rem] opacity-90 group-hover:opacity-100 transition-opacity shadow-2xl"
                                loading="lazy"
                            />
                        </div>

                        {/* Floating elements */}
                        <div className="absolute -top-10 -right-10 hidden lg:block glass-card p-6 rounded-[2rem] shadow-2xl animate-bounce-slow">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                                    <Database className="h-5 w-5" />
                                </div>
                                <div className="text-left">
                                    <div className="text-[10px] font-black text-primary uppercase tracking-widest">Scraper Engine</div>
                                    <div className="text-sm font-black uppercase">Attribute Extraction</div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-10 -left-10 hidden lg:block glass-card p-6 rounded-[2rem] shadow-2xl animate-float">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                                    <ShieldCheck className="h-5 w-5" />
                                </div>
                                <div className="text-left">
                                    <div className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Local Mode</div>
                                    <div className="text-sm font-black uppercase">Private & Secure</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
