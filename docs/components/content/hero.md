<script setup>
import {inject} from "vue";
const element = inject("manifest").for("content", "hero");
</script>

<style scoped>
.demo {
  content-hero {
    &::part(container) {
      height: 500px;
    }
    
    &::part(content) {
      text-align: left;
      max-width: 538px;
      padding: 0;
    }
  }
}
</style>

# Hero Element

{{ element.summary }}

## Usage

### Basic Usage

<demo class="scale">
  <content-hero>
    <img src="/logo.svg" alt="PortfoLitO" slot="image" />
    <h3>Showcase your Portfolio of Work</h3>
    <h4>A small library of Lit-based Web Components for Software Developers to build simple Portfolio of Work Pages</h4>
  </content-hero>
</demo>

## CSS Parts

<declaration :rows="element.cssParts" />

## CSS Variables

<declaration :rows="element.cssProperties" />

## Slots

<declaration :rows="element.slots" />