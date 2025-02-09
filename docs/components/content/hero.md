<script setup>
import {inject} from "vue";
const element = inject("manifest").for("content", "hero");
</script>

<style scoped>
.demo {
  &[static] {
    height: min(max(50vw, 30vh), 360px);
  }
  
  content-hero {
    content-article {
      --content-textColor: white;
    }
    
    &::part(container) {
      height: 500px;
    }
    
    &::part(content) {
      text-align: left;
      max-width: 538px;
      padding: 0;
    }
  }
}
</style>

# Hero Element

{{ element.summary }}

<demo static class="scale content hero">
  <style>
    & {
      overflow: hidden !important;
    }
    
    page-main {
      --container-fgColor: var(--vp-c-bg-elv);
      --container-bgColor: transparent;
    }
    
    content-hero::part(container) {
      height: 500px;
    }
    
    content-article {
      grid-column: span 2;
      
      &[variant] {
        grid-column: span 1;
        --content-bgColor: var(--vp-c-gray-3);
        --container-outlineColor: var(--vp-c-border);
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

<demo class="scale">
  <content-hero>
    <img src="/logo.svg" alt="PortfoLitO" slot="image" />
    <h3>Showcase your Portfolio of Work</h3>
    <h4>A small library of Lit-based Web Components for Software Developers to build simple Portfolio of Work Pages</h4>
  </content-hero>
</demo>

### With Feature Articles

<demo class="scale">
  <content-hero slot="hero">
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