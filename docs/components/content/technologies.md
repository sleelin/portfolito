<script setup>
import {inject} from "vue";
const element = inject("manifest").for("content", "technologies");
</script>

# Technologies Element

{{ element.summary }}

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

## Usage

<demo>
  <content-technologies>
    <div>AWS</div>
    <div>GitHub</div>
    <div>Microsoft</div>
  </content-technologies>
</demo>

### List Variant

<demo>
  <content-technologies variant="list">
    <li>AWS</li>
    <li>GitHub</li>
    <li>Microsoft</li>
  </content-technologies>
</demo>

### Tile Variant

<demo>
  <content-technologies variant="tile">
    <content-badge>AWS</content-badge>
    <content-badge>GitHub</content-badge>
    <content-badge>Microsoft</content-badge>
  </content-technologies>
</demo>

## Attributes

<declaration :rows="element.attributes" />

## CSS Parts

<declaration :rows="element.cssParts" />

## CSS Variables

<declaration :rows="element.cssProperties" />

## Slots

<declaration :rows="element.slots" />