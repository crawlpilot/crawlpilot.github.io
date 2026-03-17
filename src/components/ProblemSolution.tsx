"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, ChevronRight, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProblemSolution() {
    const points = [
        {
            problem: "Brittle Selectors",
            solution: "Self-Healing AI Selectors",
            desc: "Standard scrapers break when the DOM changes. Crawl Pilot uses AI to adapt instantly."
        },
        {
            problem: "Strict Rate Limits",
            solution: "Human-Like Navigation",
            desc: "Avoid detection with human-like browser behavior and automated interaction patterns."
        },
        {
            problem: "Complex Auth Walls",
            solution: "Seamless Session Sync",
            desc: "Extract data from behind logins without leaking credentials or complex scripts."
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-heading font-black mb-8 uppercase tracking-tight">
                                Breaking the <br />
                                <span className="text-red-500 italic">Complexity Wall</span>
                            </h2>
                            <p className="text-muted-foreground text-lg mb-12 font-medium">
                                Building web scrapers manually is a losing game. Crawl Pilot handles the infrastructure, so you can focus on the intelligence.
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            {points.map((point, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 rounded-2xl glass-card border-white/5"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="h-8 w-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
                                            <AlertCircle className="h-4 w-4" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-xs font-black text-red-500/60 uppercase tracking-widest mb-1">The Pain</div>
                                            <div className="text-lg font-black uppercase mb-4">{point.problem}</div>

                                            <div className="flex items-center gap-2 text-primary mb-2">
                                                <ChevronRight className="h-4 w-4" />
                                                <div className="text-xs font-black uppercase tracking-widest">The Pilot Way</div>
                                            </div>
                                            <div className="text-base font-black text-foreground mb-2 uppercase">{point.solution}</div>
                                            <p className="text-sm text-muted-foreground leading-relaxed font-medium">{point.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-primary/20 to-indigo-600/10 border border-white/5 flex items-center justify-center p-12">
                            <div className="relative w-full h-full glass-panel rounded-[2rem] p-12 flex flex-col items-center justify-center text-center">
                                <Zap className="h-20 w-20 text-primary mb-8 animate-pulse" />
                                <h3 className="text-3xl font-heading font-black mb-4 uppercase tracking-tighter">99.9% Reliable</h3>
                                <p className="text-muted-foreground font-medium">Our browser engine ensures 24/7 data flow without manual intervention.</p>

                                <div className="mt-10 grid grid-cols-2 gap-4 w-full">
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                        <div className="text-2xl font-black text-primary">0</div>
                                        <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Blocks</div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                        <div className="text-2xl font-black text-primary">100%</div>
                                        <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Uptime</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Background glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 blur-[120px] -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
