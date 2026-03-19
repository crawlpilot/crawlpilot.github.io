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
            { name: "Amazon", domain: "amazon.com", iconPath: "/icons/amazon.jpeg", desc: "Extract product titles, prices, and reviews directly from Amazon listings." },
            { name: "Walmart", domain: "walmart.com", iconPath: "/icons/walmart.jpeg", desc: "Instantly capture product details and specifications into structured CSV/JSON." },
            { name: "Flipkart", domain: "flipkart.com", iconPath: "/icons/flipkart.jpeg", desc: "Convert product search results into clean, organized data tables." },
        ]
    },
    {
        id: "leads",
        name: "Lead Gen",
        icon: MapPin,
        title: "🗺 Lead Generation",
        description: "Extract business directories, contact information, and listings.",
        items: [
            { name: "Google Maps", domain: "maps.google.com", iconPath: "/icons/Google_Maps.jpeg", desc: "Extract business names, addresses, and ratings from Maps search results." },
            { name: "Yelp", domain: "yelp.com", iconPath: "/icons/yelp.jpeg", desc: "Collect restaurant and service details including reviews and contact info." },
            { name: "Business Directories", domain: "clutch.co", iconPath: "/icons/busines_directory.jpeg", desc: "Extract company listings and contact details from any industry directory." },
            { name: "Yellow Pages", domain: "yellowpages.com", iconPath: "/icons/yellowpages.jpeg", desc: "Capture directory listings and contact information in bulk." },
        ]
    },
    {
        id: "realestate",
        name: "Real Estate",
        icon: Globe,
        title: "🏠 Real Estate Data",
        description: "Extract property listings, pricing, and location data.",
        items: [
            { name: "Zillow", domain: "zillow.com", iconPath: "/icons/Zillow.jpeg", desc: "Export property listings, prices, and home features with a single click." },
            { name: "Redfin", domain: "redfin.com", iconPath: "/icons/redfin.jpeg", desc: "Extract housing data and community details from search result pages." },
            { name: "Realtor", domain: "realtor.com", iconPath: "/icons/Realtor.jpeg", desc: "Convert real estate listings into structured data for market analysis." },
        ]
    },
    {
        id: "social",
        name: "Social Media",
        icon: Share2,
        title: "📱 Social Media Data",
        description: "Extract profiles, posts, and engagement metrics.",
        items: [
            { name: "Instagram", domain: "instagram.com", iconPath: "/icons/instagram.jpeg", desc: "Extract profiles, post captions, and engagement data from feeds." },
            { name: "LinkedIn", domain: "linkedin.com", iconPath: "/icons/linkedin.jpeg", desc: "Capture professional profile data and company listings from search results." },
            { name: "Twitter", domain: "twitter.com", iconPath: "/icons/twitter.jpeg", desc: "Extract leads, tweets, user profiles, and data from search result lists." },
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
                                            {(item as any).iconPath ? (
                                                <img
                                                    src={(item as any).iconPath}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <Globe className="w-6 h-6 text-primary/40" />
                                            )}
                                        </div>
                                        <h4 className="text-xl font-heading font-black mb-2 uppercase tracking-tight group-hover:text-primary transition-colors">{item.name}</h4>
                                        <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

            </div>
        </section>
    );
}
