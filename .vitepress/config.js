import {defineConfig} from "vitepress";
import vite from "../vite.config.js";

export default defineConfig({
    srcDir: "./docs",
    title: "PortfoLitO",
    description: "A Lit Web Components Library for building Software Developer Portfolio of Work Pages",
    head: [
        ["link", {rel: "icon", type: "image/svg+xml", href: "/logo.svg"}]
    ],
    vite: {
        plugins: vite.plugins,
        rollupOptions: {
            external: [/^lit/, /shiki/]
        }
    },
    vue: {
        template: {
            compilerOptions: {
                isCustomElement: (tag) => tag.includes('-')
            }
        }
    },
    themeConfig: {
        logo: "/logo.svg",
        nav: [
            {text: "About", link: "/about"},
            {text: "Components", link: "/components/overview"}
        ],
        sidebar: [
            {
                text: "About",
                items: [
                    {text: "Getting Started", link: "/about"},
                    {text: "Overview of Components", link: "/components/overview"}
                ]
            },
            {
                text: "Page",
                items: [
                    {text: "Header", link: "/components/page/header"},
                    {text: "Logo", link: "/components/page/logo"},
                    {text: "Main", link: "/components/page/main"},
                    {text: "Nav", link: "/components/page/nav"}
                ]
            },
            {
                text: "Content",
                items: [
                    {text: "Article", link: "/components/content/article"},
                    {text: "Carousel", link: "/components/content/carousel"},
                    {text: "Details", link: "/components/content/details"},
                    {text: "Hero", link: "/components/content/hero"},
                    {text: "Languages", link: "/components/content/languages"},
                    {text: "Section", link: "/components/content/section"},
                    {text: "Technologies", link: "/components/content/technologies"}
                ]
            }
        ]
    }
});