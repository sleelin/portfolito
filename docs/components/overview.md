<script setup>
import {inject} from "vue";
const manifest = inject("manifest");
</script>

# Overview of Components

Components are broken down into two categories:
- Page components, which provide overall structure to a page
- Content components, which encapsulate and style content within a page

Using PortfoLitO, the following example has been constructed directly in this page, as a live demonstration of page and content components in action.

::: tip
Open the console and inspect the demo to see the page and content component structure
:::

<demo static class="scale overview fixed-height">
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
      <content-article>
        <h4 slot="title">About</h4>
        <h5 slot="subtitle">Getting Started</h5>
        <p>Tamquam vitae curae dico dictas. Antiopam tempor hendrerit delicata maecenas repudiandae tractatos eripuit.</p>
      </content-article>
      <content-article variant="panel">
        <h4>Tip</h4>
        <p>Open the console and inspect the demo to see the page and content component structures</p>
      </content-article>
      <content-article variant="panel">
        <h4 slot="title">Focus on Your Content</h4>
        <content-languages slot="tags">
          <li title="HTML" value="50">HTML</li>
          <li title="CSS" value="40">CSS</li>
          <li title="JS" value="10">JavaScript</li>
        </content-languages>
        <p>Native web components allow you to create an elegant showcase for your portfolio of work using HTML</p>
      </content-article>
      <content-article>
        <h4 slot="title">Overview</h4>
        <h5 slot="subtitle">Installation and Usage</h5>
        <content-technologies slot="tags" variant="tile">
          <content-badge color="teal">Lit</content-badge>
          <content-badge color="red">HTML</content-badge>
          <content-badge color="purple">CSS</content-badge>
        </content-technologies>
        <p>Libero curae luptatum intellegat evertitur elit. Interesset inciderint enim eam sale maluisset. Graece regione urbanitas nominavi duis honestatis ancillae voluptatibus libero senectus.</p>
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

[See more](./page/header)
:::

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

### Logo

::: tip `<page-logo />`
{{ manifest.for("page", "logo").summary }}

[See more](./page/logo)
:::

<demo static class="scale overview no-spacing">
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

[See more](./page/nav)
:::

<demo static class="scale overview no-spacing">
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

[See more](./page/main)
:::

<demo static class="scale overview">
  <style>
    content-hero {
      border: 2px solid transparent;
    }
  </style>
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
      <content-article>
        <h4 slot="title">About</h4>
        <h5 slot="subtitle">Getting Started</h5>
        <p>Tamquam vitae curae dico dictas. Antiopam tempor hendrerit delicata maecenas repudiandae tractatos eripuit.</p>
      </content-article>
      <content-article variant="panel">
        <h4>Tip</h4>
        <p>Open the console and inspect the demo to see the page and content component structures</p>
      </content-article>
      <content-article variant="panel">
        <h4 slot="title">Focus on Your Content</h4>
        <content-languages slot="tags">
          <li title="HTML" value="50">HTML</li>
          <li title="CSS" value="40">CSS</li>
          <li title="JS" value="10">JavaScript</li>
        </content-languages>
        <p>Native web components allow you to create an elegant showcase for your portfolio of work using HTML</p>
      </content-article>
      <content-article>
        <h4 slot="title">Overview</h4>
        <h5 slot="subtitle">Installation and Usage</h5>
        <content-technologies slot="tags" variant="tile">
          <content-badge color="teal">Lit</content-badge>
          <content-badge color="red">HTML</content-badge>
          <content-badge color="purple">CSS</content-badge>
        </content-technologies>
        <p>Libero curae luptatum intellegat evertitur elit. Interesset inciderint enim eam sale maluisset. Graece regione urbanitas nominavi duis honestatis ancillae voluptatibus libero senectus.</p>
      </content-article>
    </content-section>
  </page-main>
  <page-footer class="blur"></page-footer>
</demo>

### Footer

::: tip `<page-footer />`
{{ manifest.for("page", "footer").summary }}

[See more](./page/footer)
:::

