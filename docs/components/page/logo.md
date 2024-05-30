<script setup>
import {inject} from "vue";
const element = inject("manifest").for("page", "logo");
</script>

<style scoped>
.demo :deep(.content) {
  justify-self: center;
}
</style>

# Logo Element

{{ element.summary }}

## Usage

### Basic Logo

The logo element itself does not provide any content of its own, instead acting as a responsive container wrapping your supplied logo image.

<demo>
  <page-logo>
    <img src="/logo.svg" alt="PortfoLitO" />
  </page-logo>
  <template #source>
    <body>
      <page-header>
        {{preview}}
      </page-header>
      <page-main>
        <!-- Your Content -->
      </page-main>
    </body>
  </template>
</demo>

### With Headings

It also supports slotting first and second level native heading elements via the `headings` named slot, which will be positioned to the right of the logo image.

When only one first-level heading element is specified, it will be centered to the logo image.

<demo>
  <page-logo>
    <img src="/logo.svg" alt="PortfoLitO" />
    <h1 slot="headings">PortfoLitO</h1>
  </page-logo>
</demo>

When both a first-level heading element and second-level heading element are specified, they will be stacked.

<demo>
  <page-logo>
    <img src="/logo.svg" alt="PortfoLitO" />
    <h1 slot="headings">PortfoLitO</h1>
    <h2 slot="headings">Showcase your Portfolio of Work</h2>
  </page-logo>
</demo>

## CSS Variables

<declaration :rows="element.cssProperties" />

## Slots

<declaration :rows="element.slots" />