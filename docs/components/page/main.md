<script setup>
import {inject} from "vue";
const element = inject("manifest").for("page", "main");
</script>

# Main Element

{{ element.summary }}

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