import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
                <article className="prose prose-invert prose-blue max-w-none">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary tracking-tight">Privacy Policy</h1>
                    <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Introduction</h2>
                        <p className="text-muted-foreground leading-7">
                            CrawlPilot ("we", "our", or "us") is a browser extension tool designed to help developers and users extract data from websites.
                            We are committed to protecting your privacy. This policy explains how we handle your data when you use the CrawlPilot browser extension.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Data Collection and Storage</h2>
                        <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
                            <p className="text-muted-foreground mb-4">
                                <strong>We strictly adhere to a "Local-First" policy.</strong> All data extracted using CrawlPilot is stored directly on your device.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li><strong>Extracted Content:</strong> Text, images, and other data you choose to scrape are stored in your browser's IndexedDB.</li>
                                <li><strong>Configuration Data:</strong> Extraction schemas, selectors, and user settings are stored in `chrome.storage.local`.</li>
                                <li><strong>Temporary Logs:</strong> Operational logs used for debugging are stored temporarily in memory or local storage.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">3. How We Use Your Data</h2>
                        <p className="text-muted-foreground leading-7 mb-4">
                            The data collected by the extension is used <strong>solely</strong> for the purpose of providing the tool's functionality:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>To display extracted data in the extension's user interface.</li>
                            <li>To allow you to export data to CSV or JSON formats.</li>
                            <li>To persist your extraction configurations across browser sessions.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Data Sharing and Third Parties</h2>
                        <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                            <p className="text-foreground font-medium">
                                <strong>We do NOT sell, trade, or transfer your data to outside parties.</strong>
                            </p>
                        </div>
                        <p className="text-muted-foreground leading-7 mt-4">
                            Since all data is stored locally on your device, we do not have access to it, and therefore cannot share it with third parties, advertisers, or analytics providers.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Permissions Usage</h2>
                        <p className="text-muted-foreground leading-7 mb-6">
                            CrawlPilot requires specific permissions to operate. Here is why we need them:
                        </p>
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                                <h3 className="font-mono text-sm font-bold text-primary mb-2">activeTab</h3>
                                <p className="text-sm text-muted-foreground">Allows the extension to access the content of the current tab only when you explicitly click the extension icon or trigger a feature.</p>
                            </div>
                            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                                <h3 className="font-mono text-sm font-bold text-primary mb-2">storage</h3>
                                <p className="text-sm text-muted-foreground">Required to save your extraction schemas and scraped results locally.</p>
                            </div>
                            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                                <h3 className="font-mono text-sm font-bold text-primary mb-2">downloads</h3>
                                <p className="text-sm text-muted-foreground">Required solely to export your extracted data as files to your computer.</p>
                            </div>
                            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                                <h3 className="font-mono text-sm font-bold text-primary mb-2">scripting</h3>
                                <p className="text-sm text-muted-foreground">Necessary to inject the extraction scripts into the page to identify and collect data.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Your Rights</h2>
                        <p className="text-muted-foreground leading-7">
                            You have full control over your data.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4 text-muted-foreground">
                            <li><strong>Access:</strong> You can view all stored data via the extension's dashboard.</li>
                            <li><strong>Deletion:</strong> You can delete all data by uninstalling the extension or clearing your browser's local storage/extension data.</li>
                        </ul>
                    </section>

                    <section className="mb-12 border-t border-zinc-800 pt-8">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Contact Us</h2>
                        <p className="text-muted-foreground leading-7">
                            If you have any questions about this Privacy Policy, please contact us at:
                        </p>
                        <a href="mailto:crawlpilot6365@crawlpilot.com" className="text-primary hover:underline font-medium block mt-2">
                            crawlpilot6365@gmail.com
                        </a>
                    </section>

                </article>
            </main>
            <Footer />
        </div>
    );
}
