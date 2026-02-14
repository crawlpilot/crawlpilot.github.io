import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
                <article className="prose prose-invert prose-blue max-w-none">
                    <h1 className="text-4xl font-bold mb-8 text-primary">Terms and Conditions</h1>
                    <p className="lead text-xl text-muted-foreground mb-8">
                        By using CrawlPilot, you agree to these terms. Please read them carefully.
                    </p>

                    <h2>1. Usage License</h2>
                    <p>
                        CrawlPilot is a browser extension provided "as is". You are free to use it for personal or commercial purposes to extract data from publicly available websites.
                    </p>

                    <h2>2. Responsible Scraping</h2>
                    <p>
                        You agree to use CrawlPilot responsibly and in compliance with all applicable laws and the terms of service of the websites you scrape.
                        You acknowledge that you are solely responsible for the data you extract and how you use it.
                    </p>
                    <p>
                        <strong>We are not responsible for:</strong>
                    </p>
                    <ul>
                        <li>Any legal consequences resulting from your scraping activities.</li>
                        <li>IP bans or account restrictions imposed by target websites.</li>
                        <li>The accuracy or completeness of the extracted data.</li>
                    </ul>

                    <h2>3. Disclaimer</h2>
                    <p>
                        The software is provided without warranty of any kind, express or implied. In no event shall the authors be liable for any claim, damages, or other liability arising from the use of the software.
                    </p>

                    <h2>4. Updates</h2>
                    <p>
                        We reserve the right to modify these terms at any time. Continued use of the extension constitutes acceptance of the modified terms.
                    </p>

                    <p className="mt-12 text-sm text-muted-foreground">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </article>
            </main>
            <Footer />
        </div>
    );
}
