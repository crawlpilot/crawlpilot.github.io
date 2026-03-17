"use client";

import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

export function DemoSection() {
    return (
        <section id="demo" className="py-24 relative overflow-hidden bg-zinc-950/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-black tracking-tight mb-6 uppercase"
                    >
                        See Crawl Pilot <span className="text-primary italic">in Action</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-lg font-medium"
                    >
                        Watch how easy it is to extract structured data from any product listing page in under 20 seconds.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative max-w-5xl mx-auto glass-panel rounded-[2.5rem] p-4 shadow-2xl overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

                    <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-black/40 border border-white/5">
                        <img
                            src="/walmart-demo.gif"
                            alt="Crawl Pilot Demo"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="h-20 w-20 rounded-full bg-primary/20 backdrop-blur-xl flex items-center justify-center text-primary border border-primary/30">
                                <PlayCircle className="h-10 w-10" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 grid md:grid-cols-3 gap-8 px-6 pb-4">
                        <div className="flex flex-col gap-2">
                            <div className="text-primary font-black text-xs uppercase tracking-widest">Step 1</div>
                            <div className="text-sm font-bold uppercase">Select elements</div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-primary font-black text-xs uppercase tracking-widest">Step 2</div>
                            <div className="text-sm font-bold uppercase">Auto-detect structure</div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-primary font-black text-xs uppercase tracking-widest">Step 3</div>
                            <div className="text-sm font-bold uppercase">Export clean CSV</div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="hero-glow opacity-30" />
        </section>
    );
}
