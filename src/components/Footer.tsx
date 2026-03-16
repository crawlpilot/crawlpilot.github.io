import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background border-t border-white/5 py-20 text-muted-foreground relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-3 font-heading font-black text-2xl text-foreground mb-8 group uppercase tracking-tighter">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 p-2 transition-transform group-hover:scale-110 ring-1 ring-primary/20">
                                <img src="/icon.png" alt="Crawl Pilot" className="h-full w-full object-contain" />
                            </div>
                            <span>Crawl Pilot</span>
                        </Link>
                        <p className="text-md font-medium leading-relaxed mb-8 max-w-xs">
                            The professional, open-source AI infrastructure for privacy-first web data extraction.
                        </p>
                        <div className="flex gap-6">
                            <Link href="https://github.com/crawlpilot/crawlPilot" className="p-3 rounded-xl bg-white/5 hover:text-primary hover:bg-primary/10 transition-all border border-white/5">
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                            <Link href="https://www.linkedin.com/in/crawl-pilot-a862833b1/" className="p-3 rounded-xl bg-white/5 hover:text-primary hover:bg-primary/10 transition-all border border-white/5">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>
                    </div>

                    <div className="md:ml-auto">
                        <h3 className="font-heading font-black text-xs uppercase tracking-[0.2em] text-foreground/50 mb-8">Platform</h3>
                        <ul className="space-y-4 text-sm font-bold">
                            <li><Link href="#features" className="hover:text-primary transition-colors">Capabilities</Link></li>
                            {/* <li><Link href="#pricing" className="hover:text-primary transition-colors">Pricing Plans</Link></li> */}
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Internal Blog</Link></li>
                        </ul>
                    </div>

                    <div className="md:ml-auto">
                        <h3 className="font-heading font-black text-xs uppercase tracking-[0.2em] text-foreground/50 mb-8">Resources</h3>
                        <ul className="space-y-4 text-sm font-bold">
                            <li><Link href="/crawlpilot/docs" className="hover:text-primary transition-colors">Documentation</Link></li>
                            <li><Link href="/crawlpilot/support" className="hover:text-primary transition-colors">Technical Support</Link></li>
                            <li><Link href="https://github.com/crawlpilot/crawlPilot/discussions" className="hover:text-primary transition-colors">Discussions</Link></li>
                        </ul>
                    </div>

                    <div className="md:ml-auto">
                        <h3 className="font-heading font-black text-xs uppercase tracking-[0.2em] text-foreground/50 mb-8">Legal</h3>
                        <ul className="space-y-4 text-sm font-bold">
                            <li><Link href="/crawlpilot/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/crawlpilot/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-black uppercase tracking-widest opacity-60">
                    <p>&copy; {new Date().getFullYear()} Crawl Pilot AI. Built for the future of data.</p>
                    <div className="flex gap-10">
                        <Link href="/crawlpilot/privacy" className="hover:text-primary transition-colors">Privacy</Link>
                        <Link href="/crawlpilot/terms" className="hover:text-primary transition-colors">Terms</Link>
                        <Link href="/crawlpilot/docs" className="hover:text-primary transition-colors">Legal</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
