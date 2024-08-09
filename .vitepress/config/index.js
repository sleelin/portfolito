import {defineConfig} from "vitepress";
import vite from "../../vite.config.js";
import configureMarkdown from "./markdown.js";
import {head, nav, sidebar} from "./links.js";

export default defineConfig({
    title: "PortfoLitO", srcDir: "./docs", base: "/portfolito/",
    description: "A Lit Web Components Library for building Software Developer Portfolio of Work Pages",
    head, themeConfig: {logo: "/logo.svg", nav, sidebar, outline: {level: [2, 4]}},
    markdown: {config: configureMarkdown},
    vite: {
        plugins: vite.plugins,
        build: {cssTarget: "chrome99"},
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
    }
});