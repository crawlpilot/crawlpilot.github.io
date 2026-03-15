"use client";

import { motion } from "framer-motion";
import { ShoppingCart, UserPlus, LineChart, Globe } from "lucide-react";

const useCases = [
    {
        title: "E-commerce Intelligence",
        description: "Monitor competitor pricing, stock levels, and product availability across global marketplaces in real-time.",
        image: "/usecase_ecommerce.png",
        icon: ShoppingCart,
        color: "from-blue-500/20 to-cyan-500/20"
    },
    {
        title: "Lead Generation",
        description: "Scale your sales pipeline by automatically extracting prospect profiles and business directories into structured leads.",
        image: "/usecase_leadgen.png",
        icon: UserPlus,
        color: "from-indigo-500/20 to-purple-500/20"
    },
    {
        title: "Market Research",
        description: "Gather sentiment data, consumer trends, and brand mentions from social platforms and niche community forums.",
        image: "/blog_mobile_scraping_1773569506030.png",
        icon: LineChart,
        color: "from-violet-500/20 to-fuchsia-500/20"
    },
    {
        title: "Content Aggregation",
        description: "Build global news feeds, real-estate catalogs, or job boards by synchronizing data from thousands of unique sources.",
        image: "/blog_scraping_future_1773568808294.png",
        icon: Globe,
        color: "from-emerald-500/20 to-teal-500/20"
    }
];

export function UseCases() {
    return (
        <section id="use-cases" className="py-32 relative overflow-hidden bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-7xl font-heading font-black tracking-tighter mb-8 uppercase leading-tight">
                            One Solution, <br />
                            <span className="text-primary">Infinite Reach</span>
                        </h2>
                        <p className="text-muted-foreground text-xl font-medium leading-relaxed">
                            Crawl Pilot empowers teams to solve complex data challenges across industries with autonomous AI intelligence.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {useCases.map((useCase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all duration-700"
                        >
                            <div className="p-10 md:p-14 relative z-10">
                                <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${useCase.color} text-primary mb-8 ring-1 ring-white/10 group-hover:scale-110 transition-transform duration-500`}>
                                    <useCase.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-3xl md:text-4xl font-heading font-black mb-6 uppercase tracking-tight">{useCase.title}</h3>
                                <p className="text-muted-foreground text-lg leading-relaxed mb-10 font-medium max-w-sm">
                                    {useCase.description}
                                </p>
                            </div>

                            {/* Image Part */}
                            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
                                <img
                                    src={useCase.image}
                                    alt={useCase.title}
                                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/80 to-background" />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                            </div>

                            {/* Interaction Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
