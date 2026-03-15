"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
    LayoutDashboard,
    History,
    Settings,
    Shield,
    Zap,
    Database,
    ChevronRight,
    X
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidePanelProps {
    isOpen: boolean;
    onClose: () => void;
}

export function SidePanel({ isOpen, onClose }: SidePanelProps) {
    const pathname = usePathname();

    const navItems = [
        { name: "Overview", icon: LayoutDashboard, href: "/dashboard" },
        { name: "Extraction History", icon: History, href: "/history" },
        { name: "Scraping Jobs", icon: Database, href: "/jobs" },
        { name: "API Reference", icon: Zap, href: "/api-docs" },
        { name: "Security", icon: Shield, href: "/security" },
        { name: "Settings", icon: Settings, href: "/settings" },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-background/40 backdrop-blur-sm z-[70] md:hidden"
                    />

                    {/* Panel */}
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 left-0 bottom-0 w-72 bg-card/80 backdrop-blur-2xl border-r border-border/50 z-[80] shadow-2xl flex flex-col"
                    >
                        <div className="p-6 flex items-center justify-between border-b border-border/50">
                            <div className="flex items-center gap-2 font-bold text-lg tracking-tight">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-primary">
                                    <LayoutDashboard className="h-5 w-5" />
                                </div>
                                <span>Dashboard</span>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-lg hover:bg-white/5 md:hidden"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => onClose()}
                                        className={`flex items-center justify-between p-3 rounded-xl transition-all group ${isActive
                                                ? "bg-primary text-white shadow-lg shadow-primary/20"
                                                : "hover:bg-white/5 text-muted-foreground hover:text-foreground"
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <item.icon className={`h-5 w-5 ${isActive ? "text-white" : "group-hover:text-primary transition-colors"}`} />
                                            <span className="font-medium">{item.name}</span>
                                        </div>
                                        <ChevronRight className={`h-4 w-4 transition-transform ${isActive ? "translate-x-0" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-1"}`} />
                                    </Link>
                                );
                            })}
                        </nav>

                        <div className="p-4 border-t border-border/50">
                            <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-purple-600/10 border border-primary/20">
                                <h4 className="text-sm font-semibold flex items-center gap-2">
                                    <Zap className="h-4 w-4 text-primary" />
                                    Account Status
                                </h4>
                                <p className="text-xs text-muted-foreground mt-1">Upgrade to Pro for advanced features and higher limits.</p>
                                <button className="w-full mt-3 py-2 text-xs font-bold rounded-lg bg-primary text-white hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                                    Upgrade Now
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
