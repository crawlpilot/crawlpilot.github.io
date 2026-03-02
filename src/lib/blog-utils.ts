import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    description: string;
    content: string;
    readingTime: string;
}

export function getPostSlugs() {
    if (!fs.existsSync(postsDirectory)) return [];
    return fs.readdirSync(postsDirectory).filter(file => file.endsWith('.md'));
}

export function getPostBySlug(slug: string): BlogPost {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Simple reading time calculation
    const wordsPerMinute = 200;
    const noOfWords = content.split(/\s+/g).length;
    const minutes = Math.ceil(noOfWords / wordsPerMinute);
    const readingTime = `${minutes} min read`;

    return {
        slug: realSlug,
        title: data.title,
        date: data.date,
        description: data.description,
        content,
        readingTime,
    };
}

export function getAllPosts(): BlogPost[] {
    const slugs = getPostSlugs();
    const posts = slugs
        .map((slug: string) => getPostBySlug(slug))
        // sort posts by date in descending order
        .sort((post1: BlogPost, post2: BlogPost) => (post1.date > post2.date ? -1 : 1));
    return posts;
}
