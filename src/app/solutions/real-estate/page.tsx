"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Map, Home, Layers, Zap, Building2, MousePointer2, TrendingUp, Search } from "lucide-react";
import Link from "next/link";

export default function RealEstateSolution() {
    const features = [
        {
            title: "Visual Data Selection",
            desc: "Select property titles, prices, and locations directly on the page without writing complex selectors.",
            icon: <MousePointer2 className="h-6 w-6" />
        },
        {
            title: "Multi-Page Crawling",
            desc: "Automatically follow pagination to extract hundreds of listings across major property portals.",
            icon: <Layers className="h-6 w-6" />
        },
        {
            title: "Dynamic Site Support",
            desc: "Full browser rendering allows you to capture data from dynamic listing maps and interactive property cards.",
            icon: <Zap className="h-6 w-6" />
        },
        {
            title: "Market Heatmap Ready",
            desc: "Extract structured geographical data ready for analysis in GIS tools or internal market databases.",
            icon: <Map className="h-6 w-6" />
        }
    ];

    const dataPoints = [
        "Listing Title & Price", "Beds / Baths / Sq Ft", "Full Street Address",
        "Agent Contact Details", "Property Descriptions", "Image & Listing URLs"
    ];

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="pt-32 pb-20 relative overflow-hidden">
                    <div className="container mx-auto px-4 md:px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex-1 space-y-8"
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary">
                                    <Building2 className="h-4 w-4" />
                                    <span className="text-[10px] font-black uppercase tracking-widest">Real Estate Intelligence</span>
                                </div>
                                <h1 className="text-5xl md:text-7xl font-heading font-black leading-[0.9] uppercase tracking-tighter">
                                    Map Your <br />
                                    <span className="text-gradient">Advantage.</span>
                                </h1>
                                <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-xl">
                                    Turn property portals into structured real estate intelligence. Extract prices, specs, and agent details to fuel your market analysis.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {dataPoints.map((point, i) => (
                                        <div key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                                            {point}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Link href="https://chromewebstore.google.com/detail/crawl-pilot/olkkbkkeikjphjoibfafnaiphdclffkd?authuser=1&hl=en-GB" target="_blank">
                                        <Button size="lg" className="h-16 px-10 rounded-2xl bg-primary font-black uppercase tracking-widest text-xs shadow-2xl shadow-primary/20">
                                            Start Extracting Listings <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex-1 relative"
                            >
                                <div className="relative aspect-square rounded-[3rem] overflow-hidden glass-card p-2 border-white/10 shadow-2xl group">
                                    <img
                                        src="/solutions/real-estate.png"
                                        alt="Real Estate Automation"
                                        className="w-full h-full object-cover rounded-[2.5rem] opacity-90 group-hover:opacity-100 transition-opacity"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
                                </div>
                                <div className="absolute -inset-10 bg-primary/20 blur-[100px] -z-10 opacity-50" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-24 bg-white/[0.02]">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-16 space-y-4">
                            <h2 className="text-3xl md:text-5xl font-heading font-black uppercase">Structured Property Intelligence</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">Build internal databases of available property listings. Track market valuations and listing trends with autonomous browser agents.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {features.map((f, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass-card p-10 rounded-[2.5rem] border-white/5 hover:border-primary/20 transition-all group"
                                >
                                    <div className="h-14 w-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                                        {f.icon}
                                    </div>
                                    <h3 className="text-xl font-heading font-black uppercase mb-4">{f.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                                        {f.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Workflow section */}
                <section className="py-24 relative">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="glass-card p-12 md:p-20 rounded-[3rem] border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                <div className="space-y-8">
                                    <h2 className="text-4xl font-heading font-black uppercase">The Property <br /><span className="text-gradient">Scraping Pipeline</span></h2>
                                    <div className="space-y-6">
                                        {[
                                            "Search on any property portal",
                                            "Select title, price, and address",
                                            "Detect repeating listing patterns",
                                            "Follow pagination automatically",
                                            "Export to CRM or analytical database"
                                        ].map((step, i) => (
                                            <div key={i} className="flex items-center gap-4">
                                                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black text-xs">
                                                    {i + 1}
                                                </div>
                                                <p className="font-bold text-muted-foreground uppercase text-xs tracking-wider">{step}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="aspect-video rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center overflow-hidden">
                                        <div className="text-center space-y-4 px-8">
                                            <Search className="h-12 w-12 text-primary mx-auto animate-pulse" />
                                            <p className="text-sm font-black uppercase tracking-widest opacity-40">Autonomous Property Discovery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who benefits? */}
                <section className="py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-heading font-black uppercase">Who Uses This?</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: "Real Estate Analysts", desc: "Monitor housing fluctuations and build complex neighborhood valuation reports." },
                                { title: "Lead Generation Teams", desc: "Collect listing agent info and homeowner leads for outreach campaigns." },
                                { title: "PropTech Developers", desc: "Seed platforms with real-world property listings and historical price data." }
                            ].map((item, i) => (
                                <div key={i} className="p-8 rounded-2xl border border-white/5 bg-white/[0.01] text-center space-y-4">
                                    <h4 className="font-black uppercase tracking-tight">{item.title}</h4>
                                    <p className="text-sm text-muted-foreground font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
