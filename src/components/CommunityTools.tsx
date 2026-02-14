"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink, Globe, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function CommunityTools() {
    return (
        <section id="community" className="py-24 bg-zinc-900/50">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Powered by the <span className="text-primary">Community</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        We support tools that empower developers. Check out these extensions built by our community.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* StealthGeo Card */}
                    <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
                        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                        <div className="relative z-10">
                            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <Globe className="h-6 w-6" />
                            </div>

                            <h3 className="mb-3 text-2xl font-bold text-foreground">StealthGeo</h3>

                            <p className="mb-6 text-muted-foreground leading-relaxed">
                                Advanced geolocation spoofing and proxy management for developers. Test your applications globally without leaving your desk.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                <span className="inline-flex items-center gap-1 rounded-full bg-zinc-900 px-2.5 py-0.5 text-xs font-medium text-zinc-400 border border-zinc-800">
                                    <ShieldCheck className="w-3 h-3" /> Privacy Focused
                                </span>
                                <span className="inline-flex items-center gap-1 rounded-full bg-zinc-900 px-2.5 py-0.5 text-xs font-medium text-zinc-400 border border-zinc-800">
                                    <Globe className="w-3 h-3" /> Global Proxy
                                </span>
                            </div>

                            <Link
                                href="https://chromewebstore.google.com/detail/stealthgeo/cloimcjdoaokjledehpbdkedgpdlcloe?authuser=1&hl=en-GB"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button className="w-full gap-2 group-hover:bg-primary group-hover:text-white transition-colors">
                                    View in Chrome Store <ExternalLink className="w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Placeholder for future tools */}
                    <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/50 p-8 flex flex-col items-center justify-center text-center opacity-75">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 text-zinc-600">
                            <div className="text-xl font-mono">?</div>
                        </div>
                        <h3 className="text-lg font-medium text-zinc-500 mb-2">Build for the Community</h3>
                        <p className="text-sm text-zinc-600">
                            Have a tool you want to feature? Join our developer ecosystem.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