<demo static class="scale overview">
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
        <h4 slot="title">Focus on Your Content</h4>
        <content-languages slot="tags">
          <li title="HTML" value="50">HTML</li>
          <li title="CSS" value="40">CSS</li>
          <li title="JS" value="10">JavaScript</li>
        </content-languages>
        <p>Native web components allow you to create an elegant showcase for your portfolio of work using HTML</p>
      </content-article>
      <content-article>
        <h4 slot="title">Overview</h4>
        <h5 slot="subtitle">Installation and Usage</h5>
        <content-technologies slot="tags" variant="tile">
          <content-badge color="teal">Lit</content-badge>
          <content-badge color="red">HTML</content-badge>
          <content-badge color="purple">CSS</content-badge>
        </content-technologies>
        <p>Libero curae luptatum intellegat evertitur elit. Interesset inciderint enim eam sale maluisset. Graece regione urbanitas nominavi duis honestatis ancillae voluptatibus libero senectus.</p>
      </content-article>
    </content-section>
  </page-main>
  <page-footer class="focus"></page-footer>
</demo>

## Content Components

These components encapsulate and style the actual content of the page, and can be used as many times as needed.

### Hero

::: tip `<content-hero />`
{{ manifest.for("content", "hero").summary }}

[See more](./content/hero)
:::

<demo static class="scale overview fixed-height no-overflow">
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
  <page-main>
    <content-hero slot="hero" class="focus">
      <img src="/logo.svg" alt="PortfoLitO" slot="image" />
      <h3>Showcase your Portfolio of Work</h3>
      <h4>A small library of Lit-based Web Components for Software Developers to build simple Portfolio of Work Pages</h4>
    </content-hero>
    <content-section variant="grid" class="blur">
      <content-article>
        <h4 slot="title">About</h4>
        <h5 slot="subtitle">Getting Started</h5>
        <p>Tamquam vitae curae dico dictas. Antiopam tempor hendrerit delicata maecenas repudiandae tractatos eripuit.</p>
      </content-article>
      <content-article variant="panel">
        <h4>Tip</h4>
        <p>Open the console and inspect the demo to see the page and content component structures</p>
      </content-article>
    </content-section>
  </page-main>
</demo>

### Section

::: tip `<content-section />`
{{ manifest.for("content", "section").summary }}

[See more](./content/section)
:::

<demo static class="scale overview">
  <style>
    .focus:before {
      border-bottom-left-radius: 16px;
      border-bottom-right-radius: 16px;
    }
    
    page-main::part(content) {
      contain: unset;
    }
  </style>
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
  <page-main>
    <content-hero slot="hero" class="blur"></content-hero>
    <content-section variant="grid" class="focus">
      <content-article>
        <h4 slot="title">About</h4>
        <h5 slot="subtitle">Getting Started</h5>
        <p>Tamquam vitae curae dico dictas. Antiopam tempor hendrerit delicata maecenas repudiandae tractatos eripuit.</p>
      </content-article>
      <content-article variant="panel">
        <h4>Tip</h4>
        <p>Open the console and inspect the demo to see the page and content component structures</p>
      </content-article>
      <content-article variant="panel">
        <h4 slot="title">Focus on Your Content</h4>
        <content-languages slot="tags">
          <li title="HTML" value="50">HTML</li>
          <li title="CSS" value="40">CSS</li>
          <li title="JS" value="10">JavaScript</li>
        </content-languages>
        <p>Native web components allow you to create an elegant showcase for your portfolio of work using HTML</p>
      </content-article>
      <content-article>
        <h4 slot="title">Overview</h4>
        <h5 slot="subtitle">Installation and Usage</h5>
        <content-technologies slot="tags" variant="tile">
          <content-badge color="teal">Lit</content-badge>
          <content-badge color="red">HTML</content-badge>
          <content-badge color="purple">CSS</content-badge>
        </content-technologies>
        <p>Libero curae luptatum intellegat evertitur elit. Interesset inciderint enim eam sale maluisset. Graece regione urbanitas nominavi duis honestatis ancillae voluptatibus libero senectus.</p>
      </content-article>
    </content-section>
  </page-main>
  <page-footer class="blur"></page-footer>
</demo>

### Article

::: tip `<content-article />`
{{ manifest.for("content", "article").summary }}

[See more](./content/article)
:::

