"use client";

import { motion } from "framer-motion";
import { MousePointer2, LayoutTemplate, Download } from "lucide-react";

const steps = [
    {
        icon: MousePointer2,
        title: "Open any website",
        description: "Navigate to the page you want to extract data from. Crawl Pilot works on any public website."
    },
    {
        icon: LayoutTemplate,
        title: "Click elements",
        description: "Select the data you want to collect. Our AI instantly detects repeating structures like lists and tables."
    },
    {
        icon: Download,
        title: "Export instantly",
        description: "Download your structured data as CSV or JSON instantly, directly from your browser."
    }
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-black tracking-tight mb-6 uppercase"
                    >
                        How It <span className="text-primary italic">Works</span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card p-10 rounded-[2.5rem] border-white/5 relative group hover:border-primary/20 transition-all"
                        >
                            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 border border-primary/20 group-hover:scale-110 transition-transform">
                                <step.icon className="h-8 w-8" />
                            </div>
                            <h3 className="text-2xl font-heading font-black mb-4 uppercase tracking-tight">{step.title}</h3>
                            <p className="text-muted-foreground font-medium leading-relaxed">
                                {step.description}
                            </p>
                            <div className="absolute top-10 right-10 text-6xl font-black text-white/5 group-hover:text-primary/10 transition-colors">
                                0{i + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
