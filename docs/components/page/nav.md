<script setup>
import {inject} from "vue";
const element = inject("manifest").for("page", "nav");
</script>

<style scoped>
.demo {
  page-nav {
    &::part(container) {
      position: relative;
      width: 100%;
    }
    
    .dark & {
      --color-primary: white;
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
        min-width: 152px;
      }
      
      @media (max-width: 480px) {
        height: calc(64px + 120px);
        min-width: 110px;
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
          --color-primary: white;
          
          .dark & {
            --color-primary: black;
          }
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
      
      @media (max-width: 640px) {
        transform-origin: top center;
        justify-self: center;
        width: 150%;
        scale: calc(1 / 1.5);
        
        @container demo-container (width >= 342px) {
          &::part(content) {
            --color-primary: black;
          }
          
          &::part(links) {
            margin-left: 0;
          }
        }
        
        @container demo-container (width >= 174px) {
          &::part(socials) {
            margin-left: 0;
          }
        }
      }
      
      @media (max-width: 480px) {
        width: 200%;
        scale: calc(1 / 2);
        
        @container demo-container (width > 255px) {
          &::part(content) {
            --color-primary: black;
          }
          
          &::part(links) {
            margin-left: 0;
          }
        }
        
        @container demo-container (width >= 130px) {
          &::part(socials) {
            margin-left: 0;
          }
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