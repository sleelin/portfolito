<script setup>
import {inject} from "vue";
const element = inject("manifest").for("page", "footer");
</script>

# Footer Element

{{ element.summary }}

## Usage

### Basic Usage

The `<page-footer>` element wraps the native HTML `<footer>` element, and is intended to be the last child of the `<body>` element of a page.
It automatically includes a copyright for the current year, and an attribution link to PortfoLitO. 

<demo>
  <page-footer>
    <a href="#top">Back To Top</a>
  </page-footer>
  <template #snippet>
    <body>
      <page-main>
        <!-- Your Content -->
      </page-main>
      {{preview}}
    </body>
  </template>
</demo>

#### With Author Name

An `author` slot is included such that the name of the copyright holder for a page can be displayed alongside the copyright year.

<demo>
  <page-footer>
    <span slot="author">Bob Loblaw</span>
  </page-footer>
</demo>

#### Without Attribution

Using the `attribution` slot, it's possible to replace the PortfoLitO attribution link with arbitrary content.

<demo>
  <page-footer>
    <a slot="attribution" href="#top">Back To Top</a>
  </page-footer>
</demo>

## CSS Parts

<declaration :rows="element.cssParts" />

## CSS Variables

<declaration :rows="element.cssProperties" />

## Slots

<declaration :rows="element.slots" />