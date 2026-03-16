import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getAllPosts } from "@/lib/blog-utils";
import { Metadata } from "next";
import { Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Research Library | CrawlPilot",
    description: "Technical analysis, guides, and industrial insights into the future of web intelligence.",
    alternates: {
        canonical: "/blog",
    },
};

export default async function BlogPage() {
    const posts = getAllPosts();

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-1 pt-32 pb-24">
                <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                    <header className="mb-20 text-balance text-center">
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                            The Documentation Hub
                        </div>
                        <h1 className="text-5xl md:text-7xl font-heading font-black tracking-tighter mb-8 uppercase leading-[0.9]">
                            Pilot <span className="text-primary italic">Research</span>
                        </h1>
                        <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
                            Technical analysis and strategic deep-dives into autonomous web intelligence.
                        </p>
                    </header>

                    <div className="grid gap-6">
                        {posts.map((post) => (
                            <article key={post.slug} className="group relative glass-card p-10 rounded-[2.5rem] border-white/5 hover:border-primary/40 transition-all flex flex-col md:flex-row gap-8 items-start">
                                <div className="flex-1">
                                    <div className="flex items-center gap-4 mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">
                                        <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                                        <span className="h-1 w-1 rounded-full bg-primary/40" />
                                        <div className="flex items-center gap-1.5">
                                            <Clock className="h-3 w-3" />
                                            <span>{post.readingTime}</span>
                                        </div>
                                    </div>
                                    <h2 className="text-3xl font-heading font-black mb-4 tracking-tight uppercase leading-none group-hover:text-primary transition-colors">
                                        <Link href={`/blog/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </h2>
                                    <p className="text-muted-foreground font-medium leading-relaxed mb-6 line-clamp-2">
                                        {post.description}
                                    </p>
                                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary group-hover:gap-4 transition-all">
                                        Open Full Research <ArrowRight className="h-3 w-3" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    {posts.length === 0 && (
                        <div className="text-center py-32 rounded-[2.5rem] bg-white/[0.02] border border-dashed border-white/10">
                            <p className="text-muted-foreground font-medium italic">Our internal library is synchronized soon.</p>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