<demo static class="scale overview">
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
  <page-main>
    <content-hero slot="hero" class="blur"></content-hero>
    <content-section variant="grid">
      <content-article class="focus rounded">
        <h4 slot="title">About</h4>
        <h5 slot="subtitle">Getting Started</h5>
        <p>Tamquam vitae curae dico dictas. Antiopam tempor hendrerit delicata maecenas repudiandae tractatos eripuit.</p>
      </content-article>
      <content-article variant="panel" class="focus rounded">
        <h4>Tip</h4>
        <p>Open the console and inspect the demo to see the page and content component structures</p>
      </content-article>
      <content-article variant="panel" class="focus rounded">
        <h4 slot="title">Focus on Your Content</h4>
        <content-languages slot="tags">
          <li title="HTML" value="50">HTML</li>
          <li title="CSS" value="40">CSS</li>
          <li title="JS" value="10">JavaScript</li>
        </content-languages>
        <p>Native web components allow you to create an elegant showcase for your portfolio of work using HTML</p>
      </content-article>
      <content-article class="focus rounded">
        <h4 slot="title">Overview</h4>
        <h5 slot="subtitle">Installation and Usage</h5>
        <content-technologies slot="tags" variant="tile">
          <content-badge color="teal">Lit</content-badge>
          <content-badge color="red">HTML</content-badge>
          <content-badge color="purple">CSS</content-badge>
        </content-technologies>
        <p>Libero curae luptatum intellegat evertitur elit. Interesset inciderint enim eam sale maluisset. Graece regione urbanitas nominavi duis honestatis ancillae voluptatibus libero senectus.</p>
      </content-article>
    </content-section>
  </page-main>
  <page-footer class="blur"></page-footer>
</demo>

### Details

::: tip `<content-details />`
{{ manifest.for("content", "details").summary }}

[See more](./content/details)
:::

<demo static class="scale overview">
  <style>
    content-details::part(summary) {
      margin-left: 12px;
    }
    
    content-details::part(content) {
      transition: grid-template-rows 0.3s ease-in-out;
    }
  </style>
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
  <page-main>
    <content-hero slot="hero" class="blur"></content-hero>
    <content-section variant="grid">
      <content-article class="blur">
        <h4 slot="title">About</h4>
        <h5 slot="subtitle">Getting Started</h5>
        <p>Tamquam vitae curae dico dictas. Antiopam tempor hendrerit delicata maecenas repudiandae tractatos eripuit.</p>
      </content-article>
      <content-article variant="panel" class="blur">
        <h4>Tip</h4>
        <p>Open the console and inspect the demo to see the page and content component structures</p>
      </content-article>
      <content-details class="span focus rounded">
        <u slot="summary">See More</u>
        <content-section variant="grid">
          <content-article variant="panel">
            <h4>Focus on Your Content</h4>
            <p>Native web components allow you to create an elegant showcase for your portfolio of work using HTML</p>
          </content-article>
          <content-article>
            <h4 slot="title">Overview</h4>
            <h5 slot="subtitle">Installation and Usage</h5>
            <p>Libero curae luptatum intellegat evertitur elit.</p>
            <p>Interesset inciderint enim eam sale maluisset.</p>
          </content-article>
        </content-section>
      </content-details>
    </content-section>
  </page-main>
  <page-footer class="blur"></page-footer>
</demo>

### Carousel

::: tip `<content-carousel />`
{{ manifest.for("content", "carousel").summary }}

[See more](./content/carousel)
:::

<demo static class="scale overview">
  <style>
    .focus:before {
      z-index: 1;
    }
    
    content-article {
      --container-outlineColor: var(--vp-c-border);
    }
    
    content-carousel {
      margin: 8px;
      
      &::part(container) {
        padding: 16px 8px 0;
      }
    }
  </style>
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
  <page-main>
    <content-hero slot="hero" class="blur"></content-hero>
    <content-carousel class="focus rounded">
      <content-article variant="panel">
        <h4>About</h4>
        <p>Tamquam vitae curae dico dictas. Antiopam tempor hendrerit delicata maecenas repudiandae tractatos eripuit.</p>
      </content-article>
      <content-article variant="panel">
        <h4>Tip</h4>
        <p>Open the console and inspect the demo to see the page and content component structures</p>
      </content-article>
      <content-article variant="panel">
        <h4>Focus on Your Content</h4>
        <p>Native web components allow you to create an elegant showcase for your portfolio of work using HTML</p>
      </content-article>
    </content-carousel>
  </page-main>
  <page-footer class="blur"></page-footer>
</demo>

### Badge

::: tip `<content-badge />`
{{ manifest.for("content", "badge").summary }}

[See more](./content/badge)
:::

