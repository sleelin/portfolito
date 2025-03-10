import {defineConfig} from "vite";
import {readFileSync} from "fs";
import babel from "vite-plugin-babel";
import CEM from "vite-plugin-cem";

export default defineConfig({
    base: "./",
    build: {
        minify: false,
        lib: {
            entry: "src/components/index.js",
            formats: ["es"]
        },
        rollupOptions: {
            external: /^lit/
        }
    },
    plugins: [
        babel({
            include: ["src/**"],
            babelConfig: {
                babelrc: false, configFile: false,
                presets: [
                    ["@babel/preset-env", {modules: false, include: ["@babel/plugin-transform-class-properties"]}]
                ],
                plugins: [
                    ["@babel/plugin-proposal-decorators", {version: "2023-05"}]
                ]
            }
        }),
        CEM({
            lit: true,
            files: ["src/components/**/*.js"],
            plugins: [{
                name: "fix-class-details",
                // Set the type information from decorators
                analyzePhase({ts, node, moduleDoc}) {
                    // Only modify class property declarations
                    if (node.kind === ts.SyntaxKind.PropertyDeclaration && node?.parent?.kind === ts.SyntaxKind.ClassDeclaration) {
                        // Find the decorator attached to property
                        const {expression} = [...node.modifiers].find(({kind}) => kind === ts.SyntaxKind.Decorator) ?? {};
                        // Find the relevant generated class declaration...
                        const declaration = moduleDoc.declarations
                            ?.find(({kind, name}) => (kind === "class" && name === node?.parent?.name?.escapedText));
                        // ...and the relevant class member linked to the property declaration
                        const member = declaration?.members
                            ?.find(({kind, name}) => kind === "field" && name === node?.name?.escapedText);
                        
                        // Handle @property decorator extensions
                        if (expression?.expression?.escapedText === "property") {
                            const [{properties} = {}] = expression.arguments;
                            
                            for (let {name, initializer} of properties ?? []) {
                                switch (name.escapedText) {
                                    case "type":
                                        member.type = {text: initializer.escapedText};
                                        break;
                                    case "reflect":
                                        member.reflects = (initializer.kind === ts.SyntaxKind.TrueKeyword);
                                        break;
                                }
                            }
                        }
                    }
                },
                // Remove declaration attributes and private class fields from declaration members
                moduleLinkPhase({moduleDoc}) {
                    for (let declaration of moduleDoc.declarations) if (Array.isArray(declaration.members)) {
                        const memberMap = new Map(declaration.members.map(m => ([m.name, m])));
                        
                        // Remove declared attributes from members, no point doubling up
                        if (Array.isArray(declaration.attributes)) {
                            for (let attrib of declaration.attributes) if (memberMap.has(attrib.name)) {
                                const {kind, ...member} = memberMap.get(attrib.name);
                                Object.assign(attrib, member);
                                memberMap.delete(attrib.name);
                            }
                        }
                        
                        // Filter out private class fields and methods
                        declaration.members = [...memberMap.values()].filter(({name}) => !name.startsWith("#"));
                    }
                },
            }]
        }),
        {
            name: "generate-types",
            apply: "build", enforce: "post",
            generateBundle() {
                const manifest = JSON.parse(readFileSync("./dist/custom-elements.json", {encoding: "utf-8"}));
                const components = manifest.modules.flatMap(({declarations}) => declarations);
                const definitions = [
                    `import {LitElement} from "lit";`,
                    `import {customElement, property} from "lit/decorators.js";`,
                    "", ...components.map(({name, tagName, attributes}) => ([
                        `@customElement("${tagName}")`,
                        `export class ${name} extends LitElement {${attributes?.length ? "" : "}"}`, ...(attributes?.length ? attributes.map(({name, type}, index) => ([
                            `    @property({type: ${type?.text ?? `${type[0].toUpperCase()}${type.slice(1)}`}})`,
                            `    accessor ${name}: ${type?.text?.toLowerCase() ?? type};`,
                            index === attributes.length - 1 ? "}" : "    "
                        ])) : []),
                        ""])),
                    "declare global {",
                    "    interface HTMLElementTagNameMap {", ...components.map(({name, tagName}) =>
                        `        "${tagName}": ${name};`),
                    "    }",
                    "}"
                ].flat(Infinity).join("\r\n");
                
                this.emitFile({type: "asset", fileName: "portfolito.d.ts", source: definitions});
            }
        }
    ]
});