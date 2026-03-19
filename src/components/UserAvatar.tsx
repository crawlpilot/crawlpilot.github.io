"use client";

import { useState, useRef, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { LogOut, LayoutDashboard, User, Settings, ChevronDown } from "lucide-react";
import Link from "next/link";

export function UserAvatar() {
    const { user, logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    if (!user) return null;

    const initial = user.email ? user.email[0].toUpperCase() : "U";

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 p-1 rounded-full hover:bg-white/5 transition-colors group"
            >
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold text-sm border border-white/10 shadow-lg group-hover:scale-105 transition-transform">
                    {user.photoURL ? (
                        <img src={user.photoURL} alt="Avatar" className="h-full w-full rounded-full object-cover" />
                    ) : (
                        initial
                    )}
                </div>
                <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute right-0 mt-2 w-56 rounded-xl border border-border bg-card/80 backdrop-blur-xl shadow-2xl z-[60] overflow-hidden"
                    >
                        <div className="p-3 border-b border-border/50">
                            <p className="text-sm font-medium truncate">{user.displayName || user.email}</p>
                            <p className="text-xs text-muted-foreground capitalize">Free Plan</p>
                        </div>

                        <div className="p-2 space-y-1">
                            {/* <Link
                                href="/dashboard"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-white/5 transition-colors"
                            >
                                <LayoutDashboard className="h-4 w-4 text-primary" />
                                Dashboard
                            </Link> */}
                            <Link
                                href="/profile"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-white/5 transition-colors group"
                            >
                                <User className="h-4 w-4 text-primary transition-transform group-hover:scale-110" />
                                <span className="font-medium">My Profile</span>
                            </Link>
                        </div>

                        <div className="p-2 border-t border-border/50">
                            <button
                                onClick={() => {
                                    logout();
                                    setIsOpen(false);
                                }}
                                className="w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-red-400 hover:bg-red-400/10 transition-colors"
                            >
                                <LogOut className="h-4 w-4" />
                                Sign Out
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
