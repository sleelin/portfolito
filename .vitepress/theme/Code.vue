<script setup>
import {computed} from "vue";
import {bundledLanguages, bundledThemes, getHighlighter} from "shiki";

const props = defineProps({source: String, lang: {type: String, default: "html"}});
const highlighter = await getHighlighter({langs: ["html", ...Object.keys(bundledLanguages)], themes:  [...Object.keys(bundledThemes)]})
const code = computed(() => {
    if (!props.source) return "";
    else {
        return highlighter.codeToHtml(props.source, {theme: "github-dark", lang: props.lang});
    }
});
</script>

<style scoped>
div[class*='language-'] {
  background-color: var(--vp-c-bg-elv);
  border-radius: 0 0 8px 8px;
  box-shadow: var(--vp-shadow-1);
  margin-bottom: 0;
}

.dark div[class*='language-'] {
  background-color: var(--vp-c-bg-alt);
  box-shadow: none;
}
</style>

<template>
    <ClientOnly>
        <div class="vp-code language-html" v-html="code" />
    </ClientOnly>
</template>