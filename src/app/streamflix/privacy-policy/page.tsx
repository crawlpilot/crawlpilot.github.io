import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function StreamFlixPrivacyPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
                <article className="prose prose-invert prose-blue max-w-none">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary tracking-tight">StreamFlix Privacy Policy</h1>
                    <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                        Last Updated: February 03, 2026
                    </p>

                    <p className="text-muted-foreground mb-8">
                        CrawlPilot ("we," "us," or "our") operates the StreamFlix mobile application (the "App"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our App and the choices you have associated with that data.
                    </p>

                    <p className="text-muted-foreground mb-12">
                        We use your data to provide and improve the App. By using the App, you agree to the collection and use of information in accordance with this policy.
                    </p>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Information Collection and Use</h2>
                        <p className="text-muted-foreground leading-7 mb-4">
                            We collect several different types of information for various purposes to provide and improve our service to you.
                        </p>

                        <h3 className="text-xl font-medium mb-2 text-foreground">Personal Data</h3>
                        <p className="text-muted-foreground mb-4">
                            While using our App, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                            <li>Email address (for account synchronization if applicable)</li>
                            <li>Cookies and Usage Data</li>
                        </ul>

                        <h3 className="text-xl font-medium mb-2 text-foreground">Usage Data</h3>
                        <p className="text-muted-foreground mb-4">
                            When you access the App by or through a mobile device, we may collect certain information automatically, including, but not limited to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>The type of mobile device you use</li>
                            <li>Your mobile device unique ID</li>
                            <li>The IP address of your mobile device</li>
                            <li>Your mobile operating system</li>
                            <li>The type of mobile Internet browser you use</li>
                            <li>Unique device identifiers and other diagnostic data</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">2. IPTV Content and Links</h2>
                        <p className="text-muted-foreground leading-7 mb-4">
                            StreamFlix is an IPTV Player. It does not provide, host, or own any media content. Users are responsible for providing their own content (e.g., M3U playlists). StreamFlix does not have any affiliation with third-party providers.
                        </p>
                        <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                            <p className="text-muted-foreground">
                                <strong>Playlist Privacy</strong>: Any M3U links or playlist data you enter into the app are stored locally on your device or in your private secure storage. We do not transmit your playlist URLs to our servers.
                            </p>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Advertising and Third-Party Services</h2>
                        <p className="text-muted-foreground leading-7 mb-6">
                            We may use third-party Service Providers to monitor and analyze the use of our Service, or to show advertisements to you to help support and maintain our Service.
                        </p>

                        <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
                            <h3 className="text-xl font-medium mb-4 text-foreground">Google AdMob</h3>
                            <p className="text-muted-foreground mb-4">
                                We use Google AdMob to display advertisements. Google's advertising requirements can be summed up by Google's Advertising Principles. They are put in place to provide a positive experience for users.
                            </p>
                            <p className="text-muted-foreground mb-4">
                                Google uses cookies to serve ads on our App. Google's use of the advertising identifier enables it and its partners to serve ads to our users based on their visit to our App or other apps on the Internet.
                            </p>
                            <p className="text-muted-foreground">
                                You may opt-out of personalized advertising by visiting <a href="https://adssettings.google.com/" className="text-primary hover:underline">Google Ads Settings</a>.
                            </p>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Use of Data</h2>
                        <p className="text-muted-foreground mb-4">StreamFlix uses the collected data for various purposes:</p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>To provide and maintain the App</li>
                            <li>To notify you about changes to our App</li>
                            <li>To allow you to participate in interactive features of our App when you choose to do so</li>
                            <li>To provide customer care and support</li>
                            <li>To provide analysis or valuable information so that we can improve the App</li>
                            <li>To monitor the usage of the App</li>
                            <li>To detect, prevent and address technical issues</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Security of Data</h2>
                        <p className="text-muted-foreground leading-7">
                            The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Children's Privacy</h2>
                        <p className="text-muted-foreground leading-7 mb-4">
                            Our Service does not address anyone under the age of 13 ("Children").
                        </p>
                        <p className="text-muted-foreground leading-7">
                            We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Changes to This Privacy Policy</h2>
                        <p className="text-muted-foreground leading-7">
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                        </p>
                        <p className="text-muted-foreground leading-7 mt-4">
                            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                        </p>
                    </section>

                    <section className="mb-12 border-t border-zinc-800 pt-8">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Contact Us</h2>
                        <p className="text-muted-foreground leading-7">
                            If you have any questions about this Privacy Policy, please contact us:
                        </p>
                        <ul className="list-none space-y-2 mt-4">
                            <li>
                                <span className="font-semibold text-foreground">By email:</span>
                                <a href="mailto:crawlpilot6365@gmail.com" className="text-primary hover:underline ml-2">crawlpilot6365@gmail.com</a>
                            </li>
                            <li>
                                <span className="font-semibold text-foreground">Website:</span>
                                <a href="https://crawlpilot.github.io/" className="text-primary hover:underline ml-2">https://crawlpilot.github.io/</a>
                            </li>
                        </ul>
                    </section>

                </article>
            </main>
            <Footer />
        </div>
    );
}
