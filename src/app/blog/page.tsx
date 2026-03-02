import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getAllPosts } from "@/lib/blog-utils";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | CrawlPilot",
    description: "Latest updates, tutorials, and insights from the CrawlPilot team. Learn more about AI-powered web scraping and data extraction.",
    alternates: {
        canonical: "/blog",
    },
};

export default async function BlogPage() {
    const posts = getAllPosts();

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-1 pt-24 pb-16">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <header className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            CrawlPilot Blog
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Insights, tutorials, and news about the future of web scraping.
                        </p>
                    </header>

                    <div className="grid gap-12">
                        {posts.map((post) => (
                            <article key={post.slug} className="group relative flex flex-col items-start">
                                <div className="flex items-center gap-3 mb-3 text-sm text-muted-foreground">
                                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                                    <span>•</span>
                                    <span>{post.readingTime}</span>
                                </div>
                                <h2 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors">
                                    <Link href={`/blog/${post.slug}`}>
                                        <span className="absolute -inset-y-2.5 -inset-x-4 z-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 bg-zinc-800/50 rounded-2xl" />
                                        <span className="relative z-10">{post.title}</span>
                                    </Link>
                                </h2>
                                <p className="relative z-10 text-muted-foreground mb-4 line-clamp-3">
                                    {post.description}
                                </p>
                                <div className="relative z-10 flex items-center text-primary font-medium text-sm">
                                    Read more
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </article>
                        ))}
                    </div>

                    {posts.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-muted-foreground">Stay tuned! Our first blog post is coming soon.</p>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
