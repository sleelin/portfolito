import {defineConfig} from "vite";
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
            files: ["src/components/**/*.js"]
        })
    ]
});