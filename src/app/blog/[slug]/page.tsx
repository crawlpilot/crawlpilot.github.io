import { notFound } from "next/navigation";
import { getPostBySlug, getPostSlugs } from "@/lib/blog-utils";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { Metadata } from "next";

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
            title: post.title,
            description: post.description,
            alternates: {
                canonical: `/blog/${slug}`,
            },
            openGraph: {
                title: post.title,
                description: post.description,
                type: "article",
                publishedTime: post.date,
                url: `https://crawlpilot.github.io/blog/${slug}`,
            },
            twitter: {
                card: "summary_large_image",
                title: post.title,
                description: post.description,
            },
        };
    } catch (e) {
        return {
            title: "Post Not Found | CrawlPilot",
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
            <main className="flex-1 pt-24 pb-16">
                <article className="container mx-auto px-4 md:px-6 max-w-3xl">
                    <header className="mb-8">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                            <span>•</span>
                            <span>{post.readingTime}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                            {post.title}
                        </h1>
                        <p className="text-xl text-muted-foreground italic border-l-4 border-primary pl-4 py-2 mb-8">
                            {post.description}
                        </p>
                    </header>

                    <div className="prose prose-invert prose-blue max-w-none">
                        <MarkdownRenderer content={post.content} />
                    </div>

                    <hr className="my-12 border-border" />

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                                CP
                            </div>
                            <div>
                                <p className="font-medium">CrawlPilot Team</p>
                                <p className="text-sm text-muted-foreground">The privacy-first infrastructure for AI scraping.</p>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
