"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 rounded-full blur-3xl opacity-20" />
                <div className="absolute bottom-0 right-0 w-[800px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl opacity-10" />
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-sm text-muted-foreground mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-primary"></span>
                            v1.0 is now live
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                            Turn your browser into a <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                                Powerful Extraction Engine
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                            Extract structured data, emails, and images directly from your browser. Private, local, and free. No cloud dependencies.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <Button size="lg" className="gap-2">
                                Start Extracting <ArrowRight className="h-4 w-4" />
                            </Button>
                            <Link href="/docs">
                                <Button size="lg" variant="outline" className="gap-2">
                                    View Documentation <Terminal className="h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-primary" />
                                <span>Local Storage</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-primary" />
                                <span>Privacy First</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-primary" />
                                <span>No Cloud Required</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative rounded-xl border border-border bg-zinc-950 shadow-2xl overflow-hidden">
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-zinc-900/50">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                                </div>
                                <div className="text-xs text-muted-foreground font-mono ml-2">manifest.json</div>
                            </div>
                            <div className="p-4 overflow-x-auto">
                                <pre className="text-sm font-mono leading-relaxed">
                                    <code className="language-json">
                                        <span className="text-purple-400">{"{"}</span>{'\n'}
                                        {'  '}<span className="text-blue-400">"name"</span>: <span className="text-green-400">"Crawl Pilot"</span>,{'\n'}
                                        {'  '}<span className="text-blue-400">"version"</span>: <span className="text-green-400">"1.0.0"</span>,{'\n'}
                                        {'  '}<span className="text-blue-400">"permissions"</span>: <span className="text-purple-400">[</span>{'\n'}
                                        {'    '}<span className="text-green-400">"activeTab"</span>,{'\n'}
                                        {'    '}<span className="text-green-400">"storage"</span>,{'\n'}
                                        {'    '}<span className="text-green-400">"downloads"</span>{'\n'}
                                        {'  '}<span className="text-purple-400">]</span>,{'\n'}
                                        {'  '}<span className="text-blue-400">"action"</span>: <span className="text-purple-400">{"{"}</span>{'\n'}
                                        {'    '}<span className="text-blue-400">"default_title"</span>: <span className="text-green-400">"Crawl Pilot"</span>{'\n'}
                                        {'  '}<span className="text-purple-400">{"}"}</span>{'\n'}
                                        <span className="text-purple-400">{"}"}</span>
                                    </code>
                                </pre>
                            </div>
                        </div>

                        {/* Ambient glow behind code block */}
                        <div className="absolute -inset-4 -z-10 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-xl blur-xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
