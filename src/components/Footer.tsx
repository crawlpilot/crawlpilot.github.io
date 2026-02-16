import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-zinc-950 py-12 text-muted-foreground">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-foreground mb-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-primary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-5 w-5"
                                >
                                    <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                                    <path d="M8.5 8.5v.01" />
                                    <path d="M16 12v.01" />
                                    <path d="M12 16v.01" />
                                </svg>
                            </div>
                            <span>CrawlPilot</span>
                        </Link>
                        <p className="text-sm mb-6">
                            The enterprise-grade data extraction infrastructure for developers.
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://github.com/crawlpilot/crawlPilot" className="hover:text-foreground transition-colors">
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                            <Link href="https://www.linkedin.com/in/crawl-pilot-a862833b1/" className="hover:text-foreground transition-colors">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Product</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="#features" className="hover:text-primary transition-colors">Features</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Resources</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/crawlpilot/docs" className="hover:text-primary transition-colors">Documentation</Link></li>
                            <li><Link href="https://github.com/crawlpilot/crawlPilot/discussions" className="hover:text-primary transition-colors">Community</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Company</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/crawlpilot/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/crawlpilot/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p>&copy; {new Date().getFullYear()} CrawlPilot Inc. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/crawlpilot/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                        <Link href="/crawlpilot/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
