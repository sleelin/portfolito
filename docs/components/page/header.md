<script setup>
import {inject} from "vue";
const element = inject("manifest").for("page", "header");
</script>

<style>
page-header {
  z-index: 0;
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

The header component itself does not provide any content of its own, instead acting as a sticky, responsive container wrapping your supplied content

<demo>
  <page-header>PortfoLitO</page-header>
</demo>