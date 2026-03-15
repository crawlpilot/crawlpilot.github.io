"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Vision() {
    return (
        <section className="py-40 relative overflow-hidden">
            {/* Cinematic Background */}
            <div className="absolute inset-0 bg-zinc-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1)_0%,transparent_60%)]" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 mb-10 text-primary/60">
                        <Sparkles className="h-5 w-5 animate-pulse" />
                        <span className="text-xs font-black uppercase tracking-[0.4em]">Our Core Mission</span>
                    </div>

                    <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-heading font-black tracking-tighter mb-12 uppercase leading-[0.85] text-foreground">
                        Web data <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-indigo-600 to-primary bg-[length:200%_auto] animate-gradient inline-block">
                            Available to Everyone
                        </span>
                    </h2>

                    <p className="text-2xl md:text-3xl text-muted-foreground font-medium leading-relaxed max-w-3xl mx-auto mb-16">
                        We are building tools that make web data as accessible and structured as a local database, empowering everyone to automate their workflows.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button size="lg" className="h-16 px-12 rounded-2xl bg-white text-black hover:bg-zinc-200 font-black uppercase tracking-widest text-xs transition-all hover:scale-105 active:scale-95">
                            Join the Evolution <ArrowRight className="h-5 w-5 ml-2" />
                        </Button>
                        <Button variant="outline" size="lg" className="h-16 px-12 rounded-2xl glass-panel border-white/10 font-black uppercase tracking-widest text-xs transition-all hover:scale-105 active:scale-95">
                            Read the Manifesto
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Decal Elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-32 h-32 border-l border-t border-white/5 rounded-tl-3xl opacity-20" />
            <div className="absolute bottom-1/2 right-0 translate-y-1/2 w-32 h-32 border-r border-b border-white/5 rounded-br-3xl opacity-20" />
        </section>
    );
}
