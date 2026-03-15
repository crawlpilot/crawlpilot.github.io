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
        title: "🛒 E-commerce Product Data",
        description: "Crawl Pilot works across global marketplaces to deliver high-fidelity product intelligence.",
        items: [
            { name: "Amazon", handle: "@Amazon", desc: "Extract product titles, prices, ratings, images, descriptions, variants and ASIN details.", color: "from-orange-500/10 to-transparent" },
            { name: "Flipkart", handle: "@Flipkart", desc: "Scrape product listings, pricing data, ratings, reviews and specifications.", color: "from-blue-500/10 to-transparent" },
            { name: "Walmart", handle: "@Walmart", desc: "Extract product catalogs, price changes, reviews and inventory data.", color: "from-blue-400/10 to-transparent" },
            { name: "Alibaba", handle: "@Alibaba", desc: "Collect supplier listings, product catalogs, pricing ranges and manufacturer details.", color: "from-orange-600/10 to-transparent" },
            { name: "Shopify", handle: "@Shopify", desc: "Extract products, variants, pricing, descriptions and store catalogs.", color: "from-emerald-500/10 to-transparent" },
            { name: "eBay", handle: "@eBay", desc: "Scrape auction listings, seller data, pricing and product metadata.", color: "from-red-500/10 to-transparent" },
            { name: "Etsy", handle: "@Etsy", desc: "Extract handmade product listings, pricing, reviews and seller profiles.", color: "from-orange-400/10 to-transparent" },
            { name: "Home Depot", handle: "@Home Depot", desc: "Extract product details, pricing, ratings, availability and store listings.", color: "from-orange-700/10 to-transparent" },
            { name: "Costco", handle: "@Costco", desc: "Scrape product catalogs, prices, bundle offers and product descriptions.", color: "from-red-600/10 to-transparent" }
        ]
    },
    {
        id: "marketplace",
        name: "Marketplace",
        icon: Globe,
        title: "🏠 Marketplace & Listing Data",
        description: "Turn real estate and listing sites into structured data streams for intelligence gathering.",
        items: [
            { name: "Airbnb", handle: "@Airbnb", desc: "Extract listing titles, prices, locations, ratings, host information and availability.", color: "from-rose-500/10 to-transparent" },
            { name: "Zillow", handle: "@Zillow", desc: "Scrape real estate listings, pricing trends, locations and property metadata.", color: "from-blue-600/10 to-transparent" }
        ]
    },
    {
        id: "social",
        name: "Reviews & Social",
        icon: Share2,
        title: "🌍 Reviews & Social Data",
        description: "Monitor sentiment and engagement across the world's most influential platforms.",
        items: [
            { name: "Trustpilot", handle: "@Trustpilot", desc: "Extract reviews, ratings, reviewer names, countries and timestamps.", color: "from-emerald-600/10 to-transparent" },
            { name: "Twitter / X", handle: "@X", desc: "Scrape tweets, followers, engagement metrics, retweets and replies.", color: "from-zinc-500/10 to-transparent" }
        ]
    },
    {
        id: "content",
        name: "Media Content",
        icon: Video,
        title: "📸 Social Media Content",
        description: "Extract rich media details and engagement data for qualitative research.",
        items: [
            { name: "Instagram Images", handle: "@Instagram", desc: "Extract image URLs, captions, hashtags and engagement metrics.", color: "from-pink-500/10 to-transparent" },
            { name: "Instagram Profile", handle: "@Instagram", desc: "Collect follower counts, bio information, profile links and post data.", color: "from-purple-500/10 to-transparent" },
            { name: "YouTube Links", handle: "@YouTube", desc: "Extract video URLs, titles, descriptions and channel information.", color: "from-red-500/10 to-transparent" },
            { name: "YouTube Text", handle: "@YouTube", desc: "Collect video descriptions, captions and comment text for analysis.", color: "from-red-700/10 to-transparent" }
        ]
    },
    {
        id: "leads",
        name: "Local Leads",
        icon: MapPin,
        title: "🗺 Local Business Leads",
        description: "Perfect for local lead generation, sales prospecting, and market research.",
        items: [
            { name: "Google Maps", handle: "@Google Maps", desc: "Extract business names, phone numbers, websites, ratings and addresses.", color: "from-emerald-400/10 to-transparent" }
        ]
    },
    {
        id: "recruitment",
        name: "Talent Intelligence",
        icon: Users,
        title: "💼 Recruitment & Talent Intelligence",
        description: "Ideal for recruiters, talent acquisition teams, and B2B sales professionals.",
        items: [
            { name: "Job Listings", handle: "@LinkedIn", desc: "Extract job titles, companies, locations and job descriptions.", color: "from-blue-700/10 to-transparent" },
            { name: "Candidate Shortlisting", handle: "@LinkedIn", desc: "Collect candidate profiles for recruitment pipelines and hiring research.", color: "from-blue-800/10 to-transparent" },
            { name: "LinkedIn LeadGen", handle: "@LinkedIn", desc: "Extract potential business leads including founders, executives, and decision makers.", color: "from-blue-900/10 to-transparent" }
        ]
    }
];

