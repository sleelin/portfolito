<script setup>
import {inject} from "vue";
const element = inject("manifest").for("page", "nav");
</script>

<style scoped>
.demo {
  page-nav {
    --container-textColor: var(--vp-c-neutral);
    --container-textColor-sm: var(--vp-c-white);
    --container-hoverColor: var(--vp-button-brand-active-bg);
    --link-shadowColor: var(--vp-button-brand-hover-bg);
    
    &::part(container) {
      position: relative;
      width: 100%;
    }
  }
  
  &:is(.expanded, .resizable) :deep(.container) {
    box-shadow: 0 0 1px 0;
    border-radius: 2px;
  }
  
  &.expanded {
    & :deep(.container) {
      height: 56px;
      display: grid;
    }
    
    page-nav::part(container) {
      container: unset;
    }
  }
  
  &.resizable {
    & :deep(.container) {
      min-width: 256px;
    }
    
    & :deep(.content) {
      height: calc(64px + 180px);
      display: grid;
      grid-template-rows: 64px 1fr;
      container: demo-container / size;
      
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

<demo static class="scale overview no-spacing">
  <page-header>
    <page-logo class="blur">
      <img src="/logo.svg" alt="PortfoLitO" />
      <h1 slot="headings">PortfoLitO</h1>
    </page-logo>
    <page-nav class="focus rounded">
      <a>About</a>
      <a>Components</a>
      <a slot="socials" href="https://www.npmjs.com">NPM</a>
      <a slot="socials" href="https://github.com">GitHub</a>
    </page-nav>
  </page-header>
  <page-main class="blur">
    <content-hero slot="hero"></content-hero>
  </page-main>
</demo>

## Usage

The `<page-nav />` element is intended to act as the page's primary navigation menu.
It does not provide any content of its own, instead wrapping supplied content with a native `<nav />` element, 
as well as responsive styling that rolls content behind a hamburger menu on smaller viewports.

<demo class="expanded">
  <page-nav>
    <a href="#link1">Link 1</a>
    <a href="#link2">Link 2</a>
  </page-nav>
  <template #source>
    <body>
      <page-header>
        {{preview}}
      </page-header>
      <page-main>
        <!-- Your Content -->
      </page-main>
    </body>
  </template>
</demo>

### With Social Links

It is common for a page's primary navigation menu to also include links to other sources of content,
such as social networks like LinkedIn, or hosted services like GitHub.
To facilitate this, the `<page-nav />` element provides a `socials` slot. 

<demo class="expanded">
  <page-nav>
    <a href="#link1">Link 1</a>
    <a href="#link2">Link 2</a>
    <a slot="socials" href="https://www.npmjs.com">NPM</a>
    <a slot="socials" href="https://www.linkedin.com">LinkedIn</a>
    <a slot="socials" href="https://www.twitter.com">Twitter</a>
    <a slot="socials" href="https://www.youtube.com">YouTube</a>
    <a slot="socials" href="https://github.com">GitHub</a>
  </page-nav>
</demo>

Links placed in the `socials` slot will be automatically transformed into logo images for the site they link to,
based on the contents of the `href` attribute of the link, and can be placed in any order.

#### BYO Socials

It's also possible to include your own icon for links to sources that aren't already handled.
This is done either by including an `<img />` element in the link, or with inline SVG markup.

Where the `<page-nav />` element detects an `<img />` element whose source is an SVG file,
it will attempt to fetch the SVG file for inline rendering, so that styling can be applied consistently across all icons.

<demo class="expanded">
  <page-nav>
    <a href="#link1">Link 1</a>
    <a href="#link2">Link 2</a>
    <a slot="socials" href="https://buymeacoffee.com/">
      <img src="/coffee.svg" alt="Buy Me a Coffee" />
    </a>
    <a slot="socials" href="https://buymeacoffee.com/" title="Buy Me a Coffee">
      <!--@include: ../../public/coffee.svg -->
    </a>
  </page-nav>
</demo>

### Responsive Sizing

For container widths typical of smaller viewports, the `<page-nav />` element will automatically fold behind a "hamburger menu".
This means that navigation links need only be specified once in a page's markup.

The appearance of the `<page-nav />` element and its contents for variable container widths is demonstrated in the example below.

<demo class="resizable">
  <page-nav>
    <a href="#link1">Link 1</a>
    <a href="#link2">Link 2</a>
    <a slot="socials" href="https://www.twitter.com">Twitter</a>
    <a slot="socials" href="https://www.npmjs.com">NPM</a>
    <a slot="socials" href="https://github.com/sleelin/portfolito">GitHub</a>
  </page-nav>
</demo>

## CSS Parts

<declaration :rows="element.cssParts" />

## CSS Variables

<declaration :rows="element.cssProperties" />

## Slots

<declaration :rows="element.slots" />