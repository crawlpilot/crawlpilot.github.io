import { notFound } from "next/navigation";
import { getPostBySlug, getPostSlugs } from "@/lib/blog-utils";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { Button } from "@/components/ui/button";

import { ReadingProgressBar } from "@/components/blog/ReadingProgressBar";
import { TableOfContents } from "@/components/blog/TableOfContents";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = getPostSlugs();
    return slugs.map((slug) => ({
        slug: slug.replace(/\.md$/, ""),
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    try {
        const post = getPostBySlug(slug);
        return {
            title: `${post.title} | CrawlPilot Intelligence`,
            description: post.description,
            alternates: {
                canonical: `/blog/${slug}`,
            },
        };
    } catch (e) {
        return {
            title: "Research Not Found",
        };
    }
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;

    let post;
    try {
        post = getPostBySlug(slug);
    } catch (e) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <ReadingProgressBar />
            <Navbar />

            <main className="flex-1 pt-32 pb-32">
                <article className="container mx-auto px-4 md:px-6">
                    {/* Hero Header */}
                    <div className="max-w-4xl mx-auto mb-16 text-center">
                        <BlogHeader post={post} />
                    </div>

                    {post.image && (
                        <div className="max-w-5xl mx-auto mb-20 relative group">
                            <div className="relative aspect-[21/9] rounded-[3rem] overflow-hidden glass-panel p-2 shadow-2xl border-white/10">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover rounded-[2.5rem] opacity-90 group-hover:opacity-100 transition-opacity"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
                            </div>
                            {/* Decorative glow */}
                            <div className="absolute -inset-4 bg-primary/20 blur-[60px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </div>
                    )}

                    {/* Layout with Sidebar */}
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
                        <div className="flex-1 max-w-3xl mx-auto">
                            <div className="prose-container mb-24">
                                <MarkdownRenderer content={post.content} />
                            </div>

                            {/* End of Article CTA */}
                            <div className="glass-card p-12 rounded-[3rem] border-primary/10 relative overflow-hidden text-center">
                                <div className="relative z-10">
                                    <h3 className="text-3xl font-heading font-black uppercase mb-6">Scale Your Intelligence</h3>
                                    <p className="text-muted-foreground font-medium mb-10 max-w-lg mx-auto">
                                        Join 5,000+ developers automating their data pipelines with Crawl Pilot. Zero code, infinite scale.
                                    </p>
                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                        <Link href="https://chromewebstore.google.com/detail/crawl-pilot/olkkbkkeikjphjoibfafnaiphdclffkd?authuser=1&hl=en-GB" target="_blank">
                                            <Button size="lg" className="rounded-2xl px-10 h-16 bg-primary font-black uppercase tracking-widest text-xs">
                                                Install Extension
                                            </Button>
                                        </Link>
                                        <Link href="/blog" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary">
                                            Browse More Research
                                        </Link>
                                    </div>
                                </div>
                                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 blur-[80px] rounded-full" />
                            </div>
                        </div>

                        {/* Sticky Table of Contents (Right) */}
                        <div className="lg:w-64 flex-shrink-0">
                            <TableOfContents />
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
