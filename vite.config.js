import {defineConfig} from "vite";
import babel from "vite-plugin-babel";

export default defineConfig({
    base: "./",
    build: {
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
            babelConfig: {
                babelrc: false,
                configFile: false,
                presets: [
                    ["@babel/preset-env", {modules: false, include: ["@babel/plugin-transform-class-properties"]}]
                ],
                plugins: [
                    ["@babel/plugin-proposal-decorators", {version: "2023-05"}]
                ]
            }
        })
    ]
});