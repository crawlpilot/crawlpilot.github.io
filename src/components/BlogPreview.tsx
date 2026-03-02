import Link from "next/link";
import { getAllPosts } from "@/lib/blog-utils";

export function BlogPreview() {
    const posts = getAllPosts().slice(0, 3); // Get latest 3 posts

    if (posts.length === 0) return null;

    return (
        <section id="blog-preview" className="py-24 border-t border-border/40">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
                        From the Blog
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl">
                        Stay updated with the latest in AI-powered web scraping, data extraction strategies, and product updates.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.slug} className="group relative flex flex-col bg-zinc-900/40 border border-border/40 rounded-2xl p-6 hover:bg-zinc-800/40 transition-all duration-300">
                            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
                                <span>•</span>
                                <span>{post.readingTime}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors">
                                <Link href={`/blog/${post.slug}`}>
                                    <span className="absolute inset-0" />
                                    {post.title}
                                </Link>
                            </h3>
                            <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                                {post.description}
                            </p>
                            <div className="mt-auto flex items-center text-primary font-medium text-sm">
                                Read Article
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

                <div className="mt-12 text-center">
                    <Link href="/blog">
                        <button className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground">
                            View all posts
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
