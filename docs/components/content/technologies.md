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
    <div>AWS</div>
    <div>GitHub</div>
    <div>Microsoft</div>
  </content-technologies>
</demo>

### List Variant

<demo>
  <content-technologies variant="list">
    <li>AWS</li>
    <li>GitHub</li>
    <li>Microsoft</li>
  </content-technologies>
</demo>

### Tile Variant

<demo>
  <content-technologies variant="tile">
    <content-badge>AWS</content-badge>
    <content-badge>GitHub</content-badge>
    <content-badge>Microsoft</content-badge>
  </content-technologies>
</demo>

## Attributes

<declaration :rows="element.attributes" />

## CSS Parts

<declaration :rows="element.cssParts" />

## CSS Variables

<declaration :rows="element.cssProperties" />

## Slots

<declaration :rows="element.slots" />