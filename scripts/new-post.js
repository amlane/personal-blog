import fs from "fs";
import path from "path";

const title = process.argv[2];
const slug = title.toLowerCase().replace(/\s+/g, '-');
// const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

function getLocalDateString() {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

const date = getLocalDateString(); 

if(!title){
    console.log("Usage: npm run new-post -- \"Post Title\"");
    process.exit(1);
}

const frontmatterTemplate = `---
title: "${title}"
date: "${date}"
draft: true
tags: []
---
`;

const filePath = path.resolve(`posts/blog/${slug}.md`);

if (fs.existsSync(filePath)) {
    console.error(`Error: A post with the slug "${slug}" already exists.`);
    process.exit(1);
}

fs.writeFileSync(filePath, frontmatterTemplate);
console.log(`New post created: ${filePath}`);