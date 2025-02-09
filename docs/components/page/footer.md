<script setup>
import {inject} from "vue";
const element = inject("manifest").for("page", "footer");
</script>

# Footer Element

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

## Usage

The `<page-footer>` element wraps the native HTML `<footer>` element, and is intended to be the last child of the `<body>` element of a page.
It automatically includes a copyright for the current year, and an attribution link to PortfoLitO. 

<demo>
  <page-footer>
    <a href="#top">Back To Top</a>
  </page-footer>
  <template #snippet>
    <body>
      <page-main>
        <!-- Your Content -->
      </page-main>
      {{preview}}
    </body>
  </template>
</demo>

### With Author Name

An `author` slot is included such that the name of the copyright holder for a page can be displayed alongside the copyright year.

<demo>
  <page-footer>
    <span slot="author">Bob Loblaw</span>
  </page-footer>
</demo>

### Without Attribution

Using the `attribution` slot, it's possible to replace the PortfoLitO attribution link with arbitrary content.

<demo>
  <page-footer>
    <a slot="attribution" href="#top">Back To Top</a>
  </page-footer>
</demo>

## CSS Parts

<declaration :rows="element.cssParts" />

## CSS Variables

<declaration :rows="element.cssProperties" />

## Slots

<declaration :rows="element.slots" />