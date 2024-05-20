const renderCode = (md, source, prefix) => md.render("```html\n" + source.replaceAll(prefix, "\n") + "\n```\n")
    .replace(/(<button.*?><\/button>)/, "");

export default (md) => {
    const fallback = md.renderer.rules.html_block;
    
    md.renderer.rules.html_block = (tokens, idx, options, env, self) => {
        const token = tokens[idx];
        const content = token.content.trim();
        
        if (content.startsWith("<demo")) {
            const matches = content.match(/^<demo(?<attribs>.*?)>(?<previewIndent>\n\s*)(?<preview>.*?)(?:<template #source>(?<sourceIndent>\n\s*)(?<source>.*?)<\/template>)?\s*<\/demo>$/s);
            const {groups: {attribs, preview, previewIndent, source, sourceIndent}} = matches;
            
            return (
                `<demo${attribs}>\n` +
                    `${preview}\n` +
                    `<template #snippet>\n` +
                        `${renderCode(md, preview, previewIndent)}\n` +
                    `</template>\n` + (!source ? "" : (
                    `<template #source>\n` +
                        `${renderCode(md, source, sourceIndent)}\n` +
                    `</template>\n`)) +
                `</demo>`
            );
        }
        
        return fallback(tokens, idx, options, env, self);
    };
};