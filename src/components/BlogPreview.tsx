import Link from "next/link";
import { getAllPosts } from "@/lib/blog-utils";
import { Button } from "@/components/ui/button";

// Map posts to generated images
const POST_IMAGES: Record<string, string> = {
    "future-of-web-scraping": "/blog_scraping_future_1773568808294.png",
    "getting-started-with-crawlpilot": "/blog_getting_started_1773568823970.png",
    "how-to-scrape-amazon-bestsellers": "/blog_amazon_scraping_1773568840954.png"
};

export function BlogPreview() {
    const posts = getAllPosts().slice(0, 3);

    if (posts.length === 0) return null;

    return (
        <section id="blog-preview" className="py-24 border-t border-white/5 relative bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-16 px-4">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tighter mb-6 uppercase">
                        Internal <span className="text-primary">Insights</span>
                    </h2>
                    <p className="max-w-[800px] text-muted-foreground md:text-xl font-medium leading-relaxed">
                        Stay updated with the latest in AI-powered web scraping, data extraction strategies, and technical guides.
                    </p>
                </div>

                <div className="grid gap-10 md:grid-cols-3">
                    {posts.map((post, i) => (
                        <article
                            key={post.slug}
                            className="group flex flex-col glass-panel rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 relative"
                        >
                            <div className="aspect-[16/10] overflow-hidden relative">
                                <img
                                    src={POST_IMAGES[post.slug] || "/placeholder-blog.png"}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-[10px] font-black uppercase tracking-widest text-primary">
                                    Technical Guide
                                </div>
                            </div>

                            <div className="flex flex-col flex-1 p-8 space-y-4">
                                <div className="flex items-center gap-3 text-xs font-bold text-muted-foreground/60 uppercase tracking-widest">
                                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</time>
                                    <span className="h-1 w-1 rounded-full bg-primary/40" />
                                    <span>{post.readingTime}</span>
                                </div>

                                <h3 className="text-2xl font-heading font-bold mb-2 tracking-tight leading-tight group-hover:text-primary transition-colors">
                                    <Link href={`/blog/${post.slug}`}>
                                        <span className="absolute inset-0 z-10" />
                                        {post.title}
                                    </Link>
                                </h3>

                                <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed font-medium">
                                    {post.description}
                                </p>

                                <div className="pt-4 mt-auto flex items-center gap-2 text-primary font-black text-xs uppercase tracking-wider group-hover:gap-4 transition-all">
                                    Explore Deeply
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-4 w-4"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link href="/blog">
                        <Button variant="outline" className="h-14 px-12 glass-panel border-white/20 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all">
                            Browse All Insights
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
