import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

export const load = async ({ params }) => {
    const postsDir = path.resolve(`posts/blog`);  
    const content = fs.readFileSync(path.join(postsDir, `${params.slug}.md`), 'utf-8');
    const parsedData = matter(content);
    const htmlContent = marked.parse(parsedData.content);

    return { 
        metadata: parsedData.data,
        html: htmlContent
     };
};