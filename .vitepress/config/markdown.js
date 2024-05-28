const DEMO_PREVIEW_RE = /^<demo(?<attribs>.*?)>(?<previewIndent>\n\s*)(?<preview>.*?)\s*(?:<template #.*?)?<\/demo>$/s;
const DEMO_SNIPPET_RE = /^<demo.*?>.*?<template #snippet>(?<snippetIndent>\n\s*)(?<snippet>.*?)<\/template>.*?<\/demo>$/s;
const DEMO_SOURCE_RE = /^<demo.*?>.*?<template #source>(?<sourceIndent>\n\s*)(?<source>.*?)<\/template>.*?<\/demo>$/s;
const INSERT_PREVIEW_RE = /(?<indent>\s*)\{\{\s*preview\s*}}/s;
const INSERT_SNIPPET_RE = /(?<indent>\s*)\{\{\s*snippet\s*}}/s;

function renderCode(md, source, prefix) {
    return md.render("```html\n" + source.replaceAll(prefix, "\n") + "\n```\n")
        .replace(/(<button.*?><\/button>)/, "");
}

function insertCode(source, target, matcher, originalIndent, fallbackIndent) {
    const indent = source?.match(matcher)?.groups?.indent ?? fallbackIndent ?? originalIndent;
    const insert = `${indent}${target.replaceAll(originalIndent, indent).replaceAll(/\n\s*$/g, "")}`;
    
    return source?.replace(matcher, insert) ?? target;
}

export default (md) => {
    const fallback = md.renderer.rules.html_block;
    
    md.renderer.rules.html_block = (tokens, idx, options, env, self) => {
        const token = tokens[idx];
        const content = token.content.trim();
        
        if (content.startsWith("<demo")) {
            const {preview, previewIndent, attribs} = content.match(DEMO_PREVIEW_RE)?.groups ?? {};
            const {snippet, snippetIndent} = content.match(DEMO_SNIPPET_RE)?.groups ?? {};
            const {source, sourceIndent} = content.match(DEMO_SOURCE_RE)?.groups ?? {};
            const snippetCode = insertCode(snippet, preview, INSERT_PREVIEW_RE, previewIndent, snippetIndent);
            const sourceWithPreview = insertCode(source, preview, INSERT_PREVIEW_RE, previewIndent, sourceIndent);
            const sourceCode = insertCode(sourceWithPreview, snippet ?? preview, INSERT_SNIPPET_RE, snippetIndent ?? previewIndent, sourceIndent);
            
            return (
                `<demo${attribs}>\n` +
                    `${preview}\n` +
                    `<template #snippet>\n` +
                        `${renderCode(md, snippetCode, snippetIndent ?? previewIndent)}\n` +
                    `</template>\n` + (!source ? "" : (
                    `<template #source>\n` +
                        `${renderCode(md, sourceCode, sourceIndent)}\n` +
                    `</template>\n`)) +
                `</demo>`
            );
        }
        
        return fallback(tokens, idx, options, env, self);
    };
};