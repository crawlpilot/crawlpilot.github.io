import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github } from "lucide-react";
import Link from "next/link";

async function getDocContent() {
    try {
        const res = await fetch('https://raw.githubusercontent.com/rahulbisht/crawlPilot/main/README.md', {
            next: { revalidate: 3600 } // Cache for 1 hour
        });

        if (!res.ok) {
            throw new Error('Failed to fetch documentation');
        }

        return res.text();
    } catch (error) {
        console.error("Error fetching docs:", error);
        return "# Documentation Unavailable\n\nCould not load documentation from GitHub. Please try again later.";
    }
}

export default async function DocsPage() {
    const content = await getDocContent();

    return (
        <div className="min-h-screen bg-background">
            <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/">
                            <Button variant="ghost" size="sm" className="gap-2">
                                <ArrowLeft className="w-4 h-4" />
                                Back
                            </Button>
                        </Link>
                        <div className="h-6 w-px bg-border hidden sm:block" />
                        <h1 className="font-semibold text-lg hidden sm:block">Documentation</h1>
                    </div>
                    <Link href="https://github.com/crawlPilot" target="_blank">
                        <Button variant="outline" size="sm" className="gap-2">
                            <Github className="w-4 h-4" />
                            View Source
                        </Button>
                    </Link>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
                <div className="bg-zinc-900/50 border border-border rounded-xl p-6 md:p-10 shadow-sm">
                    <MarkdownRenderer content={content} />
                </div>
            </main>
        </div>
    );
}
