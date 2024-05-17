import DefaultTheme from "vitepress/theme";
import DemoComponent from "./Demo.vue";
import "@sleelin/portfolito";
import "./style.css";

/** @type {import("vitepress").Theme} */
export default {
    extends: DefaultTheme,
    async enhanceApp({app}) {
        const {default: manifest} = await import("virtual:vite-plugin-cem/custom-elements-manifest");
        
        app.provide("manifest", {
            for: (type, name) => (
                (manifest.modules.find(({path}) => path.endsWith(`${type}/${name}.js`))?.declarations ?? []).at(0)
            )
        });
        
        app.component("demo", DemoComponent);
    }
};