<script setup>
import {inject} from "vue";
const element = inject("manifest").for("content", "languages");
</script>

# Languages Element

{{ element.summary }}

## Usage

### Basic Usage

<demo>
  <content-languages>
    <li title="JS" value="60">JavaScript</li>
    <li title="HTML" value="20">HTML</li>
    <li title="CSS" value="20">CSS</li>
  </content-languages>
</demo>

## CSS Parts

<declaration :rows="element.cssParts" />

## CSS Variables

<declaration :rows="element.cssProperties" />

## Slots

<declaration :rows="element.slots" />