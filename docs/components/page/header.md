<script setup>
import {inject} from "vue";
const element = inject("manifest").for("page", "header");
</script>

<style scoped>
.demo {
  &[static] {
    .focus:before {
      z-index: 1000;
    }
    
    page-main::part(content) {
      margin: 0;
    }
  }
  
  &:not([static]) :deep(.content) {
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

<demo static class="scale">
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

### Basic Usage

The `<page-header>` element itself does not provide any content of its own.
Instead, it acts as a sticky, responsive container wrapping your supplied content in a native `<header>` element.

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