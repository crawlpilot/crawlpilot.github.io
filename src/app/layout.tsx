import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import { AuthProvider } from "@/context/AuthContext";
import { DashboardWrapper } from "@/components/DashboardWrapper";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crawlpilot.tech"),
  title: {
    default: "CrawlPilot | AI-Powered Web Scraping & Data Extraction Infrastructure",
    template: "%s | CrawlPilot"
  },
  description: "The privacy-first, open-source infrastructure for AI-powered web scraping and data extraction. Turn any website into structured data instantly with CrawlPilot.",
  keywords: [
    "web scraping",
    "data extraction",
    "browser extension",
    "crawlpilot",
    "ai web scraping",
    "local-first",
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
    title: "CrawlPilot | AI-Powered Web Scraping & Data Extraction Infrastructure",
    description: "Turn the web into structured data with the privacy-first, open-source AI scraper.",
    url: "https://crawlpilot.tech",
    siteName: "CrawlPilot",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CrawlPilot | AI-Powered Web Scraping & Data Extraction",
    description: "The privacy-first infrastructure for AI-powered web extraction.",
    creator: "@crawlpilot",
  },
  verification: {
    google: "SNlsAt__hMmsgTdGRfogaFAlZPz6dHRU5Z3yC60RE_o",
  },
  category: "technology",
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-931CBGGJMB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-931CBGGJMB');
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
        suppressHydrationWarning
      >
        <AuthProvider>
          <DashboardWrapper>
            {children}
          </DashboardWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}
