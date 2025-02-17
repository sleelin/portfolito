import {repository} from "../../package.json";

export const repo = repository.replace(/(^git\+)|(\.git$)/g, "");

export const head = [
    ["link", {rel: "icon", type: "image/svg+xml", href: "/portfolito/logo.svg"}]
];

export const nav = [
    {text: "About", link: "/about"},
    {text: "Components", link: "/components/"}
];

export const sidebar = [
    {
        text: "About",
        items: [
            {text: "Getting Started", link: "/about"},
            {text: "Overview of Components", link: "/components/"}
        ]
    },
    {
        text: "Page",
        items: [
            {text: "Header", link: "/components/page/header"},
            {text: "Logo", link: "/components/page/logo"},
            {text: "Nav", link: "/components/page/nav"},
            {text: "Main", link: "/components/page/main"},
            {text: "Footer", link: "/components/page/footer"},
        ]
    },
    {
        text: "Content",
        items: [
            {text: "Hero", link: "/components/content/hero"},
            {text: "Section", link: "/components/content/section"},
            {text: "Article", link: "/components/content/article"},
            {text: "Details", link: "/components/content/details"},
            {text: "Carousel", link: "/components/content/carousel"},
            {text: "Badge", link: "/components/content/badge"},
            {text: "Languages", link: "/components/content/languages"},
            {text: "Topics", link: "/components/content/topics"}
        ]
    }
];