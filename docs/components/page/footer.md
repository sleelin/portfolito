<script setup>
import {inject} from "vue";
const element = inject("manifest").for("page", "footer");
</script>

# Footer Element

{{ element.summary }}

## Usage

### Basic Usage

<demo>
  <page-footer>
  </page-footer>
</demo>

## CSS Parts

<declaration :rows="element.cssParts" />

## CSS Variables

<declaration :rows="element.cssProperties" />

## Slots

<declaration :rows="element.slots" />