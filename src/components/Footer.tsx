"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Youtube, Globe } from "lucide-react";

const footerLinks = [
    {
        title: "Intelligence",
        links: [
            { name: "Features", href: "/#features" },
            { name: "How it works", href: "/#how-it-works" },
            { name: "Pricing", href: "/#pricing" },
            { name: "Manifesto", href: "/blog/manifesto" },
        ]
    },
    {
        title: "Solutions",
        links: [
            { name: "E-commerce", href: "/solutions/ecommerce" },
            { name: "Lead Generation", href: "/solutions/lead-gen" },
            { name: "Real Estate", href: "/solutions/real-estate" },
        ]
    },
    {
        title: "Resources",
        links: [
            { name: "Knowledge Library", href: "/resources" },
            { name: "Pilot Research", href: "/blog" },
            { name: "Documentation", href: "https://github.com/crawlpilot" },
            { name: "Community Support", href: "/crawlpilot/support" },
        ]
    },
    {
        title: "Protocol",
        links: [
            { name: "Terms of Service", href: "/crawlpilot/terms" },
            { name: "Privacy Policy", href: "/crawlpilot/privacy" },
            { name: "Compliance", href: "/blog/privacy-and-ethics" },
            { name: "Security", href: "#" },
        ]
    },
    {
        title: "Nodes",
        links: [
            { name: "Main Engine", href: "/" },
            { name: "Intelligence Lab", href: "/blog" },
            { name: "Resource Archive", href: "/resources" },
            { name: "Extension Hub", href: "https://chromewebstore.google.com/detail/crawl-pilot/olkkbkkeikjphjoibfafnaiphdclffkd?authuser=1&hl=en-GB" },
        ]
    }
];

export function Footer() {
    return (
        <footer className="border-t border-white/5 pt-24 pb-12 relative overflow-hidden bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
                    <div className="space-y-8 col-span-1 sm:col-span-2 lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 font-bold text-xl tracking-tight group">
                            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-indigo-600 p-2 shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
                                <img src="/icon.png" alt="Crawl Pilot" className="h-full w-full object-contain brightness-0 invert" />
                            </div>
                            <span className="font-heading font-black uppercase tracking-tight">Crawl Pilot</span>
                        </Link>
                        <p className="text-zinc-400 text-sm font-medium leading-relaxed max-w-sm uppercase text-[10px] tracking-widest opacity-60">
                            The autonomous data extraction engine for elite intelligence operations. Zero code. Infinite scale.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Github, Linkedin, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-zinc-400 hover:text-primary hover:bg-primary/10 transition-all border border-white/5">
                                    <Icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {footerLinks.map((group) => (
                        <div key={group.title} className="space-y-6">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">{group.title}</h4>
                            <ul className="space-y-4">
                                {group.links.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-zinc-400 hover:text-primary transition-colors text-xs font-semibold uppercase tracking-widest">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                        &copy; {new Date().getFullYear()} Crawl Pilot Intelligence Group. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-500">
                            <Globe className="h-3 w-3" /> System Status: <span className="text-primary italic">Optimal</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-primary/5 blur-[120px] rounded-full -z-10" />
        </footer>
    );
}
