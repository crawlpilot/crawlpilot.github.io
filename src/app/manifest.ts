import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'CrawlPilot',
        short_name: 'CrawlPilot',
        description: 'Enterprise Data Extraction tools',
        start_url: '/',
        display: 'standalone',
        background_color: '#09090b',
        theme_color: '#3b82f6',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
