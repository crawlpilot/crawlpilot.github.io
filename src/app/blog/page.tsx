import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getAllPosts } from "@/lib/blog-utils";
import { Metadata } from "next";
import { BlogList } from "@/components/blog/BlogList";

export const metadata: Metadata = {
    title: "Intelligence Research | CrawlPilot",
    description: "Technical analysis, strategic deep-dives, and insights into the future of autonomous web intelligence.",
    alternates: {
        canonical: "/blog",
    },
};

export default async function BlogPage() {
    const allPosts = getAllPosts();

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-1 pt-32 pb-32">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <header className="mb-20 text-center space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                            Industrial Research Library
                        </div>
                        <h1 className="text-5xl md:text-8xl font-heading font-black tracking-tighter uppercase leading-[0.85]">
                            Pilot <span className="text-primary italic">Intelligence</span>
                        </h1>
                        <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto text-balance">
                            Deep technical analysis, strategic guides, and insights into the future of autonomous web data extraction.
                        </p>
                    </header>

                    <BlogList allPosts={allPosts} />
                </div>
            </main>
            <Footer />
        </div>
    );
}
