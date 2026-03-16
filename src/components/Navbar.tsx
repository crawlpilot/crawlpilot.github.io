"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Menu, LayoutDashboard, ChevronDown, Sparkles, Terminal, Rocket, BookOpen } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";
import { UserAvatar } from "@/components/UserAvatar";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { user, loading, isSidePanelOpen, setSidePanelOpen } = useAuth();

    const navLinks = [
        {
            name: "Product",
            dropdown: [
                { name: "Features", href: "#features", icon: <Sparkles className="h-4 w-4" /> },
                { name: "How it works", href: "#how-it-works", icon: <Rocket className="h-4 w-4" /> },
                { name: "Changelog", href: "/changelog", icon: <Terminal className="h-4 w-4" /> },
            ]
        },
        {
            name: "Solutions",
            dropdown: [
                { name: "E-commerce", href: "/solutions/ecommerce" },
                { name: "Lead Generation", href: "/solutions/lead-gen" },
                { name: "Real Estate", href: "/solutions/real-estate" },
            ]
        },
        {
            name: "Resources",
            dropdown: [
                { name: "Guides", href: "/resources", icon: <BookOpen className="h-4 w-4" /> },
                { name: "Blog", href: "/blog" },
                { name: "Docs", href: "https://github.com/crawlpilot" },
            ]
        },
        { name: "Pricing", href: "#pricing" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] bg-background/60 backdrop-blur-2xl border-b border-white/5 transition-colors duration-500">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex items-center gap-4">
                        {user && (
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setSidePanelOpen(!isSidePanelOpen)}
                                className="hidden md:flex text-primary hover:bg-primary/10"
                            >
                                <Menu className="h-5 w-5" />
                            </Button>
                        )}
                        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight group">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-indigo-600 p-2 shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
                                <img src="/icon.png" alt="Crawl Pilot" className="h-full w-full object-contain brightness-0 invert" />
                            </div>
                            <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent font-heading">Crawl Pilot</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                {link.dropdown ? (
                                    <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
                                        {link.name}
                                        <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
                                    </button>
                                ) : (
                                    <Link href={link.href!} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
                                        {link.name}
                                    </Link>
                                )}

                                {link.dropdown && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                        <div className="w-56 glass-panel rounded-2xl p-2 shadow-2xl border border-white/10">
                                            {link.dropdown.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                                >
                                                    {item.icon && <span className="text-primary">{item.icon}</span>}
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        {!loading && (
                            <>
                                {user ? (
                                    <UserAvatar />
                                ) : (
                                    <>
                                        <Link href="/login">
                                            <Button variant="ghost" className="hover:bg-white/5 text-sm font-medium">Login</Button>
                                        </Link>
                                        <Link href="/signup">
                                            <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95 px-6 rounded-full font-medium">
                                                Fast Track
                                            </Button>
                                        </Link>
                                    </>
                                )}
                            </>
                        )}
                    </div>

                    <div className="md:hidden flex items-center gap-4">
                        {user && <UserAvatar />}
                        <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="hover:bg-white/5">
                            <Menu className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-white/5 bg-background/95 backdrop-blur-xl"
                    >
                        <div className="container mx-auto px-4 py-6 space-y-6">
                            {navLinks.map((link) => (
                                <div key={link.name} className="space-y-4">
                                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground/50 px-2">{link.name}</div>
                                    <div className="grid gap-2">
                                        {link.dropdown ? (
                                            link.dropdown.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 text-sm font-medium"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))
                                        ) : (
                                            <Link
                                                href={link.href!}
                                                className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 text-sm font-medium"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            ))}
                            {!loading && !user && (
                                <div className="pt-6 flex flex-col gap-3">
                                    <Link href="/login" onClick={() => setIsOpen(false)}>
                                        <Button variant="outline" className="w-full rounded-xl">Login</Button>
                                    </Link>
                                    <Link href="/signup" onClick={() => setIsOpen(false)}>
                                        <Button className="w-full shadow-lg shadow-primary/20 rounded-xl">Sign Up</Button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav >
    );
}
