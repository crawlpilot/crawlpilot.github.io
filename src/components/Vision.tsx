"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Vision() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 mb-8 text-primary/80">
                        <Sparkles className="h-4 w-4 animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">The Intelligence Revolution</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-heading font-black tracking-tighter mb-10 uppercase leading-[0.9]">
                        Data shouldn't be <br />
                        <span className="text-gradient">a bottleneck.</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto mb-12">
                        We are building the infrastructure that makes web intelligence accessible, structured, and autonomous for every developer.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://www.reddit.com/r/crawlpilot6365/" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="h-16 px-12 rounded-2xl bg-primary text-white font-black uppercase tracking-widest text-xs transition-all hover:scale-105 shadow-xl shadow-primary/20 w-full sm:w-auto">
                                Join the Movement <ArrowRight className="h-4 w-4 ml-2" />
                            </Button>
                        </Link>
                        <Link href="/blog/manifesto">
                            <Button variant="outline" size="lg" className="h-16 px-12 rounded-2xl border-white/5 glass-panel font-black uppercase tracking-widest text-xs w-full sm:w-auto">
                                Technical Manifesto
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Aesthetic accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[160px] -z-10" />
        </section>
    );
}
