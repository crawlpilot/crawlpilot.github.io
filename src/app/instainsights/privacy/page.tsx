"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Lock, Database, Share2, Mail, Info, BarChart3, CheckCircle2 } from "lucide-react";

export default function PrivacyPage() {
    const sections = [
        {
            id: "introduction",
            title: "Introduction",
            icon: Info,
            content: "instaInsights (\"we\", \"our\", or \"us\") is a browser extension tool designed to help users analyze content engagement and manage their Instagram presence. This policy explains how we handle your data when you use the instaInsights browser extension."
        },
        {
            id: "collection",
            title: "Data Collection & Storage",
            icon: Database,
            isSpecial: true,
            content: "All data collected by instaInsights is processed and stored directly on your device. We do not maintain any central servers for your analytics data.",
            items: [
                { label: "Engagement Data", desc: "Likes, views, and comment counts for analyzed content are stored in your browser's local database." },
                { label: "Configuration", desc: "Your preferences and settings are persisted locally using chrome.storage." },
                { label: "Temporary Cache", desc: "In-memory data used for active analytics sessions to ensure high performance." }
            ]
        },
        {
            id: "usage",
            title: "How We Use Your Data",
            icon: BarChart3,
            content: "The data processed by the extension is used exclusively for:",
            items: [
                "Generating engagement analytics and performance reports.",
                "Helping you manage and organize your Instagram content effectively.",
                "Improving the local analytics and data parsing algorithms."
            ]
        },
        {
            id: "permissions",
            title: "Permissions Usage",
            icon: Lock,
            isGrid: true,
            content: "instaInsights requires specific permissions to provide its core analytics features:",
            permissions: [
                { name: "instagram.com/*", desc: "Allows reading public engagement metrics (likes, views, comments) directly from Instagram pages." },
                { name: "storage", desc: "Required to store your historical analytics data and custom configurations locally." },
                { name: "downloads", desc: "Necessary to export your engagement reports and managed content files to your machine." }
            ]
        },
        {
            id: "sharing",
            title: "Data Sharing",
            icon: Share2,
            content: "We do not collect, store, or transmit any of your personal data to external servers. Your analytics remain private and are restricted to your local environment. We do not sell or share any user data with third parties."
        },
        {
            id: "rights",
            title: "Your Rights",
            icon: CheckCircle2,
            content: "You have full control over your data. You can view all stored data via the extension's dashboard and delete it by uninstalling the extension or clearing your browser's extension data."
        }
    ];

    return (
        <div className="min-h-screen bg-background flex flex-col relative overflow-hidden">
            <Navbar />
            <div className="hero-glow" />
            
            <main className="flex-1 container mx-auto px-4 py-24 max-w-6xl relative z-10">
                {/* Header Section */}
                <div className="mb-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8"
                    >
                        <Shield className="h-3.5 w-3.5" />
                        INSTAINSIGHTS COMPLIANCE
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-heading font-black mb-8 tracking-tighter uppercase"
                    >
                        Privacy <span className="text-primary italic">Policy</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-medium"
                    >
                        Your Instagram analytics are your business. instaInsights is designed with a zero-server architecture to ensure your data stays private.
                    </motion.p>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-8 text-xs font-bold text-muted-foreground/60 uppercase tracking-widest"
                    >
                        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
                    {/* Sidebar Nav */}
                    <aside className="hidden lg:block sticky top-32">
                        <nav className="space-y-1">
                            {sections.map((section) => (
                                <a 
                                    key={section.id} 
                                    href={`#${section.id}`}
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-muted-foreground hover:text-primary transition-all group font-bold text-sm"
                                >
                                    <section.icon className="h-4 w-4 opacity-50 group-hover:opacity-100" />
                                    {section.title}
                                </a>
                            ))}
                        </nav>
                        
                        <div className="mt-12 p-6 rounded-3xl glass-card">
                            <h4 className="text-sm font-black uppercase tracking-widest mb-4">Analytics Privacy</h4>
                            <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                                We prioritize local data processing to give you full control over your intelligence.
                            </p>
                            <a href="mailto:crawlpilot6365@gmail.com" className="inline-flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest">
                                <Mail className="h-3 w-3" />
                                Contact Security
                            </a>
                        </div>
                    </aside>

                    {/* Content Section */}
                    <div className="space-y-16">
                        {sections.map((section, idx) => (
                            <motion.section 
                                key={idx}
                                id={section.id}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={`p-8 md:p-12 rounded-[2.5rem] glass-card ${section.isSpecial ? 'border-primary/20 bg-primary/5' : ''}`}
                            >
                                <div className="flex items-start gap-6">
                                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                                        <section.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-2xl md:text-3xl font-heading font-black mb-6 uppercase tracking-tight">
                                            {section.title}
                                        </h2>
                                        <div className="prose prose-invert prose-p:text-muted-foreground prose-p:leading-relaxed max-w-none">
                                            <p className="text-lg font-medium text-muted-foreground/90">
                                                {section.content}
                                            </p>
                                            
                                            {section.items && !section.isSpecial && (
                                                <ul className="mt-8 space-y-4 list-none p-0">
                                                    {(section.items as string[]).map((item, i) => (
                                                        <li key={i} className="flex items-start gap-4 text-muted-foreground">
                                                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            {section.isSpecial && section.items && (
                                                <div className="grid gap-4 mt-8">
                                                    {(section.items as any[]).map((item, i) => (
                                                        <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all">
                                                            <div className="font-black text-[10px] uppercase tracking-widest text-primary mb-2">{item.label}</div>
                                                            <div className="text-sm text-muted-foreground">{item.desc}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {section.isGrid && section.permissions && (
                                                <div className="grid md:grid-cols-2 gap-4 mt-8">
                                                    {section.permissions.map((perm, i) => (
                                                        <div key={i} className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5">
                                                            <div className="font-mono text-xs font-bold text-primary mb-2">{perm.name}</div>
                                                            <div className="text-xs text-muted-foreground leading-relaxed">{perm.desc}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.section>
                        ))}

                        {/* Contact Section */}
                        <motion.section 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-12 rounded-[2.5rem] bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 text-center"
                        >
                            <Mail className="h-12 w-12 text-primary mx-auto mb-6" />
                            <h2 className="text-3xl font-heading font-black mb-4 uppercase">Have Questions?</h2>
                            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                                Our security team is ready to address any concerns you have about instaInsights privacy.
                            </p>
                            <a 
                                href="mailto:crawlpilot6365@gmail.com"
                                className="inline-flex h-14 items-center justify-center px-8 rounded-2xl bg-primary text-white font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl shadow-primary/20"
                            >
                                Contact Support
                            </a>
                        </motion.section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
