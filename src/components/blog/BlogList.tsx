"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import type { BlogPost } from "@/types/blog";
import { Clock, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CategoryPill } from "@/components/blog/CategoryPill";
import { Button } from "@/components/ui/button";

interface BlogListProps {
    allPosts: BlogPost[];
}

export function BlogList({ allPosts }: BlogListProps) {
    const [activeCategory, setActiveCategory] = useState("All");
    const [mounted, setMounted] = useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const categories = useMemo(() => {
        const cats = new Set(allPosts.map(p => p.category || "Research"));
        return ["All", ...Array.from(cats)];
    }, [allPosts]);

    const filteredPosts = useMemo(() => {
        if (activeCategory === "All") return allPosts;
        return allPosts.filter(p => (p.category || "Research") === activeCategory);
    }, [allPosts, activeCategory]);

    const featuredPost = allPosts[0];

    if (!mounted) return (
        <div className="space-y-20 opacity-0 min-h-[50vh]">
            {/* Skeleton or empty space to prevent jump */}
        </div>
    );

    return (
        <div className="space-y-20">
            {/* Featured Post */}
            {activeCategory === "All" && featuredPost && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <Link href={`/blog/${featuredPost.slug}`} className="group relative block">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative glass-card p-10 md:p-16 rounded-[3rem] border-white/10 overflow-hidden flex flex-col lg:flex-row gap-12 items-center">
                            <div className="flex-1 space-y-8">
                                <div className="flex items-center gap-4">
                                    <CategoryPill category={featuredPost.category || "Research"} />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary animate-pulse">Featured Research</span>
                                </div>
                                <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tight uppercase leading-[0.9] group-hover:text-primary transition-colors">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-xl text-muted-foreground font-medium leading-relaxed line-clamp-3 italic border-l-4 border-primary/20 pl-8">
                                    {featuredPost.description}
                                </p>
                                <div className="flex items-center gap-6 pt-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center overflow-hidden">
                                            <img src={featuredPost.author?.avatar || "/icon.png"} alt={featuredPost.author?.name} className="h-full w-full object-cover" />
                                        </div>
                                        <p className="text-[10px] font-black uppercase tracking-widest">{featuredPost.author?.name}</p>
                                    </div>
                                    <div className="h-4 w-px bg-white/10" />
                                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">
                                        <Clock className="h-3.5 w-3.5" />
                                        <span>{featuredPost.readingTime}</span>
                                    </div>
                                </div>
                                <div className="pt-4">
                                    <Button className="rounded-2xl px-8 bg-primary font-black uppercase tracking-widest text-[10px] group-hover:translate-x-2 transition-transform">
                                        Read Full Analysis <ArrowRight className="ml-2 h-3.5 w-3.5" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </motion.div>
            )}

            {/* Filters */}
            <div className="flex flex-wrap items-center justify-between gap-8">
                <div className="flex items-center gap-3 bg-white/5 p-1.5 rounded-2xl border border-white/10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeCategory === cat
                                ? "bg-primary text-white shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                                : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/40">
                    Showing {filteredPosts.length} Results
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                    {filteredPosts.filter(p => activeCategory !== "All" || p.slug !== featuredPost.slug).map((post, index) => (
                        <motion.article
                            key={post.slug}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ delay: index * 0.05 }}
                            className="group h-full"
                        >
                            <Link href={`/blog/${post.slug}`} className="flex flex-col h-full glass-card p-8 rounded-[2.5rem] border-white/5 hover:border-primary/40 hover:translate-y-[-8px] transition-all duration-500">
                                <div className="mb-6 flex items-center justify-between">
                                    <CategoryPill category={post.category || "Research"} />
                                    <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">
                                        <Clock className="h-3 w-3" />
                                        <span>{post.readingTime}</span>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-heading font-black mb-4 uppercase tracking-tight leading-none group-hover:text-primary transition-colors flex-1">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-muted-foreground font-medium leading-relaxed mb-8 line-clamp-3">
                                    {post.description}
                                </p>
                                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="h-8 w-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center overflow-hidden">
                                            <img src={post.author?.avatar || "/icon.png"} alt={post.author?.name} className="h-full w-full object-cover" />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest opacity-60">{post.author?.name}</span>
                                    </div>
                                    <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </AnimatePresence>
            </div>

            {filteredPosts.length === 0 && (
                <div className="text-center py-32 rounded-[3rem] bg-white/[0.02] border border-dashed border-white/10">
                    <p className="text-muted-foreground font-medium italic">No intelligence matching this criteria.</p>
                    <Button variant="link" onClick={() => setActiveCategory("All")} className="mt-4 text-primary uppercase font-black tracking-widest text-[10px]">
                        Reset Filters
                    </Button>
                </div>
            )}
        </div>
    );
}
