<script setup>
import {inject} from "vue";
const element = inject("manifest").for("content", "badge");
</script>

<style scoped>
.demo {
  &:not([static]) :deep(.content) {
    display: flex;
    column-gap: 4px;
  }
}
</style>

# Badge Element

{{ element.summary }}

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
          <li value="50">HTML</li>
          <li value="40">CSS</li>
          <li title="JavaScript" value="10">JS</li>
        </content-languages>
        <p>Native web components allow you to create an elegant showcase for your portfolio of work using HTML</p>
      </content-article>
      <content-article>
        <h4 slot="title" class="blur">Overview</h4>
        <h5 slot="subtitle" class="blur">Installation and Usage</h5>
        <content-topics slot="tags" variant="tile">
          <content-badge color="teal" class="focus rounded">Lit</content-badge>
          <content-badge color="red" class="focus rounded">HTML</content-badge>
          <content-badge color="purple" class="focus rounded">CSS</content-badge>
        </content-topics>
        <p class="blur">Libero curae luptatum intellegat evertitur elit. Interesset inciderint enim eam sale maluisset. Graece regione urbanitas nominavi duis honestatis ancillae voluptatibus libero senectus.</p>
      </content-article>
    </content-section>
  </page-main>
  <page-footer class="blur"></page-footer>
</demo>

## Usage

The `<content-badge />` element styles text content as a badge, or tile, setting the background color, text color, and border radius of the text.
The background and text color can be set via the `color` attribute.

<demo>
  <content-badge>Default</content-badge>
  <content-badge color="blue">Blue</content-badge>
  <content-badge color="green">Green</content-badge>
  <content-badge color="red">Red</content-badge>
  <content-badge color="orange">Orange</content-badge>
  <content-badge color="yellow">Yellow</content-badge>
  <content-badge color="cyan">Cyan</content-badge>
  <content-badge color="teal">Teal</content-badge>
  <content-badge color="purple">Purple</content-badge>
  <content-badge color="pink">Pink</content-badge>
  <content-badge color="grey">Grey</content-badge>
</demo>

### With Thumbnails

Thumbnail images can be added to badges using the `thumb` slot.

<demo>
  <content-badge>
    <span slot="thumb" class="vpi-social-discord"></span>
    <span>Discord</span>
  </content-badge>
  <content-badge color="blue">
    <span slot="thumb" class="vpi-social-facebook"></span>
    <span>Facebook</span>
  </content-badge>
  <content-badge color="red">
    <span slot="thumb" class="vpi-social-youtube"></span>
    <span>YouTube</span>
  </content-badge>
</demo>

### Outline Variant

Badges can also be given a stamp-like appearance by setting the `variant` attribute to `outline`.
This makes the background of the badge transparent. In place of the background, an outline is added.

<demo>
  <content-badge variant="outline">Default</content-badge>
  <content-badge variant="outline" color="blue">Blue</content-badge>
  <content-badge variant="outline" color="green">Green</content-badge>
  <content-badge variant="outline" color="red">Red</content-badge>
  <content-badge variant="outline" color="orange">Orange</content-badge>
  <content-badge variant="outline" color="yellow">Yellow</content-badge>
  <content-badge variant="outline" color="cyan">Cyan</content-badge>
  <content-badge variant="outline" color="teal">Teal</content-badge>
  <content-badge variant="outline" color="purple">Purple</content-badge>
  <content-badge variant="outline" color="pink">Pink</content-badge>
  <content-badge variant="outline" color="grey">Grey</content-badge>
</demo>

## Attributes

<declaration :rows="element.attributes" />

## CSS Parts

<declaration :rows="element.cssParts" />

## CSS Variables

<declaration :rows="element.cssProperties" />

## Slots

<declaration :rows="element.slots" />