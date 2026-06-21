import matter from 'gray-matter';
import fs from 'fs';

export const load = async () => {
    const files = fs.readdirSync('posts/blog');
    
    const links = files.map((filename) => {
        const content = fs.readFileSync(`posts/blog/${filename}`, 'utf-8');
        const { data } = matter(content);
        const slug = filename.replace('.md', '');

        return {
            slug,
            title: data.title || slug,
            href: `/blog/${slug}`
        };
    });

    return { links };
};