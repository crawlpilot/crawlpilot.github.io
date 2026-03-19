"use client";

import { motion } from "framer-motion";
import { Star, Chrome, Users } from "lucide-react";

export function TrustSection() {
    const testimonials = [
        {
            text: "Finally, a scraper that doesn't require a computer science degree. I just clicked the prices, hit export, and had my spreadsheet in seconds. It's shockingly simple.",
            author: "Alex Rivera",
            company: "E-commerce Specialist"
        },
        {
            text: "I've tried every chrome extension out there for lead gen, but this is the only one that actually handles dynamic content without breaking. Clean data, every single time.",
            author: "Sarah Chen",
            company: "Growth Lead @ Indie Studio"
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-heading font-black mb-8 uppercase tracking-tight">
                                Built for <br />
                                <span className="text-primary italic">Professionals</span>
                            </h2>
                            <p className="text-muted-foreground text-lg mb-12 font-medium">
                                Used by developers and growth teams worldwide to power their data operations.
                            </p>
                        </motion.div>

                        <div className="flex flex-wrap gap-8 items-center pt-8 border-t border-white/5">
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-1 text-yellow-500">
                                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                                </div>
                                <div className="text-xs font-black uppercase tracking-widest text-muted-foreground">Top Rated on Chrome Store</div>
                            </div>
                            <div className="h-10 w-px bg-white/10 hidden md:block" />
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Users className="h-5 w-5" />
                                </div>
                                <div className="text-xs font-black uppercase tracking-widest text-muted-foreground">100+ Active Teams</div>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-6">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-[2rem] glass-card border-white/5"
                            >
                                <p className="text-lg font-medium italic mb-6">"{t.text}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary" />
                                    <div className="text-xs font-black uppercase tracking-widest">{t.author} @ {t.company}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
