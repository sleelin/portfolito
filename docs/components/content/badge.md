<script setup>
import {inject} from "vue";
const element = inject("manifest").for("content", "badge");
</script>

# Badge Element

{{ element.summary }}

## Usage

### Basic Usage

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

### Outline Variant

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