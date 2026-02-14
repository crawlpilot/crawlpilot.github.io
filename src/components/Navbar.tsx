"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Menu } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-5 w-5"
                            >
                                <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                                <path d="M8.5 8.5v.01" />
                                <path d="M16 12v.01" />
                                <path d="M12 16v.01" />
                            </svg>
                        </div>
                        <span>Crawl Pilot</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-6">
                        <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Features
                        </Link>
                        <Link href="/docs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Docs
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <Link href="https://github.com/rahulbisht/crawlpilot" target="_blank">
                            <Button variant="ghost" size="icon">
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Button>
                        </Link>
                        <Button>Get Started</Button>
                    </div>

                    <div className="md:hidden">
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
                                href="#pricing"
                                className="block text-sm font-medium text-muted-foreground hover:text-foreground"
                                onClick={() => setIsOpen(false)}
                            >
                                Pricing
                            </Link>
                            <Link
                                href="/docs"
                                className="block text-sm font-medium text-muted-foreground hover:text-foreground"
                                onClick={() => setIsOpen(false)}
                            >
                                Docs
                            </Link>
                            <div className="pt-4 flex items-center gap-4">
                                <Button className="w-full">Get Started</Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav >
    );
}
