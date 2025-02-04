<script setup>
import {inject} from "vue";
const manifest = inject("manifest");
</script>

<style scoped>
.demo {
  &.page {
    &.full {
      height: min(max(50vw, 30vh), 360px);
      
      content-hero::part(container) {
        height: 500px;
      }
    }
    
    &:not(.full, .main, .footer) page-main::part(content) {
      margin: 0;
    }
    
    &.header .focus:before {
      z-index: 1000;
    }
    
    &.main content-hero {
      border: 2px solid transparent;
    }
    
    &.footer page-footer::part(container) {
      z-index: 1;
    }
    
    page-header {
      --header-bgColor: var(--vp-c-bg-soft);
    }
    
    page-nav {
      --container-textColor: var(--vp-c-neutral);
      --container-textColor-sm: var(--vp-c-white);
      --container-hoverColor: var(--vp-button-brand-active-bg);
      --link-shadowColor: var(--vp-c-indigo-3);
      
      a {
        cursor: pointer;
      }
    }
    
    page-main {
      --container-fgColor: var(--vp-c-bg-elv);
      --container-bgColor: transparent;
    }
    
    content-article {
      --content-bgColor: var(--vp-c-gray-3);
      --container-outlineColor: var(--vp-c-border);
    }
    
    content-hero {
      &::part(content) {
        text-align: left;
        max-width: 538px;
        padding: 0;
      }
    }
  }
}
</style>

# Overview of Components

Components are broken down into two categories:
- Page components, which provide overall structure to a page
- Content components, which encapsulate and style content within a page

Using PortfoLitO, the following example has been constructed directly in this page, as a live demonstration of page and content components in action.

::: tip
Open the console and inspect the demo to see the page and content component structure
:::

<demo static class="scale page full">
  <page-header>
    <page-logo>
      <img src="/logo.svg" alt="PortfoLitO" />
      <h1 slot="headings">PortfoLitO</h1>
    </page-logo>
    <page-nav>
      <a>About</a>
      <a>Components</a>
      <a slot="socials" href="https://www.npmjs.com">NPM</a>
      <a slot="socials" href="https://github.com">GitHub</a>
    </page-nav>
  </page-header>
  <page-main>
    <content-hero slot="hero">
      <img src="/logo.svg" alt="PortfoLitO" slot="image" />
      <h3>Showcase your Portfolio of Work</h3>
      <h4>A small library of Lit-based Web Components for Software Developers to build simple Portfolio of Work Pages</h4>
    </content-hero>
    <content-section variant="grid">
      <content-article variant="panel">
        <h4>Feature A</h4>
        <p>Potenti tation mnesarchum volumus dis quisque facilisi. Lorem a consectetuer alienum has.</p>
      </content-article>
      <content-article variant="panel">
        <h4>Feature B</h4>
        <p>Tamquam vitae curae dico dictas. Antiopam tempor hendrerit delicata maecenas repudiandae tractatos eripuit.</p>
      </content-article>
      <content-article variant="panel">
        <h4>Feature C</h4>
        <p>Libero curae luptatum intellegat evertitur elit. Interesset inciderint enim eam sale maluisset.</p>
      </content-article>
    </content-section>
  </page-main>
  <page-footer></page-footer>
</demo>

## Page Components

Similar to their native HTML equivalents, these components provide structure and navigation to a page. They are intended to only be used once per document.

### Header

::: tip `<page-header />`
{{ manifest.for("page", "header").summary }}
:::

<demo static class="scale page header">
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

### Logo

::: tip `<page-logo />`
{{ manifest.for("page", "logo").summary }}
:::

<demo static class="scale page logo">
  <page-header>
    <page-logo class="focus rounded">
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

### Nav

::: tip `<page-nav />`
{{ manifest.for("page", "nav").summary }}
:::

<demo static class="scale page nav">
  <page-header>
    <page-logo class="blur">
      <img src="/logo.svg" alt="PortfoLitO" />
      <h1 slot="headings">PortfoLitO</h1>
    </page-logo>
    <page-nav class="focus rounded">
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

### Main

::: tip `<page-main />`
{{ manifest.for("page", "main").summary }}
:::

<demo static class="scale page main">
  <page-header class="blur">
    <page-logo>
      <img src="/logo.svg" alt="PortfoLitO" />
      <h1 slot="headings">PortfoLitO</h1>
    </page-logo>
    <page-nav>
      <a>About</a>
      <a>Components</a>
      <a slot="socials" href="https://www.npmjs.com">NPM</a>
      <a slot="socials" href="https://github.com">GitHub</a>
    </page-nav>
  </page-header>
  <page-main class="focus">
    <content-hero slot="hero"></content-hero>
    <content-section variant="grid">
      <content-article variant="panel">
        <h4>Feature A</h4>
        <p>Potenti tation mnesarchum volumus dis quisque facilisi. Lorem a consectetuer alienum has.</p>
      </content-article>
      <content-article variant="panel">
        <h4>Feature B</h4>
        <p>Tamquam vitae curae dico dictas. Antiopam tempor hendrerit delicata maecenas repudiandae tractatos eripuit.</p>
      </content-article>
      <content-article variant="panel">
        <h4>Feature C</h4>
        <p>Libero curae luptatum intellegat evertitur elit. Interesset inciderint enim eam sale maluisset.</p>
      </content-article>
    </content-section>
  </page-main>
  <page-footer class="blur"></page-footer>
</demo>

### Footer

::: tip `<page-footer />`
{{ manifest.for("page", "footer").summary }}
:::

<demo static class="scale page footer">
  <page-header class="blur">
    <page-logo>
      <img src="/logo.svg" alt="PortfoLitO" />
      <h1 slot="headings">PortfoLitO</h1>
    </page-logo>
    <page-nav>
      <a>About</a>
      <a>Components</a>
      <a slot="socials" href="https://www.npmjs.com">NPM</a>
      <a slot="socials" href="https://github.com">GitHub</a>
    </page-nav>
  </page-header>
  <page-main class="blur">
    <content-section variant="grid">
      <content-article variant="panel">
        <h4>Feature A</h4>
        <p>Potenti tation mnesarchum volumus dis quisque facilisi. Lorem a consectetuer alienum has.</p>
      </content-article>
      <content-article variant="panel">
        <h4>Feature B</h4>
        <p>Tamquam vitae curae dico dictas. Antiopam tempor hendrerit delicata maecenas repudiandae tractatos eripuit.</p>
      </content-article>
      <content-article variant="panel">
        <h4>Feature C</h4>
        <p>Libero curae luptatum intellegat evertitur elit. Interesset inciderint enim eam sale maluisset.</p>
      </content-article>
    </content-section>
  </page-main>
  <page-footer class="focus"></page-footer>
</demo>