export function UseCases() {
    const [activeTab, setActiveTab] = useState(categories[0].id);

    return (
        <section id="use-cases" className="py-32 relative overflow-hidden bg-background">
            {/* Ambient background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03)_0%,transparent_70%)] -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-5xl md:text-7xl font-heading font-black tracking-tighter mb-8 uppercase leading-tight">
                            Extract structured data <br />
                            <span className="text-primary italic">From any website</span>
                        </h2>
                        <p className="max-w-3xl text-muted-foreground text-xl font-medium leading-relaxed">
                            Crawl Pilot works across e-commerce platforms, social networks, marketplaces, job boards and business directories.
                        </p>
                    </motion.div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:items-start">
                    {/* Category Navigation */}
                    <div className="lg:w-1/4 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                className={cn(
                                    "flex items-center gap-4 px-6 py-5 rounded-2xl transition-all duration-300 text-left shrink-0",
                                    activeTab === cat.id
                                        ? "bg-primary/10 border border-primary/20 text-primary shadow-[0_0_20px_rgba(99,102,241,0.1)]"
                                        : "hover:bg-white/5 border border-transparent text-muted-foreground"
                                )}
                            >
                                <cat.icon className={cn("h-6 w-6 transition-transform", activeTab === cat.id && "scale-110")} />
                                <span className="font-black uppercase tracking-widest text-xs hidden lg:block">{cat.name}</span>
                                {activeTab === cat.id && <ChevronRight className="h-4 w-4 ml-auto hidden lg:block" />}
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="lg:w-3/4">
                        <AnimatePresence mode="wait">
                            {categories.filter(c => c.id === activeTab).map((category) => (
                                <motion.div
                                    key={category.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="space-y-12"
                                >
                                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-10">
                                        <div className="max-w-2xl">
                                            <h3 className="text-3xl md:text-4xl font-heading font-black mb-4 uppercase tracking-tight">{category.title}</h3>
                                            <p className="text-muted-foreground text-lg font-medium leading-relaxed">
                                                {category.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                                        {category.items.map((item, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.05 }}
                                                className="group relative glass-panel p-8 rounded-[2rem] hover:border-primary/40 transition-all duration-500 overflow-hidden"
                                            >
                                                {/* Brand Background Glow */}
                                                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700", item.color)} />

                                                <div className="relative z-10">
                                                    <div className="flex items-center justify-between mb-6">
                                                        <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-black text-xs uppercase tracking-tighter text-foreground group-hover:scale-110 transition-transform">
                                                            {item.name.substring(0, 2)}
                                                        </div>
                                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary transition-opacity opacity-40 group-hover:opacity-100">{item.handle}</span>
                                                    </div>
                                                    <h4 className="text-xl font-heading font-black mb-3 uppercase tracking-tight group-hover:text-primary transition-colors">
                                                        {item.name}
                                                    </h4>
                                                    <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Final Callout Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 p-12 lg:p-20 rounded-[3rem] glass-panel border-primary/20 relative overflow-hidden text-center"
                >
                    <div className="absolute top-0 right-0 p-8 text-primary/10 -z-10">
                        <Search className="h-64 w-64" />
                    </div>

                    <h3 className="text-4xl md:text-6xl font-heading font-black mb-8 uppercase tracking-tighter">
                        Scrape Data From <br />
                        <span className="stellar-gradient bg-clip-text text-transparent italic">Any Website</span>
                    </h3>
                    <p className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl font-medium leading-relaxed mb-12">
                        Crawl Pilot works on almost any webpage. If the data appears on the page — Crawl Pilot can extract it with autonomous intelligence.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        {["Competitive Intelligence", "Price Monitoring", "Lead Generation", "Market Research", "AI Training Datasets"].map((tag, i) => (
                            <div key={i} className="px-6 py-2 rounded-full border border-white/5 bg-white/[0.02] text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                                {tag}
                            </div>
                        ))}
                    </div>

                    <div className="mt-16">
                        <Button size="lg" className="h-16 px-12 rounded-2xl bg-primary text-white font-black uppercase tracking-widest text-xs transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20">
                            Build Your First Pipeline <ArrowRight className="h-5 w-5 ml-2" />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
