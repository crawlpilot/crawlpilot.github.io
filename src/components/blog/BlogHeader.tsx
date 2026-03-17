"use client";

import React from "react";
import Link from "next/link";
import { Clock, Calendar, Share2 } from "lucide-react";
import { CategoryPill } from "@/components/blog/CategoryPill";
import { BlogPost } from "@/types/blog";

interface BlogHeaderProps {
    post: BlogPost;
}

export function BlogHeader({ post }: BlogHeaderProps) {
    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: post.title,
                text: post.description,
                url: window.location.href,
            }).catch(() => { });
        } else {
            navigator.clipboard.writeText(window.location.href);
            // alert("Link copied to clipboard!");
        }
    };

    return (
        <header className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 text-center">
            <div className="mb-4">
                <Link href="/blog" className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground hover:text-primary transition-colors flex items-center justify-center gap-2">
                    <span className="h-px w-8 bg-white/10" />
                    Back to Laboratory
                    <span className="h-px w-8 bg-white/10" />
                </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <CategoryPill category={post.category || "Research"} />
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">
                    <Clock className="h-3 w-3" />
                    <span>{post.readingTime}</span>
                </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black tracking-tight uppercase leading-[0.95] text-balance">
                {post.title}
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-6 border-y border-white/5">
                <div className="flex items-center gap-4 text-left">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center overflow-hidden">
                        <img src={post.author?.avatar || "/icon.png"} alt={post.author?.name} className="h-full w-full object-cover" />
                    </div>
                    <div>
                        <p className="text-xs font-black uppercase tracking-tight">{post.author?.name}</p>
                        <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">{post.author?.role}</p>
                    </div>
                </div>
                <div className="h-8 w-px bg-white/5 hidden md:block" />
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <button
                        onClick={handleShare}
                        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary hover:opacity-80 transition-all"
                    >
                        <Share2 className="h-3.5 w-3.5" /> Share
                    </button>
                </div>
            </div>
        </header>
    );
}
