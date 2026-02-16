import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function StealthGeoPrivacyPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
                <article className="prose prose-invert prose-blue max-w-none">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary tracking-tight">StealthGeo Privacy Policy</h1>
                    <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                        Last Updated: February 04, 2026
                    </p>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Introduction & Core Principles</h2>
                        <p className="text-muted-foreground leading-7 mb-4">
                            StealthGeo is committed to providing a "Privacy First" experience. We believe your location data is personal and should remain under your absolute control.
                        </p>
                        <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li><strong>No Data Collection:</strong> We do not collect, store, transmit, or share any personal information, browsing history, or real geolocation data.</li>
                                <li><strong>No PII:</strong> No Personally Identifiable Information is required to use StealthGeo.</li>
                                <li><strong>No Tracking:</strong> We do not use any analytics, tracking pixels, or advertising networks.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Data Storage</h2>
                        <p className="text-muted-foreground leading-7 mb-4">
                            All user preferences and settings are stored <strong>locally on your device</strong> using Chrome's `chrome.storage.local` API. This include:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                            <li>Saved locations and coordinates (Latitude/Longitude).</li>
                            <li>Timezone and locale settings.</li>
                            <li>Extension state and preferences.</li>
                        </ul>
                        <p className="text-muted-foreground">
                            This data never leaves your device and is not accessible by the developers or any third-party services.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Permissions Usage</h2>
                        <p className="text-muted-foreground leading-7 mb-6">
                            StealthGeo requires specific permissions to function correctly as a geolocation spoofing tool. Here is how they are used:
                        </p>
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                                <h3 className="font-mono text-sm font-bold text-primary mb-2">debugger</h3>
                                <p className="text-sm text-muted-foreground">Used for advanced location spoofing via the Chrome DevTools Protocol to ensure spoofing is undetectable.</p>
                            </div>
                            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                                <h3 className="font-mono text-sm font-bold text-primary mb-2">geolocation</h3>
                                <p className="text-sm text-muted-foreground">Required to override the browser's native Geolocation API.</p>
                            </div>
                            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                                <h3 className="font-mono text-sm font-bold text-primary mb-2">storage</h3>
                                <p className="text-sm text-muted-foreground">Necessary to save your spoofing preferences locally.</p>
                            </div>
                            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                                <h3 className="font-mono text-sm font-bold text-primary mb-2">privacy</h3>
                                <p className="text-sm text-muted-foreground">Allows modification of browser privacy settings to improve the effectiveness of spoofing.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">4. User Control & Security</h2>
                        <p className="text-muted-foreground leading-7">
                            Since all data is stored locally, you have complete control over it. You can view your stored settings via Chrome's developer tools or delete all data permanently by removing the extension or clearing its local storage.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Policy Compliance</h2>
                        <p className="text-muted-foreground leading-7">
                            StealthGeo complies with the Chrome Web Store Developer Program Policies, including the User Data Policy. We also adhere to the principles of GDPR and CCPA by ensuring that no personal data is collected or processed.
                        </p>
                    </section>

                    <section className="mb-12 border-t border-zinc-800 pt-8">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Contact & Support</h2>
                        <p className="text-muted-foreground leading-7">
                            If you have questions about this Privacy Policy or the security of StealthGeo, please contact us via:
                        </p>
                        <ul className="list-none space-y-2 mt-4 text-muted-foreground">
                            <li><span className="font-semibold text-foreground">Email:</span> crawlpilot6365@gmail.com</li>
                            <li><span className="font-semibold text-foreground">GitHub:</span> Open an issue on our official repository.</li>
                        </ul>
                    </section>

                </article>
            </main>
            <Footer />
        </div>
    );
}
