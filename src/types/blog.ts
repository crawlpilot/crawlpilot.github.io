export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    description: string;
    content: string;
    readingTime: string;
    author?: {
        name: string;
        role: string;
        avatar?: string;
    };
    category?: string;
    image?: string;
}
