<script setup>
import {inject} from "vue";
const element = inject("manifest").for("content", "technologies");
</script>

# Technologies Element

{{ element.summary }}

## Usage

### Basic Usage

<demo>
  <content-technologies>
    <li>AWS</li>
    <li>GitHub</li>
    <li>Microsoft</li>
  </content-technologies>
</demo>

## CSS Parts

<declaration :rows="element.cssParts" />

## CSS Variables

<declaration :rows="element.cssProperties" />

## Slots

<declaration :rows="element.slots" />