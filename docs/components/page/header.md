<script setup>
import {inject} from "vue";
const element = inject("manifest").for("page", "header");
</script>

<style scoped>
.demo :deep(.content) {
  padding: 4px;
}

page-header {
  position: sticky;
  --color-header: var(--vp-c-white);

  .dark & {
    --color-header: var(--vp-c-bg-alt);
  }
}
</style>

# Header Element

{{ element.summary }}

## Usage

### Basic Header

The header component itself does not provide any content of its own, instead acting as a sticky, responsive container wrapping your supplied content.

<demo>
  <page-header>PortfoLitO</page-header>
  <template #snippet>
    <body>
      {{preview}}
      <page-main>
        <!-- Your Content -->
      </page-main>
    </body>
  </template>
</demo>

## CSS Variables

<declaration :rows="element.cssProperties" />

## Slots

<declaration :rows="element.slots" />