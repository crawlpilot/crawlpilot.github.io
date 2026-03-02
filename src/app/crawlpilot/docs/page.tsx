import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github } from "lucide-react";
import Link from "next/link";

async function getDocContent() {
    const fallbackContent = `
# CrawlPilot Documentation

CrawlPilot is a privacy-first, AI-powered web scraping infrastructure. 

## Features
- **AI Extraction**: Turn any website into structured data.
- **Local-First**: Your data stays in your browser.
- **Easy to Use**: No coding required for the extension.

## Getting Started
To get started with CrawlPilot, follow these steps:
1. Install the [Crawl Pilot Extension](https://github.com/crawlpilot/crawlPilot).
2. Navigate to any website.
3. Open the extension and start selecting data.

## Documentation Unavailable
We are having trouble fetching the latest documentation from GitHub. You can view the full documentation directly on our [GitHub Repository](https://github.com/crawlpilot/crawlPilot).
`;

    try {
        const res = await fetch('https://raw.githubusercontent.com/crawlpilot/crawlPilot/main/README.md', {
            next: { revalidate: 3600 }
        });

        if (!res.ok) {
            // Try another common branch if main fails
            const resMaster = await fetch('https://raw.githubusercontent.com/crawlpilot/crawlPilot/master/README.md', {
                next: { revalidate: 3600 }
            });
            if (resMaster.ok) return resMaster.text();

            console.warn("Docs fetch failed with status:", res.status);
            return fallbackContent;
        }

        return res.text();
    } catch (error) {
        console.error("Error fetching docs:", error);
        return fallbackContent;
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
