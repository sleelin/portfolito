<script setup>
import {inject} from "vue";
const element = inject("manifest").for("page", "nav");
</script>

<style scoped>
.demo {
  page-nav {
    --color-primary: var(--vp-c-neutral);
    --color-link-hover: var(--vp-button-brand-active-bg);
    --color-link-shadow: var(--vp-button-brand-hover-bg);
    
    &::part(container) {
      position: relative;
      width: 100%;
    }
  }
  
  &:is(.expanded, .resizable) {
    & :deep(.content) {
      box-shadow: 0 0 1px 0;
      border-radius: 2px;
    }
  }
  
  &.expanded {
    & :deep(.content) {
      height: 56px;
      display: grid;
    }
    
    page-nav {
      &::part(container) {
        container: unset;
      }
    }
  }

  &.resizable {
    & :deep(.content) {
      height: calc(64px + 180px);
      display: grid;
      grid-template-rows: 64px 1fr;
      container: demo-container / size;
      min-width: 256px;

      @media (max-width: 640px) {
        zoom: calc(1 / 1.5);
        line-height: 1.5;
      }
      
      @media (max-width: 480px) {
        zoom: 50%;
      }
    }
    
    page-nav {
      box-shadow: 0 0 3px;
      
      &::part(container) {
        position: absolute;
        height: 64px;
      }
      
      &::part(content) {
        top: 64px;
        width: calc(100% + 100px);
        left: -100px;
      }
      
      @container demo-container (width < 510px) {
        &::part(content) {
          --color-primary: var(--vp-c-white);
        }
        
        &::part(links) {
          margin-left: 100px;
        }
      }
      
      @container demo-container (width < 260px) {
        &::part(socials) {
          margin-left: 100px;
        }
      }
    }
  }
}
</style>

# Nav Element

{{ element.summary }}

## Usage

### Basic Usage

<demo class="expanded">
  <page-nav>
    <a href="#link1">Link 1</a>
    <a href="#link2">Link 2</a>
  </page-nav>
</demo>

### With Social Links

<demo class="expanded">
  <page-nav>
    <a href="#link1">Link 1</a>
    <a href="#link2">Link 2</a>
    <a slot="socials" href="https://www.linkedin.com">LinkedIn</a>
    <a slot="socials" href="https://github.com/sleelin/portfolito">GitHub</a>
  </page-nav>
</demo>

### Responsive Sizing

<demo class="resizable">
  <page-nav>
    <a href="#link1">Link 1</a>
    <a href="#link2">Link 2</a>
    <a slot="socials" href="https://github.com/sleelin/portfolito">GitHub</a>
  </page-nav>
</demo>

## CSS Parts

<declaration :rows="element.cssParts" />

## CSS Variables

<declaration :rows="element.cssProperties" />

## Slots

<declaration :rows="element.slots" />