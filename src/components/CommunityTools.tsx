"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink, Globe, ShieldCheck, Tv, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function CommunityTools() {
    const tools = [
        {
            title: "StealthGeo",
            icon: Globe,
            description: "Advanced geolocation spoofing and proxy management for developers.",
            link: "https://chromewebstore.google.com/detail/stealthgeo/cloimcjdoaokjledehpbdkedgpdlcloe?authuser=1&hl=en-GB",
        },
    ];

    return (
        <section id="community" className="py-24 relative overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-20 text-balance">
                    <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter mb-6 uppercase">
                        The <span className="text-primary italic">Pilot</span> Ecosystem
                    </h2>
                    <p className="text-muted-foreground text-lg font-medium leading-relaxed">
                        Supporting tools that empower developers across the web.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {tools.map((tool, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative flex flex-col p-8 rounded-[2.5rem] glass-card hover:border-primary/40 transition-all overflow-hidden"
                        >
                            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20">
                                <tool.icon className="h-6 w-6" />
                            </div>

                            <div className="flex-1">
                                <h3 className="text-2xl font-heading font-black mb-3 uppercase tracking-tight">{tool.title}</h3>
                                <p className="text-muted-foreground font-medium leading-relaxed mb-8">
                                    {tool.description}
                                </p>
                            </div>

                            <Link href={tool.link} target="_blank">
                                <Button className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 hover:bg-primary hover:text-white hover:border-primary transition-all font-black uppercase tracking-widest text-[10px] gap-2">
                                    View Product <ExternalLink className="w-3 h-3" />
                                </Button>
                            </Link>
                        </motion.div>
                    ))}

                    <div className="relative p-8 rounded-[2.5rem] border-2 border-dashed border-white/5 bg-white/[0.02] flex flex-col items-center justify-center text-center">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-zinc-600">
                            <Zap className="h-5 w-5 opacity-20" />
                        </div>
                        <h3 className="text-xl font-heading font-black text-muted-foreground mb-2 uppercase tracking-tight">Expand Hud</h3>
                        <p className="text-xs text-zinc-500 font-medium mb-6">Have a tool you want to feature?</p>
                        <Button variant="outline" className="h-10 px-6 rounded-xl border-white/10 glass-panel font-black uppercase tracking-widest text-[9px]">
                            Join Hub
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
