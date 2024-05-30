<script setup>
import {inject} from "vue";
const element = inject("manifest").for("content", "details");
</script>

# Details Element

{{ element.summary }}

## Usage

## CSS Parts

<declaration :rows="element.cssParts" />

## Slots

<declaration :rows="element.slots" />

## Attributes

<declaration :rows="element.attributes" />