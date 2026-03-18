"use client";

import { motion } from "framer-motion";
import { HardDrive, ShieldCheck, ServerOff } from "lucide-react";

const values = [
    {
        icon: ServerOff,
        title: "No Servers Required",
        description: "Crawl Pilot runs entirely within your browser session. No cloud infrastructure to manage or pay for."
    },
    {
        icon: ShieldCheck,
        title: "Your Data Stays Local",
        description: "Extracted data is stored on your device. We never see your data, your selectors, or your target URLs."
    },
    {
        icon: HardDrive,
        title: "No Proxy Configuration",
        description: "Uses your browser's native connection and identity. No complex rotating proxy services needed for most tasks."
    }
];

export function CoreValue() {
    return (
        <section className="py-32 relative bg-primary/5">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight mb-6 uppercase">
                        Runs completely <br />
                        <span className="text-primary italic">in your browser.</span>
                    </h2>
                    <p className="text-muted-foreground text-lg font-medium">
                        A local-first architecture designed for speed, privacy, and simplicity. No servers, no complex proxies, and no data leaks.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-12">
                    {values.map((v, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center"
                        >
                            <div className="h-20 w-20 rounded-[2rem] bg-background border border-white/5 flex items-center justify-center text-primary shadow-2xl mb-8">
                                <v.icon className="h-10 w-10" />
                            </div>
                            <h3 className="text-xl font-heading font-black mb-4 uppercase tracking-tight">{v.title}</h3>
                            <p className="text-muted-foreground font-medium leading-relaxed max-w-[280px]">
                                {v.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
