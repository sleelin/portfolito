<script setup>
import {inject} from "vue";
const element = inject("manifest").for("content", "languages");
</script>

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

## Usage

<demo>
  <content-languages>
    <li title="JS" value="60">JavaScript</li>
    <li title="HTML" value="20">HTML</li>
    <li title="CSS" value="20">CSS</li>
  </content-languages>
</demo>

## CSS Parts

<declaration :rows="element.cssParts" />

## CSS Variables

<declaration :rows="element.cssProperties" />

## Slots

<declaration :rows="element.slots" />