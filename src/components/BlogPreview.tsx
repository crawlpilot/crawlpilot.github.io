"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import type { BlogPost } from "@/types/blog";

// Map posts to generated images
const POST_IMAGES: Record<string, string> = {
    "future-of-web-scraping": "/blog_scraping_future_1773568808294.png",
    "getting-started-with-crawlpilot": "/blog_getting_started_1773568823970.png",
    "how-to-scrape-amazon-bestsellers": "/blog_amazon_scraping_1773568840954.png",
    "how-to-scrape-data-from-mobile-apps": "/blog_mobile_scraping_1773569506030.png",
    "introduction-to-crawl-pilot-extension": "/blog_intro_extension_1773569666545.png",
    "privacy-and-ethics": "/blog_privacy_ethics_1773569682455.png",
    "scraping-amazon-with-puppeteer": "/blog_amazon_puppeteer.png",
    "cloudflare-web-scraping-era": "/blog/cloudflare-web-scraping-era.png",
    "mcp-puppeteer-guide": "/blog/mcp-puppeteer-guide.png",
    'anti-bot-detection-war': '/blog/anti-bot-detection-war.png',
    'how-amazon-detects-scrapers': '/blog/amazon-anti-bot-detection.png',
    'web-scraping-proxy-industry': '/blog/scraping-proxy-industry.png',
    'ai-agents-replace-scrapers': '/blog/ai-agents-vs-scrapers.png'
};

interface BlogPreviewProps {
    posts: BlogPost[];
}

export function BlogPreview({ posts }: BlogPreviewProps) {
    if (!posts || posts.length === 0) return null;

    return (
        <section id="blog-preview" className="py-24 relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-20 text-balance">
                    <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter mb-6 uppercase">
                        Technical <span className="text-primary italic">Insights</span>
                    </h2>
                    <p className="max-w-2xl text-muted-foreground text-lg font-medium leading-relaxed">
                        Master the art of data extraction with guides from the Pilot team.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {posts.map((post, i) => (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group flex flex-col glass-card rounded-[2.5rem] overflow-hidden hover:border-primary/40 transition-all"
                        >
                            <div className="aspect-[16/10] overflow-hidden relative">
                                <img
                                    src={post.image || POST_IMAGES[post.slug] || "/placeholder-blog.png"}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-4 flex gap-2">
                                    <div className="px-2 py-1 rounded-md bg-primary/20 backdrop-blur-md border border-primary/30 text-[8px] font-black uppercase tracking-widest text-primary">
                                        Intelligence
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col flex-1 p-8">
                                <div className="flex items-center gap-2 mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">
                                    <Clock className="h-3 w-3" />
                                    <span>{post.readingTime}</span>
                                </div>

                                <h3 className="text-xl font-heading font-black mb-4 uppercase tracking-tight leading-tight group-hover:text-primary transition-colors">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h3>

                                <p className="text-sm text-muted-foreground line-clamp-3 mb-8 font-medium">
                                    {post.description}
                                </p>

                                <div className="mt-auto">
                                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary hover:gap-4 transition-all">
                                        Read Analysis <ArrowRight className="h-3 w-3" />
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="https://chromewebstore.google.com/detail/crawl-pilot/olkkbkkeikjphjoibfafnaiphdclffkd?authuser=1&hl=en-GB" target="_blank">
                            <Button size="lg" className="h-16 px-10 rounded-2xl bg-white text-primary hover:bg-zinc-100 font-black uppercase tracking-widest text-xs">
                                Install Extension
                            </Button>
                        </Link>
                        <Link href="/blog">
                            <Button variant="outline" size="lg" className="h-16 px-10 rounded-2xl border-white/20 hover:bg-white/10 text-white font-black uppercase tracking-widest text-xs">
                                Browse The Library
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
