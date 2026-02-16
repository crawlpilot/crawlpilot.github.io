"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="flex flex-col items-start text-left"
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary mb-6 ring-1 ring-inset ring-primary/20">
                            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="font-medium">v1.0 is Live</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-foreground">
                            AI-Powered Web Extraction, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-blue-500 animate-gradient bg-300%">
                                Right in Your Browser
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
                            CrawlPilot is the privacy-first browser extension that turns any website into clean, structured data using local AI. No servers, no data leaks, just complete control.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <Link href="https://github.com/crawlpilot/crawlPilot/releases" target="_blank">
                                <Button size="lg" className="w-full gap-2 h-12 px-8 text-base shadow-lg shadow-primary/20 transition-all hover:scale-105">
                                    Download Extension <ArrowRight className="h-4 w-4" />
                                </Button>
                            </Link>
                            <Link href="https://github.com/crawlpilot/crawlPilot" target="_blank">
                                <Button size="lg" variant="outline" className="w-full gap-2 h-12 px-8 text-base backdrop-blur-sm hover:bg-white/5 transition-all hover:scale-105">
                                    View on GitHub <Terminal className="h-4 w-4" />
                                </Button>
                            </Link>
                        </div>

                        <div className="mt-10 grid grid-cols-3 gap-6 w-full max-w-md border-t border-border pt-6">
                            <div>
                                <div className="text-2xl font-bold text-foreground">100%</div>
                                <div className="text-sm text-muted-foreground">Open Source</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-foreground">Local</div>
                                <div className="text-sm text-muted-foreground">Privacy First</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-foreground">Free</div>
                                <div className="text-sm text-muted-foreground">Forever</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotateX: 10, rotateY: -10 }}
                        animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="relative hidden lg:block perspective-1000"
                    >
                        {/* Main Screenshot Container */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            className="relative z-10 rounded-xl border border-white/10 bg-zinc-950/80 shadow-2xl backdrop-blur-sm overflow-hidden ring-1 ring-white/20 transform-gpu rotate-y-[-5deg] rotate-x-[5deg]"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-zinc-900/90">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                                </div>
                                <div className="mx-auto w-2/3 h-5 rounded-md bg-zinc-800/50 flex items-center justify-center text-[10px] text-zinc-500 font-mono">
                                    crawlpilot://dashboard
                                </div>
                            </div>
                            <div className="relative aspect-video w-full bg-zinc-950">
                                <img
                                    src="/screenshots/screenshot1.png"
                                    alt="Crawl Pilot Dashboard"
                                    className="w-full h-full object-cover object-left-top"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 to-transparent pointer-events-none" />
                            </div>
                        </motion.div>

                        {/* Decorative Background Elements */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur-2xl opacity-20 -z-10 animate-pulse" />
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/30 rounded-full blur-3xl -z-20" />
                        <div className="absolute -top-10 -left-10 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl -z-20" />

                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute -right-8 top-1/2 -translate-y-1/2 z-20 bg-zinc-900/90 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl"
                        >
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                                    <CheckCircle2 className="h-6 w-6" />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-white">Extraction Complete</div>
                                    <div className="text-xs text-zinc-400">1,240 records found</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
