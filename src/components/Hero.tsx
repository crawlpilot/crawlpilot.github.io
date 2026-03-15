"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-36 overflow-hidden bg-background">
            {/* Mesh Gradient Background */}
            <div className="absolute inset-0 -z-10 bg-background">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-30 animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[140px] opacity-20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)]" />
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-start text-left relative z-10"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(99,102,241,0.1)]"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_rgba(99,102,241,0.8)] animate-pulse"></span>
                            <span className="tracking-wide">V1.0 IS NOW LIVE</span>
                        </motion.div>

                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black tracking-tight mb-8 leading-[0.9] text-foreground">
                            AI-Powered <br />
                            <span className="text-transparent bg-clip-text stellar-gradient bg-[length:200%_auto] inline-block py-2">
                                Web Extraction
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed font-medium">
                            The professional browser extension that turns any website into <span className="text-foreground">structured JSON data</span> using local AI. No servers, no leaks, total privacy.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
                            <Link href="https://chromewebstore.google.com/detail/Crawl%20Pilot/olkkbkkeikjphjoibfafnaiphdclffkd" target="_blank">
                                <Button size="lg" className="w-full gap-2 h-14 px-10 text-lg font-bold shadow-2xl shadow-primary/40 transition-all hover:scale-[1.03] active:scale-95 bg-primary hover:bg-primary/90 rounded-2xl">
                                    Get Experimental v1 <ArrowRight className="h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="https://github.com/crawlpilot/crawlPilot" target="_blank">
                                <Button size="lg" variant="outline" className="w-full gap-2 h-14 px-10 text-lg font-bold glass-panel border-white/20 transition-all hover:scale-[1.03] active:scale-95 rounded-2xl">
                                    View Source <Terminal className="h-5 w-5" />
                                </Button>
                            </Link>
                        </div>

                        <div className="mt-12 grid grid-cols-3 gap-10 w-full border-t border-border/50 pt-8">
                            {[
                                { label: "Performance", value: "10x Fast" },
                                { label: "Privacy", value: "100% Local" },
                                { label: "Pricing", value: "Free Beta" },
                            ].map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                >
                                    <div className="text-2xl font-black text-foreground font-heading uppercase tracking-tighter">{stat.value}</div>
                                    <div className="text-xs font-bold text-muted-foreground uppercase opacity-70 tracking-widest">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        {/* Browser Window UI */}
                        <div className="relative z-10 glass-panel rounded-2xl p-1 shadow-[0_0_50px_rgba(0,0,0,0.5)] transform lg:rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5 rounded-t-2xl">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                                <div className="mx-auto w-3/4 h-6 rounded-lg bg-black/40 border border-white/10 px-3 flex items-center text-[10px] text-zinc-400 font-mono">
                                    <div className="flex-1 truncate">crawlpilot.ai/dashboard</div>
                                </div>
                            </div>
                            <div className="aspect-[16/10] overflow-hidden rounded-b-2xl bg-slate-900 shadow-inner">
                                <img
                                    src="/screenshots/screenshot1.png"
                                    alt="Crawl Pilot Interface"
                                    className="w-full h-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-purple-500/10 pointer-events-none" />
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 glass-panel p-5 rounded-2xl shadow-primary/10 z-20 border-primary/20 backdrop-blur-2xl"
                        >
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary ring-1 ring-primary/30">
                                    <CheckCircle2 className="h-6 w-6" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-muted-foreground uppercase opacity-70">Extraction</div>
                                    <div className="text-sm font-black text-foreground">1,240 Rows</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Background Glows */}
                        <div className="absolute -inset-10 bg-primary/20 blur-[100px] -z-10 rounded-full" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-500/10 blur-[120px] -z-20 rotate-45" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
