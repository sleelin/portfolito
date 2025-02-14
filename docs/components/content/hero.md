<script setup>
import {inject} from "vue";
const element = inject("manifest").for("content", "hero");
</script>

<style scoped>
.demo {
  content-hero {
    img {
      width: clamp(176px, 100%, 338px);
      height: clamp(176px, 100%, 338px);
    }
    
    content-article {
      --content-textColor: white;
    }
    
    &::part(content) {
      margin-block-start: 0;
      max-width: 538px;
      padding: 0;
    }
  }
  
  &.gradient content-hero {
    --container-textColor: var(--vp-c-neutral);
  }
}
</style>

# Hero Element

{{ element.summary }}

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

## Usage

The `<content-hero />` element does not provide any content of its own.
Instead, it wraps the leading content of a page in a full-width responsive container, and sets a gradient background for emphasis.

It is intended to be used in the `hero` slot of the [`<page-main />`](../page/main) element.

<demo class="scale">
  <content-hero>
    <img src="/logo.svg" alt="PortfoLitO" slot="image" />
    <h3>Showcase your Portfolio of Work</h3>
    <h4>A small library of Lit-based Web Components for Software Developers to build simple Portfolio of Work Pages</h4>
  </content-hero>
</demo>

### Background Gradient

The gradient background can be customised by overriding the CSS background property of the `container` part.

<demo class="scale gradient">
  <style>
    content-hero::part(container) {
      background: radial-gradient(circle closest-corner at 30% 50%, #3150fa 10%, light-dark(#f6f6f7, #202127) 100%);
    }
  </style>
  <content-hero>
    <img src="/logo.svg" alt="PortfoLitO" slot="image" />
    <h3>Showcase your Portfolio of Work</h3>
    <h4>A small library of Lit-based Web Components for Software Developers to build simple Portfolio of Work Pages</h4>
  </content-hero>
</demo>

### With Feature Articles

Feature article content can be added to the `<content-carousel />` included in the hero element using the `feature` slot.
This works best when using the `panel` variant of the [`<content-article />`](./article#panel-variant) element. 

<demo class="scale resizable">
  <content-hero>
    <img src="/logo.svg" alt="PortfoLitO" slot="image"/>
    <h3>Showcase your Portfolio of Work</h3>
    <h4>A small library of Lit-based Web Components for Software Developers to build simple Portfolio of Work Pages</h4>
    <content-article slot="feature" variant="panel">
      <h4>Feature A</h4>
      <p>Ut montes patrioque percipit adipisci fastidii pretium.</p>
    </content-article>
    <content-article slot="feature" variant="panel">
      <h4>Feature B</h4>
      <p>Gubergren dapibus est elitr consetetur euismod ceteros mnesarchum.</p>
    </content-article>
    <content-article slot="feature" variant="panel">
      <h4>Feature C</h4>
      <p>Nec laudem his vituperatoribus sea odio blandit natum possit pulvinar.</p>
    </content-article>
  </content-hero>
</demo>

## CSS Parts

<declaration :rows="element.cssParts" />

## CSS Variables

<declaration :rows="element.cssProperties" />

## Slots

<declaration :rows="element.slots" />