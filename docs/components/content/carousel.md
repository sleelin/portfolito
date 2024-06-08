<script setup>
import {inject} from "vue";
const element = inject("manifest").for("content", "carousel");
</script>

<style scoped>
.demo {
  article, [variant=panel] {
    border: 1px solid var(--vp-c-border);
    border-radius: 16px;
    padding: 0 16px;
    margin-bottom: 16px;
  }
  
  &.list {
    & :deep(.content) {
      margin: 0;
    }
    
    content-carousel {
      --list-color-border: var(--vp-c-border);
    }

    li {
      mask: unset;
      background-color: unset;
      width: auto;
      font-style: normal;
      font-size: 0.8em;
      
      &:before {
        display: block;
        content: "";
        width: 1em;
        height: 1em;
        mask: var(--icon) no-repeat;
        mask-size: 100% 100%;
        background-color: currentColor;
        color: inherit;
      }
    }
  }
}
</style>

# Carousel Element

{{ element.summary }}

## Usage

### Basic Usage

The `<content-carousel>` element wraps content in a horizontally scrolling container.

It is used internally by the [`<content-hero>`](./hero) element to display feature items,
but has been abstracted for use in other scenarios.

<demo>
  <content-carousel>
    <article>
      <h4>Feature A</h4>
      <p>
        Rhoncus perpetua atqui harum signiferumque mea reprimique prodesset et.
        Enim pulvinar senserit feugiat viris vim tale.
      </p>
    </article>
    <article>
      <h4>Feature B</h4>
      <p>
        Ferri repudiare sit potenti scripserit.
        Harum phasellus commune feugiat graecis sapien assueverit.
      </p>
    </article>
    <article>
      <h4>Feature C</h4>
      <p>
        His detracto error verear tale maximus rhoncus convallis.
        Ceteros pertinacia verterem moderatius porttitor adversarium nostrum omittam utroque.
      </p>
    </article>
  </content-carousel>
</demo>

### Scrolling List

It can also be used to show a scrolling list of chips by setting the `variant` attribute to `list`, as in the following example.

<demo class="list">
  <content-carousel variant="list">
    <li class="vpi-social-discord">Discord</li>
    <li class="vpi-social-facebook">Facebook</li>
    <li class="vpi-social-github">GitHub</li>
    <li class="vpi-social-instagram">Instagram</li>
    <li class="vpi-social-linkedin">LinkedIn</li>
    <li class="vpi-social-mastodon">Mastodon</li>
    <li class="vpi-social-npm">NPM</li>
    <li class="vpi-social-slack">Slack</li>
    <li class="vpi-social-twitter">Twitter</li>
    <li class="vpi-social-youtube">YouTube</li>
  </content-carousel>
</demo>

### With Animated Entry

When the `<content-carousel>` element is populated entirely with [`<content-article>`](./article#panel-variant) elements whose `variant` attribute is set to `panel`,
the entry of each article will be animated, entering one after the other in order, as in the example below.

<demo>
  <content-carousel>
    <content-article variant="panel">
      <h4>Feature A</h4>
      <p>
        Rhoncus perpetua atqui harum signiferumque mea reprimique prodesset et.
        Enim pulvinar senserit feugiat viris vim tale.
      </p>
    </content-article>
    <content-article variant="panel">
      <h4>Feature B</h4>
      <p>
        Ferri repudiare sit potenti scripserit.
        Harum phasellus commune feugiat graecis sapien assueverit.
      </p>
    </content-article>
    <content-article variant="panel">
      <h4>Feature C</h4>
      <p>
        His detracto error verear tale maximus rhoncus convallis.
        Ceteros pertinacia verterem moderatius porttitor adversarium nostrum omittam utroque.
      </p>
    </content-article>
  </content-carousel>
</demo>

## Attributes

<declaration :rows="element.attributes" />

## CSS Parts

<declaration :rows="element.cssParts" />

## CSS Variables

<declaration :rows="element.cssProperties" />

## Slots

<declaration :rows="element.slots" />