// @ts-check
import { defineConfig } from 'astro/config';
import devtoolsJson from "vite-plugin-devtools-json";
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import mdx from '@astrojs/mdx';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
    site: 'https://blog.lm04.me',
    vite: {
        plugins: [devtoolsJson(), tailwindcss()]
    },
    integrations: [
        mermaid({
            theme: 'dark',
        }),
        svelte(),
        sitemap(),
        mdx(),
    ],
    markdown: {
        syntaxHighlight: {
            type: 'shiki',
            excludeLangs: ['mermaid', 'math']
        },
        shikiConfig: {
            // theme: 'dark-plus'
            // theme: 'github-dark-dimmed'
            theme: 'everforest-dark',
        },
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
    }
});
