"use client";

import { motion } from "framer-motion";
import { Database, Globe, Lock, Zap, Code2, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "Bulk Page Extraction",
        description: "Define a schema visually and extract structured data from thousands of pages automatically.",
        icon: Database,
        className: "md:col-span-2",
    },
    {
        title: "Right-Click Unlocker",
        description: "Re-enable context menus, copy, and paste on sites that block them.",
        icon: Zap,
        className: "md:col-span-1",
    },
    {
        title: "Smart Data Detection",
        description: "Automatically identify and extract emails, tables, and lists from any page.",
        icon: Globe,
        className: "md:col-span-1",
    },
    {
        title: "Privacy First",
        description: "All data is stored locally in your browser using IndexedDB. No extracted data is sent to external servers.",
        icon: Lock,
        className: "md:col-span-2",
    },
];

export function Features() {
    return (
        <section id="features" className="py-24 bg-zinc-950">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Everything you <span className="text-primary">Need</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Powerful browser utilities to help you gather data efficiently and effectively.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={cn(
                                "group relative overflow-hidden rounded-2xl border border-border bg-zinc-900/50 p-8 hover:bg-zinc-900 transition-colors",
                                feature.className
                            )}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10">
                                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <feature.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
