"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink, Globe, ShieldCheck, Tv, Zap } from "lucide-react";
import Link from "next/link";

export function CommunityTools() {
    const tools = [
        {
            title: "StealthGeo",
            icon: Globe,
            description: "Advanced geolocation spoofing and proxy management for developers. Test your applications globally without leaving your desk.",
            tags: ["Privacy Focused", "Global Proxy"],
            link: "https://chromewebstore.google.com/detail/stealthgeo/cloimcjdoaokjledehpbdkedgpdlcloe?authuser=1&hl=en-GB",
            privacyLink: "/stealthgeo/privacy-policy"
        },
        {
            title: "StreamFlix IPTV",
            icon: Tv,
            description: "Professional IPTV Player for your browser. Stream your favorite content with a premium, sleek interface. Local-first and privacy focused.",
            tags: ["Privacy Focused", "IPTV Player"],
            link: "https://chromewebstore.google.com/detail/streamflix-iptv/pnclbjdfopkdcffapdcfeflffgmdmcno?authuser=1&hl=en-GB",
            privacyLink: "/streamflix/privacy-policy"
        }
    ];

    return (
        <section id="community" className="py-24 relative bg-background/50 border-t border-white/5">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter mb-6 uppercase">
                        Community <span className="text-primary">Ecosystem</span>
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">
                        Supporting tools that empower developers. Discover premium extensions built by our trusted community.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {tools.map((tool) => (
                        <div key={tool.title} className="group relative flex flex-col p-8 rounded-3xl glass-panel hover:border-primary/50 transition-all duration-500 hover:-translate-y-2">
                            <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-primary ring-1 ring-white/10 group-hover:bg-primary/10 transition-colors">
                                <tool.icon className="h-7 w-7" />
                            </div>

                            <h3 className="text-2xl font-heading font-bold mb-4 text-foreground tracking-tight">{tool.title}</h3>

                            <p className="text-muted-foreground font-medium leading-relaxed mb-8 flex-1">
                                {tool.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-10">
                                {tool.tags.map(tag => (
                                    <span key={tag} className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-zinc-400 border border-white/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <Link
                                href={tool.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button className="w-full h-14 rounded-2xl bg-primary/10 text-primary hover:bg-primary hover:text-white border border-primary/20 transition-all font-black uppercase tracking-widest text-xs gap-2 mb-4">
                                    View in Store <ExternalLink className="w-4 h-4" />
                                </Button>
                            </Link>

                            <Link
                                href={tool.privacyLink}
                                className="text-[10px] items-center justify-center flex font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                            >
                                Privacy Policy
                            </Link>
                        </div>
                    ))}

                    {/* Build For Community */}
                    <div className="relative p-8 rounded-3xl border-2 border-dashed border-white/5 bg-white/[0.02] flex flex-col items-center justify-center text-center group">
                        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-zinc-600 ring-1 ring-white/10">
                            <Zap className="h-7 w-7 opacity-20" />
                        </div>
                        <h3 className="text-xl font-heading font-bold text-muted-foreground mb-3 uppercase tracking-tight">Expand Ecosystem</h3>
                        <p className="text-sm text-zinc-500 font-medium mb-8">
                            Have a developer tool you want to feature here?
                        </p>
                        <Button variant="outline" className="h-12 px-6 rounded-xl border-white/10 glass-panel font-black uppercase tracking-widest text-[10px]">
                            Join Developer Hub
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
