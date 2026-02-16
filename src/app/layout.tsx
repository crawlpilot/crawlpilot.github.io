import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crawlpilot.github.io"),
  title: {
    default: "CrawlPilot | Enterprise Data Extraction Infrastructure",
    template: "%s | CrawlPilot"
  },
  description: "Reliable, high-performance web scraping infrastructure for developers and data teams. Master web automation with CrawlPilot.",
  keywords: [
    "web scraping",
    "data extraction",
    "browser extension",
    "crawlpilot",
    "stealthgeo",
    "streamflix",
    "iptv player",
    "automation",
    "web crawling"
  ],
  authors: [{ name: "CrawlPilot Team" }],
  creator: "CrawlPilot",
  publisher: "CrawlPilot",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CrawlPilot | Enterprise Data Extraction Infrastructure",
    description: "Reliable, high-performance web scraping infrastructure for developers and data teams.",
    url: "https://crawlpilot.github.io",
    siteName: "CrawlPilot",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CrawlPilot | Enterprise Data Extraction Infrastructure",
    description: "Reliable, high-performance web scraping infrastructure for developers and data teams.",
    creator: "@crawlpilot",
  },
  verification: {
    google: "google9bed9ddf4af54f37", // From existing verification file in public
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
