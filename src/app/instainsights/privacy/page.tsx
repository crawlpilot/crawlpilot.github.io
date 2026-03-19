import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col uppercase">
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
                            instaInsights ("we", "our", or "us") is a browser extension tool designed to help users analyze content engagement and manage their Instagram presence.
                            This policy explains how we handle your data when you use the instaInsights browser extension.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Data Collection and Storage</h2>
                        <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
                            <p className="text-muted-foreground mb-4 font-bold">
                                Local-First Analytics Policy
                            </p>
                            <p className="text-muted-foreground mb-4">
                                All data collected by instaInsights is processed and stored directly on your device. We do not maintain any central servers for your analytics data.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li><strong>Engagement Data:</strong> Likes, views, and comment counts for analyzed content are stored in your browser's local database.</li>
                                <li><strong>Configuration:</strong> Your preferences and settings are persisted locally using `chrome.storage`.</li>
                                <li><strong>Temporary Cache:</strong> In-memory data used for active analytics sessions to ensure high performance.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">3. How We Use Your Data</h2>
                        <p className="text-muted-foreground leading-7 mb-4">
                            The data processed by the extension is used exclusively for:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>Generating engagement analytics and performance reports.</li>
                            <li>Helping you manage and organize your Instagram content effectively.</li>
                            <li>Improving the local analytics and data parsing algorithms.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Permissions Usage</h2>
                        <p className="text-muted-foreground leading-7 mb-6">
                            instaInsights requires specific permissions to provide its core analytics features:
                        </p>
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                                <h3 className="font-mono text-sm font-bold text-primary mb-2">instagram.com/*</h3>
                                <p className="text-sm text-muted-foreground">Allows the extension to read public engagement metrics like likes, views, and comments directly from Instagram pages.</p>
                            </div>
                            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                                <h3 className="font-mono text-sm font-bold text-primary mb-2">storage</h3>
                                <p className="text-sm text-muted-foreground">Required to store your historical analytics data and custom configurations locally on your browser.</p>
                            </div>
                            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                                <h3 className="font-mono text-sm font-bold text-primary mb-2">downloads</h3>
                                <p className="text-sm text-muted-foreground">Necessary to export your engagement reports and managed content files directly to your machine.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Data Sharing</h2>
                        <p className="text-muted-foreground leading-7">
                            We do not collect, store, or transmit any of your personal data to external servers. Your analytics remain private and are restricted to your local environment. We do not sell or share any user data with third parties, advertisers, or analytics providers.
                        </p>
                    </section>

                    <section className="mb-12 border-t border-zinc-800 pt-8">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Contact Us</h2>
                        <p className="text-muted-foreground leading-7">
                            If you have any questions about this Privacy Policy or instaInsights, please contact us at:
                        </p>
                        <a href="mailto:crawlpilot6365@gmail.com" className="text-primary hover:underline font-medium block mt-2">
                            crawlpilot6365@gmail.com
                        </a>
                    </section>
                </article>
            </main>
            <Footer />
        </div>
    );
}
