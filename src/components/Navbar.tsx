"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Menu, LayoutDashboard } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";
import { UserAvatar } from "@/components/UserAvatar";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { user, loading, isSidePanelOpen, setSidePanelOpen } = useAuth();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex h-16 items-center justify-between">
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
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 p-1.5 transition-transform group-hover:scale-110">
                                <img src="/icon.png" alt="Crawl Pilot" className="h-full w-full object-contain" />
                            </div>
                            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Crawl Pilot</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center gap-6">
                        <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Features
                        </Link>
                        <Link href="/blog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Blog
                        </Link>
                        {/* {user && (
                            <Link href="/dashboard" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
                                <LayoutDashboard className="h-4 w-4" />
                                Dashboard
                            </Link>
                        )} */}
                        <Link href="/crawlpilot/docs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Docs
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center gap-3">
                        {!loading && (
                            <>
                                {user ? (
                                    <UserAvatar />
                                ) : (
                                    <>
                                        <Link href="/login">
                                            <Button variant="ghost" className="hover:bg-white/5">Login</Button>
                                        </Link>
                                        <Link href="/signup">
                                            <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95">
                                                Sign Up
                                            </Button>
                                        </Link>
                                    </>
                                )}
                            </>
                        )}
                    </div>

                    <div className="md:hidden flex items-center gap-4">
                        {user && <UserAvatar />}
                        <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
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
                        className="md:hidden border-b border-border/40 bg-background"
                    >
                        <div className="container mx-auto px-4 py-4 space-y-4">
                            <Link
                                href="#features"
                                className="block text-sm font-medium text-muted-foreground hover:text-foreground"
                                onClick={() => setIsOpen(false)}
                            >
                                Features
                            </Link>
                            <Link
                                href="/blog"
                                className="block text-sm font-medium text-muted-foreground hover:text-foreground"
                                onClick={() => setIsOpen(false)}
                            >
                                Blog
                            </Link>
                            {/* {user && (
                                <Link
                                    href="/dashboard"
                                    className="block text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Dashboard
                                </Link>
                            )} */}
                            <Link
                                href="/crawlpilot/docs"
                                className="block text-sm font-medium text-muted-foreground hover:text-foreground"
                                onClick={() => setIsOpen(false)}
                            >
                                Docs
                            </Link>
                            {!loading && !user && (
                                <div className="pt-4 flex flex-col gap-3">
                                    <Link href="/login" onClick={() => setIsOpen(false)}>
                                        <Button variant="outline" className="w-full">Login</Button>
                                    </Link>
                                    <Link href="/signup" onClick={() => setIsOpen(false)}>
                                        <Button className="w-full shadow-lg shadow-primary/20">Sign Up</Button>
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
