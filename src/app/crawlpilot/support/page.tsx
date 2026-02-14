import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function SupportPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
                <article className="prose prose-invert prose-blue max-w-none">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary tracking-tight">Support</h1>
                    <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                        Need help with Crawl Pilot? We're here to assist you.
                    </p>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Us</h2>
                        <p className="text-muted-foreground leading-7 mb-4">
                            If you're experiencing issues or have feature requests, please reach out to us directly via email:
                        </p>
                        <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex items-center gap-4">
                            <span className="text-2xl">📧</span>
                            <div>
                                <h3 className="font-semibold text-foreground">Email Support</h3>
                                <a href="mailto:crawlpilot6365@gmail.com" className="text-primary hover:underline font-medium">
                                    crawlpilot6365@gmail.com
                                </a>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">Report a Bug</h2>
                        <p className="text-muted-foreground leading-7 mb-4">
                            Found a bug? Help us improve by reporting it on our GitHub repository.
                        </p>
                        <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex items-center gap-4">
                            <span className="text-2xl">🐛</span>
                            <div>
                                <h3 className="font-semibold text-foreground">GitHub Issues</h3>
                                <a
                                    href="https://github.com/RahulBisht/crawlPilot/issues"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline font-medium"
                                >
                                    Open an Issue on GitHub &rarr;
                                </a>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                                <h3 className="font-bold text-foreground mb-2">Is my data private?</h3>
                                <p className="text-muted-foreground">Yes. Crawl Pilot runs entirely in your browser. Your extracted data is stored locally (IndexedDB) and is never sent to our servers.</p>
                            </div>
                            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                                <h3 className="font-bold text-foreground mb-2">How do I export data?</h3>
                                <p className="text-muted-foreground">After scraping, click the "Export" button in the side panel. You can choose between CSV (Excel compatible) and JSON formats.</p>
                            </div>
                            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                                <h3 className="font-bold text-foreground mb-2">Why is the scraper not working on some sites?</h3>
                                <p className="text-muted-foreground">Some websites have advanced anti-scraping measures. Try enabling the "Right-Click Unlocker" in the Utilities tab, or ensure you are scrolling slowly to load all content.</p>
                            </div>
                        </div>
                    </section>

                </article>
            </main>
            <Footer />
        </div>
    );
}
