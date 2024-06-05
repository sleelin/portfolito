import indent from "indent.js";

// RegExes for extracting preview, snippet, and source chunks from raw demo component
const DEMO_PREVIEW_RE = /^<demo(?<attribs>.*?)>(?<previewIndent>\n\s*)(?<preview>.*?)(\s*<template #.*?)?<\/demo>\n?$/s;
const DEMO_SNIPPET_RE = /^<demo.*?>.*?<template #snippet>(?<snippetIndent>\n\s*)(?<snippet>.*?)<\/template>.*?<\/demo>\n?$/s;
const DEMO_SOURCE_RE = /^<demo.*?>.*?<template #source>(?<sourceIndent>\n\s*)(?<source>.*?)<\/template>.*?<\/demo>\n?$/s;
// RegExes for inserting preview and snippet code in place of given expressions in demo templates
const INSERT_PREVIEW_RE = /(?<indent>\s*)\{\{\s*preview\s*}}/s;
const INSERT_SNIPPET_RE = /(?<indent>\s*)\{\{\s*snippet\s*}}/s;

/**
 * Utilise MarkdownIt to render a VitePress code block styled with Shiki
 * @param {import("vitepress").MarkdownRenderer} md - VitePress MarkdownIt instance
 * @param {String} source - code block to render with VitePress MarkdownIt instance
 * @returns {String} A VitePress HTML code block
 */
function renderCode(md, source) {
    // Fix line breaks in style tags, and limit number of new lines to two in a row
    const target = source.replaceAll(/(?<=<style>)(.*?)(?=\s*<\/style>)/gs, (match, p1) => p1.replaceAll(/}(?!\s*}|$)/gs, "}\n"))
        .replaceAll(/(?<=\n{2,})\n/gs, "");
    
    // Correct source indentation, and remove the VitePress code copy button
    return md.render("```html\n" + indent.html(target, {tabString: "  "}) + "\n```\n")
        .replace(/(<button.*?><\/button>)/, "");
}

/**
 * Replace the given expression in source string with specified target string
 * @param {String} source - string with expression to replace
 * @param {String} target - string to replace expression with
 * @param {RegExp} matcher - expression to find and replace in source, optionally including leading indentation
 * @param {String} originalIndent - leading indentation of target string, to be replaced
 * @param {String} fallbackIndent - leading indentation of source string, to be used if matcher does not contain an indent group
 * @returns {String} The source string with expression replaced by correctly indented target string, or target string if source was empty
 */
function insertCode(source, target, matcher, originalIndent, fallbackIndent) {
    // Check for indent group in matcher, otherwise use specified fallback or original indents...
    const indent = source?.match(matcher)?.groups?.indent ?? fallbackIndent ?? originalIndent;
    // ...then correctly indent target string, removing trailing whitespace
    const insert = `${indent}${target.replaceAll(originalIndent, indent).replaceAll(/\n\s*$/g, "")}`;
    
    return source?.replace(matcher, insert) ?? target;
}

/**
 * Produce an 8-character unsafe hash for the given code
 * @param {String} code - string to hash
 * @returns {string} An 8-character hash string representing the given code
 */
function hashCode(code) {
    return [...code].reduce((s, c) => Math.imul(31, s) + c.charCodeAt(0) | 0, 0)
        .toString(16).replace(/^-/, "").padStart(8, "0");
}

/**
 * Handle rendering of Demo components in MarkdownIt HTML blocks
 * @param {import("vitepress").MarkdownRenderer} md - VitePress MarkdownIt instance
 */
export default (md) => {
    // Cache existing html_block renderer rule as fallback
    const fallback = md.renderer.rules.html_block;
    
    // Replace with function that automates rendering of Demo components
    md.renderer.rules.html_block = (tokens, idx, options, env, self) => {
        const token = tokens[idx];
        let content = token.content;
        
        // Skip "hidden" tokens
        if (token.hidden) return "";
        // Only manipulate tokens that begin with a Demo component
        else if (content.trim().startsWith("<demo")) {
            // Do some trickery to make sure entire demo block is captured
            if (!content.trim().endsWith("</demo>")) {
                const lookahead = [];
                
                // Look ahead through tokens to find closing tag of demo block
                for (let i = 1, found = false; !found && ((idx+i) < tokens.length); ++i) {
                    const t = lookahead.at(lookahead.push(tokens[idx+i])-1);
                    
                    // If code block does not begin at last token's end, prefix an extra newline
                    if (t?.type === "code_block" && t?.map.at(0) !== (lookahead[i-2] ?? token).map.at(1))
                        t.content = `\n${t.content}`;
                    // Complete block if we've reached an HTML block that closes the demo tag
                    if (t?.type === "html_block" && t?.content?.trim?.()?.endsWith("</demo>")) {
                        found = true;
                        
                        // Join all future token contents with current content...
                        for (let t of lookahead) {
                            content += t.content;
                            
                            // ...and mark them as hidden HTML, so they can be skipped
                            t.type = "html_block";
                            t.hidden = true;
                        }
                    }
                }
                
                // If there weren't any future tokens, or content still doesn't close demo, return content
                if (!lookahead.length || !content.trim().endsWith("</demo>"))
                    return token.content;
            }
            
            // Generate a hash for the demo content...
            const demoId = hashCode(content);
            // ...then capture preview, snippet, and source chunks from demo content
            const {preview, previewIndent, attribs} = content.match(DEMO_PREVIEW_RE)?.groups ?? {};
            const {snippet, snippetIndent} = content.match(DEMO_SNIPPET_RE)?.groups ?? {};
            const {source, sourceIndent} = content.match(DEMO_SOURCE_RE)?.groups ?? {};
            // Insert preview into snippet and source, and snippet into source
            const snippetCode = insertCode(snippet, preview, INSERT_PREVIEW_RE, previewIndent, snippetIndent);
            const sourceWithPreview = insertCode(source, preview, INSERT_PREVIEW_RE, previewIndent, sourceIndent);
            const sourceCode = insertCode(sourceWithPreview, snippet ?? preview, INSERT_SNIPPET_RE, snippetIndent ?? previewIndent, sourceIndent);
            
            return (
                `<demo${attribs} :class="'demo-${demoId}'">\n` +
                    `${preview.replaceAll(/<style>(.*?)<\/style>/gs, `<component :is="'style'">\n.demo-${demoId} > .content {\n$1}\n</component>`)}\n` +
                    `<template #snippet>\n` +
                        `${renderCode(md, snippetCode)}\n` +
                    `</template>\n` + (!source ? "" : (
                    `<template #source>\n` +
                        `${renderCode(md, sourceCode)}\n` +
                    `</template>\n`)) +
                `</demo>`
            );
        } else {
            return fallback(tokens, idx, options, env, self);
        }
    };
};