import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

export const load = async () => {
    const postsDir = path.resolve('posts/blog');
    const files = fs.readdirSync(postsDir);
    
    const links = []
    files.forEach((filename) => {
        const content = fs.readFileSync(path.join(postsDir, filename), 'utf-8');
        const { data } = matter(content);
        const slug = filename.replace('.md', '');
        if(data.draft === true) return; // Skip draft posts
        links.push({
            slug,
            title: data.title || slug,
            href: `/blog/${slug}`,
            date: data.date || null
        });
    });

    let sortedData = [...links.sort((a, b) => new Date(a.date) - new Date(b.date))];

    return { sortedData };
};