"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { FileText, PlayCircle, BookOpen, Terminal, Download, Globe, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const resourceGroups = [
    {
        title: "Getting Started",
        items: [
            { title: "Video Tutorials", icon: PlayCircle, desc: "Watch how to build complex pipelines.", link: "#" },
        ]
    },
    {
        title: "Developer Tools",
        items: [
            { title: "Chrome Extension", icon: Globe, desc: "The point-and-click extraction engine.", link: "https://chromewebstore.google.com/detail/crawl-pilot/olkkbkkeikjphjoibfafnaiphdclffkd?authuser=1&hl=en-GB" },
            { title: "Developer SDK", icon: Terminal, desc: "Native integration for Node.js and Python.", link: "https://github.com/crawlpilot" },
            { title: "Stealth Protocols", icon: ShieldCheck, desc: "Documentation on our anti-blocking tech.", link: "#" },
        ]
    },
    {
        title: "Case Studies & Whitepapers",
        items: [
            { title: "E-commerce Scaling", icon: FileText, desc: "How to monitor 1M+ products daily.", link: "#" },
            { title: "AI Training Data", icon: Database, desc: "Generating high-fidelity LLM datasets.", link: "#" },
            { title: "Compliance Framework", icon: ShieldCheck, desc: "Legal and ethical scraping standards.", link: "/blog/privacy-and-ethics" },
        ]
    }
];

function Database(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5V19A9 3 0 0 0 21 19V5" />
            <path d="M3 12A9 3 0 0 0 21 12" />
        </svg>
    )
}

export default function ResourcesPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-1 pt-32 pb-24">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <header className="mb-20 text-balance text-left bg-gradient-to-br from-white/5 to-transparent p-12 rounded-[3rem] border border-white/5 relative overflow-hidden">
                        <div className="relative z-10">
                            <h1 className="text-5xl md:text-7xl font-heading font-black tracking-tighter mb-8 uppercase leading-[0.9]">
                                Pilot <span className="text-primary italic">Resources</span>
                            </h1>
                            <p className="text-xl text-muted-foreground font-medium max-w-2xl">
                                Everything you need to master autonomous data extraction and build resilient intelligence pipelines.
                            </p>
                        </div>
                        {/* Aesthetic glow */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] -z-10" />
                    </header>

                    <div className="space-y-24">
                        {resourceGroups.map((group, i) => (
                            <section key={group.title}>
                                <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-10 pl-2 border-l-2 border-primary/40">
                                    {group.title}
                                </h2>
                                <div className="grid md:grid-cols-3 gap-6">
                                    {group.items.map((item, j) => (
                                        <motion.a
                                            href={item.link}
                                            key={item.title}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: j * 0.1 }}
                                            className="group glass-card p-8 rounded-[2.5rem] border-white/5 hover:border-primary/40 transition-all flex flex-col"
                                        >
                                            <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary mb-6 ring-1 ring-white/10 group-hover:bg-primary group-hover:text-white transition-all">
                                                <item.icon className="h-5 w-5" />
                                            </div>
                                            <h3 className="text-xl font-heading font-black mb-3 uppercase tracking-tight">{item.title}</h3>
                                            <p className="text-sm text-muted-foreground font-medium mb-8 leading-relaxed">
                                                {item.desc}
                                            </p>
                                            <div className="mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary group-hover:gap-4 transition-all">
                                                Access Resource <Zap className="h-3 w-3" />
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>

                    <div className="mt-32 p-16 rounded-[4rem] bg-primary relative overflow-hidden text-center">
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-heading font-black text-white uppercase tracking-tighter mb-8 italic">
                                Ready to Scale Up?
                            </h2>
                            <p className="text-white/80 font-medium text-lg max-w-2xl mx-auto mb-10">
                                Join 5,000+ developers building the future of web intelligence with Crawl Pilot.
                            </p>
                            <Link href="https://chromewebstore.google.com/detail/crawl-pilot/olkkbkkeikjphjoibfafnaiphdclffkd?authuser=1&hl=en-GB" target="_blank">
                                <Button size="lg" className="h-16 px-12 rounded-2xl bg-white text-primary hover:bg-zinc-100 font-black uppercase tracking-widest text-[10px] shadow-2xl">
                                    Install Extension Now
                                </Button>
                            </Link>
                        </div>
                        {/* Textures */}
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
