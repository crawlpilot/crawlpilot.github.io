import { notFound } from "next/navigation";
import { getPostBySlug, getPostSlugs } from "@/lib/blog-utils";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Share2 } from "lucide-react";

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
            title: `${post.title} | CrawlPilot`,
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
            <Navbar />
            <main className="flex-1 pt-32 pb-24">
                <article className="container mx-auto px-4 md:px-6 max-w-3xl">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-12 group">
                        <ArrowLeft className="h-3 w-3 group-hover:-translate-x-1 transition-transform" /> Back to Research Library
                    </Link>

                    <header className="mb-16">
                        <div className="flex items-center gap-4 mb-8 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">
                            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                            <span className="h-1 w-1 rounded-full bg-primary/40" />
                            <div className="flex items-center gap-1.5">
                                <Clock className="h-3 w-3" />
                                <span>{post.readingTime}</span>
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight mb-10 uppercase leading-[0.95]">
                            {post.title}
                        </h1>
                        <p className="text-xl text-muted-foreground font-medium leading-relaxed italic border-l-4 border-primary/20 pl-6">
                            {post.description}
                        </p>
                    </header>

                    <div className="prose prose-invert prose-zinc max-w-none 
                        prose-headings:font-heading prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-foreground
                        prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:font-medium text-lg
                        prose-strong:text-foreground prose-strong:font-black
                        prose-code:text-primary prose-code:bg-primary/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
                        prose-pre:bg-zinc-900/50 prose-pre:border prose-pre:border-white/5 prose-pre:rounded-2xl">
                        <MarkdownRenderer content={post.content} />
                    </div>

                    <div className="mt-20 pt-10 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-black text-xs uppercase">
                                CP
                            </div>
                            <div>
                                <p className="text-sm font-black uppercase tracking-tight">CrawlPilot Intelligence</p>
                                <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest opacity-60">Internal Research Unit</p>
                            </div>
                        </div>

                        <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                            <Share2 className="h-3 w-3" /> Share Intelligence
                        </button>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
