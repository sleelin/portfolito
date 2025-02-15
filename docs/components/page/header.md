<script setup>
import {inject} from "vue";
const element = inject("manifest").for("page", "header");
</script>

<style scoped>
.demo {
  & :deep(.content) {
    padding: 4px;
  }
  
  page-header {
    position: sticky;
    --header-bgColor: var(--vp-c-white);
    
    .dark & {
      --header-bgColor: var(--vp-c-bg-alt);
    }
  }
}
</style>

# Header Element

{{ element.summary }}

<demo static class="scale overview no-spacing">
  <page-header class="focus">
    <page-logo class="blur">
      <img src="/logo.svg" alt="PortfoLitO" />
      <h1 slot="headings">PortfoLitO</h1>
    </page-logo>
    <page-nav class="blur">
      <a>About</a>
      <a>Components</a>
      <a slot="socials" href="https://www.npmjs.com">NPM</a>
      <a slot="socials" href="https://github.com">GitHub</a>
    </page-nav>
  </page-header>
  <page-main class="blur">
    <content-hero slot="hero"></content-hero>
  </page-main>
</demo>

## Usage

The `<page-header />` element wraps the native HTML `<header />` element, and is intended to be the first child of the `<body />` element of a page.
It acts as a sticky, responsive container for your supplied content, and does not provide any content of its own.

<demo>
  <page-header>PortfoLitO</page-header>
  <template #snippet>
    <body>
      {{preview}}
      <page-main>
        <!-- Your Content -->
      </page-main>
    </body>
  </template>
</demo>

## CSS Variables

<declaration :rows="element.cssProperties" />

## Slots

<declaration :rows="element.slots" />