---
title: "Getting Started with CrawlPilot: The Local-First AI Web Scraper"
date: "2024-03-02"
description: "Learn how to set up CrawlPilot and start extracting structured data from any website using AI, all while keeping your data private and local."
---

# Getting Started with CrawlPilot

In today's data-driven world, web scraping has become an essential tool for developers, researchers, and businesses alike. However, traditional scraping methods often require complex configurations, constant maintenance, and frequently raise privacy concerns. Enter **CrawlPilot**—the privacy-first, open-source infrastructure for AI-powered web scraping.

## Why CrawlPilot?

CrawlPilot is designed with a "local-first" philosophy. Unlike many cloud-based scrapers, CrawlPilot runs your data extraction tasks or at least keeps your configurations and sensitive data on your own machine. By leveraging modern AI models, it can understand the structure of any webpage and turn it into clean, JSON-ready data without you having to write a single CSS selector.

### Key Features

1.  **AI-Powered Extraction**: No more brittle selectors. Tell CrawlPilot what data you want, and the AI finds it.
2.  **Local-First & Privacy-Focused**: Your data stays where it belongs—with you.
3.  **Developer Friendly**: Simple CLI and API interfaces for easy integration into your existing workflows.
4.  **Open Source**: Built by the community, for the community.

## Your First Extraction

Setting up CrawlPilot is straightforward. Once you have the extension or CLI installed, you can start a new extraction project with a single command.

```bash
crawlpilot init my-first-scraper
```

After initialization, you can point CrawlPilot to any URL and define the schema you're looking for. For example, if you want to extract product names and prices from an e-commerce site, your configuration might look like this:

```json
{
  "target": "https://example-store.com/products",
  "schema": {
    "product_name": "string",
    "price": "number"
  }
}
```

## Conclusion

CrawlPilot is more than just a scraper; it's a new way to interact with the web's vast information. By combining the power of AI with a commitment to privacy, we're making data extraction accessible and secure for everyone.

Stay tuned for more tutorials and deep dives into the advanced features of CrawlPilot!
