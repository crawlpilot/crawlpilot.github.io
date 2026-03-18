"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
    ShoppingCart,
    Globe,
    Share2,
    Video,
    MapPin,
    Users,
    Search,
    ChevronRight,
    ArrowRight,
    Star
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const categories = [
    {
        id: "ecommerce",
        name: "E-commerce",
        icon: ShoppingCart,
        title: "🛒 E-commerce Extraction",
        description: "Extract product titles, prices, images, and links from marketplaces.",
        items: [
            { name: "Amazon", domain: "amazon.com", desc: "Monitor competitor pricing and stock levels instantly." },
            { name: "Walmart", domain: "walmart.com", desc: "Extract full product catalogs with all attributes." },
            { name: "Flipkart", domain: "flipkart.com", desc: "Track rankings and review sentiment across categories." },
        ]
    },
    {
        id: "leads",
        name: "Lead Gen",
        icon: MapPin,
        title: "🗺 Lead Generation",
        description: "Extract business directories, contact information, and listings.",
        items: [
            { name: "Yellow Pages", domain: "yellowpages.com", desc: "Build prospect lists from local business directories." },
            { name: "Business Directories", domain: "clutch.co", desc: "Extract company details, phone numbers, and ratings." },
            { name: "LinkedIn Results", domain: "linkedin.com", desc: "Collect structured data from search results for outreach." },
        ]
    },
    {
        id: "realestate",
        name: "Real Estate",
        icon: Globe,
        title: "🏠 Real Estate Data",
        description: "Extract property listings, pricing, and location data.",
        items: [
            { name: "Zillow", domain: "zillow.com", desc: "Monitor property values and market trends in real-time." },
            { name: "Redfin", domain: "redfin.com", desc: "Extract listing details, history, and property features." },
            { name: "Realtor", domain: "realtor.com", desc: "Gather comprehensive housing data across any zip code." },
        ]
    }
];
export function UseCases() {
    const [activeTab, setActiveTab] = useState(categories[0].id);

    return (
        <section id="use-cases" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tight mb-6 uppercase">
                            Built for <span className="text-primary italic">Scale</span>
                        </h2>
                        <p className="max-w-2xl text-muted-foreground text-lg font-medium">
                            From e-commerce to lead generation, Crawl Pilot adapts to any web environment.
                        </p>
                    </motion.div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:items-start">
                    <div className="lg:w-1/4 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                className={cn(
                                    "flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 text-left shrink-0 border",
                                    activeTab === cat.id
                                        ? "bg-primary/10 border-primary/20 text-primary"
                                        : "hover:bg-white/5 border-transparent text-muted-foreground"
                                )}
                            >
                                <cat.icon className="h-5 w-5" />
                                <span className="font-heading font-bold text-sm uppercase tracking-wider">{cat.name}</span>
                            </button>
                        ))}
                    </div>

                    <div className="lg:w-3/4">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="grid md:grid-cols-3 gap-6"
                            >
                                {categories.find(c => c.id === activeTab)?.items.map((item, i) => (
                                    <div key={i} className="glass-card p-8 rounded-[2rem] hover:border-primary/40 transition-all group">
                                        <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 overflow-hidden">
                                            <img src={`https://logo.clearbit.com/${item.domain}`} alt={item.name} className="w-8 h-8 object-contain" />
                                        </div>
                                        <h4 className="text-xl font-heading font-black mb-2 uppercase tracking-tight group-hover:text-primary transition-colors">{item.name}</h4>
                                        <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 p-12 md:p-20 rounded-[3rem] glass-panel text-center relative overflow-hidden"
                >
                    <div className="relative z-10">
                        <h3 className="text-3xl md:text-5xl font-heading font-black mb-6 uppercase">Ready to Extract?</h3>
                        <p className="text-muted-foreground text-lg font-medium mb-10 max-w-xl mx-auto">
                            Used by developers and growth teams to turn the web into structured intelligence.
                        </p>
                        <Button size="lg" className="rounded-full px-12 h-16 bg-primary font-black uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20">
                            Get Started Now <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                    </div>
                    <div className="hero-glow" />
                </motion.div>
            </div>
        </section>
    );
}
