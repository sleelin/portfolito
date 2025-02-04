<script setup>
import {inject} from "vue";
const element = inject("manifest").for("page", "footer");
</script>

<style scoped>
.demo {
  &[static] {
    page-main {
      --container-fgColor: var(--vp-c-bg-elv);
      --container-bgColor: transparent;
    }
    
    content-article {
      --content-bgColor: var(--vp-c-gray-3);
      --container-outlineColor: var(--vp-c-border);
    }
    
    page-footer::part(container) {
      z-index: 1;
    }
  }
}
</style>

# Footer Element

{{ element.summary }}

<demo static class="scale">
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

## Usage

### Basic Usage

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

#### With Author Name

An `author` slot is included such that the name of the copyright holder for a page can be displayed alongside the copyright year.

<demo>
  <page-footer>
    <span slot="author">Bob Loblaw</span>
  </page-footer>
</demo>

#### Without Attribution

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