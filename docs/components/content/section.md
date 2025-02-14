<script setup>
import {inject} from "vue";
const element = inject("manifest").for("content", "section");
</script>

<style scoped>
.demo content-section {
  --title-textColor: var(--vp-c-text-1);
}
</style>

# Section Element

{{ element.summary }}

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
          <li value="50">HTML</li>
          <li value="40">CSS</li>
          <li title="JavaScript" value="10">JS</li>
        </content-languages>
        <p>Native web components allow you to create an elegant showcase for your portfolio of work using HTML</p>
      </content-article>
      <content-article>
        <h4 slot="title">Overview</h4>
        <h5 slot="subtitle">Installation and Usage</h5>
        <content-topics slot="tags" variant="tile">
          <content-badge color="teal">Lit</content-badge>
          <content-badge color="red">HTML</content-badge>
          <content-badge color="purple">CSS</content-badge>
        </content-topics>
        <p>Libero curae luptatum intellegat evertitur elit. Interesset inciderint enim eam sale maluisset. Graece regione urbanitas nominavi duis honestatis ancillae voluptatibus libero senectus.</p>
      </content-article>
    </content-section>
  </page-main>
  <page-footer class="blur"></page-footer>
</demo>

## Usage

The `<content-section />` element does not provide any content of its own.
Instead, it wraps supplied content with a native `<section />` element,
providing styling and a responsive container for section headings and content.

<demo>
  <content-section>
    <article>This is a <code>&lt;content-section&gt;</code> element without a title.</article>
  </content-section>
  <content-section>
    <h3 slot="title">With Title</h3>
    <article>This is a <code>&lt;content-section&gt;</code> element with a title.</article>
  </content-section>
</demo>

### With Title Icon

The `title` slot of the `<content-section />` element also provides support for adding a leading SVG icon.
This is achieved using a [CSS mask](https://developer.mozilla.org/en-US/docs/Web/CSS/mask),
meaning the icon can be colored alongside its associated title.

<demo>
  <style>
    content-section {
      --title-textColor: #3c3c43;
      --title-iconDisplay: block;
      --title-iconMask: url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8S14 8.67 14 9.5s.67 1.5 1.5 1.5m-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8S7 8.67 7 9.5S7.67 11 8.5 11m3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5'/%3E%3C/svg%3E");
      
      .dark & {
        --title-textColor: #fffff5db;
      }
    }
  </style>
  <content-section>
    <h3 slot="title">With Leading Icon</h3>
    <article>This is a <code>&lt;content-section&gt;</code> element with a title.</article>
    <article>The title includes a leading icon.</article>
  </content-section>
</demo>

### Grid Variant

Section content can also be arranged in a grid, by setting the `variant` attribute to `grid`.
In this variant, the `content` part is styled as a grid, with the number of columns being determined by the section's container width.

The example below leverages the grid layout, in combination with the [`<content-article />`](./article) element,
to demonstrate how this looks in practice.

<demo>
  <style>
    content-article {
      background: #f6f6f7;
      border: 1px solid #e2e2e3;

      .dark & {
        background: #161618;
        border: 1px solid #2e2e32;
      }
    }
  </style>
  <content-section variant="grid">
    <h3 slot="title">System Requirements</h3>
    <content-article variant="panel">Requires a computer running an operating system.</content-article>
    <content-article variant="panel">The computer must have some memory.</content-article>
    <content-article variant="panel">Ideally also some kind of long-term storage.</content-article>
    <content-article variant="panel">An input device as well as some form of output device is recommended.</content-article>
  </content-section>
</demo>

## Attributes

<declaration :rows="element.attributes" />

## CSS Parts

<declaration :rows="element.cssParts" />

## CSS Variables

<declaration :rows="element.cssProperties" />

## Slots

<declaration :rows="element.slots" />