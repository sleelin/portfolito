<script setup>
import {inject} from "vue";
const element = inject("manifest").for("content", "languages");
</script>

<style scoped>
.demo {
  content-languages {
    --heading-textColor: var(--vp-c-text-1);
    --container-textColor: var(--vp-c-neutral);
    --container-bgColor: var(--vp-c-bg-elv);
  }
}
</style>

# Languages Element

{{ element.summary }}

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
          <li value="50">HTML</li>
          <li value="40">CSS</li>
          <li title="JavaScript" value="10">JS</li>
        </content-languages>
        <p class="blur">Native web components allow you to create an elegant showcase for your portfolio of work using HTML</p>
      </content-article>
      <content-article class="blur">
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

The `<content-languages />` element provides a stylised list and line graph of languages used in a project.
Languages are specified as `<li />` elements, with their text content used as the language name.

<demo>
  <content-languages>
    <li>C</li>
    <li>C++</li>
    <li>C#</li>
    <li>CSS</li>
    <li>Go</li>
    <li>HTML</li>
    <li>Java</li>
    <li title="JavaScript">JS</li>
    <li>PHP</li>
    <li>Python</li>
    <li>Rust</li>
    <li title="TypeScript">TS</li>
    <li>Shell</li>
  </content-languages>
</demo>

### With Other Languages

Support for styling other languages not covered by the `<content-languages />` element has also been included.
As in the example below, this is done by adding CSS variables for each other language being used.

<demo>
  <style>
    content-languages {
      --languageColor-swift: var(--languageColor-html);
      --languageColor-objective-c: var(--languageColor-ts);
    }
  </style>
  <content-languages>
    <li>Swift</li>
    <li value="30">Objective-C</li>
    <li value="6">Python</li>
    <li value="3">C++</li>
    <li value="1">Makefile</li>
  </content-languages>
</demo>

## CSS Parts

<declaration :rows="element.cssParts" />

## CSS Variables

<declaration :rows="element.cssProperties" />

## Slots

<declaration :rows="element.slots" />