<demo static class="scale overview">
  <style>
    &:is(.content) {
      content-article {
        --header-borderColor: color-mix(in srgb, var(--vp-c-neutral) 40%, transparent);
      }
      
      content-technologies {
        --title-bgColor: color-mix(in srgb, var(--vp-c-text-1) 40%, transparent);
        --title-textColor: color-mix(in srgb, var(--vp-c-bg) 40%, transparent);
      }
    }
  </style>
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
  <page-main>
    <content-section variant="grid">
      <content-article variant="panel" class="blur">
        <h4 slot="title">Focus on Your Content</h4>
        <content-languages slot="tags">
          <li title="HTML" value="50">HTML</li>
          <li title="CSS" value="40">CSS</li>
          <li title="JS" value="10">JavaScript</li>
        </content-languages>
        <p>Native web components allow you to create an elegant showcase for your portfolio of work using HTML</p>
      </content-article>
      <content-article>
        <h4 slot="title" class="blur">Overview</h4>
        <h5 slot="subtitle" class="blur">Installation and Usage</h5>
        <content-technologies slot="tags" variant="tile">
          <content-badge color="teal" class="focus rounded">Lit</content-badge>
          <content-badge color="red" class="focus rounded">HTML</content-badge>
          <content-badge color="purple" class="focus rounded">CSS</content-badge>
        </content-technologies>
        <p class="blur">Libero curae luptatum intellegat evertitur elit. Interesset inciderint enim eam sale maluisset. Graece regione urbanitas nominavi duis honestatis ancillae voluptatibus libero senectus.</p>
      </content-article>
    </content-section>
  </page-main>
  <page-footer class="blur"></page-footer>
</demo>

### Languages

::: tip `<content-languages />`
{{ manifest.for("content", "languages").summary }}

[See more](./content/languages)
:::

<demo static class="scale overview">
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
  <page-main>
    <content-section variant="grid">
      <content-article variant="panel">
        <h4 slot="title" class="blur">Focus on Your Content</h4>
        <content-languages slot="tags" class="focus">
          <li title="HTML" value="50">HTML</li>
          <li title="CSS" value="40">CSS</li>
          <li title="JS" value="10">JavaScript</li>
        </content-languages>
        <p class="blur">Native web components allow you to create an elegant showcase for your portfolio of work using HTML</p>
      </content-article>
      <content-article class="blur">
        <h4 slot="title">Overview</h4>
        <h5 slot="subtitle">Installation and Usage</h5>
        <content-technologies slot="tags" variant="tile">
          <content-badge color="teal">Lit</content-badge>
          <content-badge color="red">HTML</content-badge>
          <content-badge color="purple">CSS</content-badge>
        </content-technologies>
        <p>Libero curae luptatum intellegat evertitur elit. Interesset inciderint enim eam sale maluisset. Graece regione urbanitas nominavi duis honestatis ancillae voluptatibus libero senectus.</p>
      </content-article>
    </content-section>
  </page-main>
  <page-footer class="blur"></page-footer>
</demo>

### Technologies

::: tip `<content-technologies />`
{{ manifest.for("content", "technologies").summary }}

[See more](./content/technologies)
:::

<demo static class="scale overview">
  <style>
    &:is(.content) .focus:before {
      inset: -2px;
    }
  </style>
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
  <page-main>
    <content-section variant="grid">
      <content-article variant="panel" class="blur">
        <h4 slot="title">Focus on Your Content</h4>
        <content-languages slot="tags">
          <li title="HTML" value="50">HTML</li>
          <li title="CSS" value="40">CSS</li>
          <li title="JS" value="10">JavaScript</li>
        </content-languages>
        <p>Native web components allow you to create an elegant showcase for your portfolio of work using HTML</p>
      </content-article>
      <content-article>
        <h4 slot="title" class="blur">Overview</h4>
        <h5 slot="subtitle" class="blur">Installation and Usage</h5>
        <content-technologies slot="tags" variant="tile" class="focus rounded">
          <content-badge color="teal">Lit</content-badge>
          <content-badge color="red">HTML</content-badge>
          <content-badge color="purple">CSS</content-badge>
        </content-technologies>
        <p class="blur">Libero curae luptatum intellegat evertitur elit. Interesset inciderint enim eam sale maluisset. Graece regione urbanitas nominavi duis honestatis ancillae voluptatibus libero senectus.</p>
      </content-article>
    </content-section>
  </page-main>
  <page-footer class="blur"></page-footer>
</demo>