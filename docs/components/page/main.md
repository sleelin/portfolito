<script setup>
import {inject} from "vue";
const element = inject("manifest").for("page", "main");
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
    
    content-hero {
      border: 2px solid transparent;
    }
  }
}
</style>

# Main Element

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
  <page-main class="focus">
    <content-hero slot="hero"></content-hero>
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
  <page-footer class="blur"></page-footer>
</demo>

## Usage

### Basic Usage

<demo>
  <page-main>
  </page-main>
</demo>

## CSS Parts

<declaration :rows="element.cssParts" />

## CSS Variables

<declaration :rows="element.cssProperties" />

## Slots

<declaration :rows="element.slots" />