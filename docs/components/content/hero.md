<script setup>
import {inject} from "vue";
const element = inject("manifest").for("content", "hero");
</script>

# Hero Element

{{ element.summary }}

## Usage

### Basic Usage

<demo>
  <content-hero>
  </content-hero>
</demo>

## CSS Parts

<declaration :rows="element.cssParts" />

## CSS Variables

<declaration :rows="element.cssProperties" />

## Slots

<declaration :rows="element.slots" />