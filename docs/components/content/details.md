<script setup>
import {inject} from "vue";
const element = inject("manifest").for("content", "details");
</script>

# Details Element

{{ element.summary }}

<demo static class="scale overview">
  <style>
    content-details::part(summary) {
      margin-left: 12px;
    }
    
    content-details::part(content) {
      transition: grid-template-rows 0.3s ease-in-out;
    }
  </style>
  <page-header class="blur">
    <page-logo>
      <img src="/logo.svg" alt="PortfoLitO" />
      <h1 slot="headings">PortfoLitO</h1>
    </page-logo>
    <page-nav>
      <a>About</a>
      <a>Components</a>
      <a slot="socials" href="https://www.npmjs.com">NPM</a>
      <a slot="socials" href="https://github.com">GitHub</a>
    </page-nav>
  </page-header>
  <page-main>
    <content-hero slot="hero" class="blur"></content-hero>
    <content-section variant="grid">
      <content-article class="blur">
        <h4 slot="title">About</h4>
        <h5 slot="subtitle">Getting Started</h5>
        <p>Tamquam vitae curae dico dictas. Antiopam tempor hendrerit delicata maecenas repudiandae tractatos eripuit.</p>
      </content-article>
      <content-article variant="panel" class="blur">
        <h4>Tip</h4>
        <p>Open the console and inspect the demo to see the page and content component structures</p>
      </content-article>
      <content-details class="span focus rounded">
        <u slot="summary">See More</u>
        <content-section variant="grid">
          <content-article variant="panel">
            <h4>Focus on Your Content</h4>
            <p>Native web components allow you to create an elegant showcase for your portfolio of work using HTML</p>
          </content-article>
          <content-article>
            <h4 slot="title">Overview</h4>
            <h5 slot="subtitle">Installation and Usage</h5>
            <p>Libero curae luptatum intellegat evertitur elit.</p>
            <p>Interesset inciderint enim eam sale maluisset.</p>
          </content-article>
        </content-section>
      </content-details>
    </content-section>
  </page-main>
  <page-footer class="blur"></page-footer>
</demo>

## Usage

The `<content-details />` element is intended to behave the same as the native `<details />` element.
Its internal structure is similar to, albeit divergent from its native counterpart.

::: tip NOTE
Unlike other PortfoLitO elements, the `<content-details />` element does not wrap a native `<details />` element.
:::

The structural differences are to enable animation and layout shifts, which are not possible using the native element.
This can be seen with the rotating triangle when expanding or collapsing content in the example below.

<demo>
  <content-details>
    Something small enough to escape casual notice.
  </content-details>
</demo>

### With Summary

When not otherwise specified, the `<content-details />` element provides a default summary.
This can be overridden with your desired summary by setting the `slot` attribute of any child element to `summary`.

<demo>
  <content-details>
    <u slot="summary">System Requirements</u>
    <p>
      Requires a computer running an operating system. The computer must have some
      memory and ideally some kind of long-term storage. An input device as well
      as some form of output device is recommended.
    </p>
  </content-details>
</demo>

### With Animation

The primary purpose of the `<content-details />` element is to enable animations that are not possible with the native `<details />` element.

In the example below, a CSS transition has been set on the `grid-template-rows` property of the `content` part.
This transition is between values of `0fr` when closed, and `1fr` when open, providing animation and layout shifts for the content height.

<demo>
  <style>
    content-details::part(content) {
      transition: grid-template-rows 0.3s ease-in-out;
    }
  </style>
  <content-details>
    <u slot="summary">System Requirements</u>
    <p>
      Requires a computer running an operating system. The computer must have some
      memory and ideally some kind of long-term storage. An input device as well
      as some form of output device is recommended.
    </p>
  </content-details>
</demo>

### List Variant

For convenience, the details element can host list items by setting the `variant` attribute to `list`.
In this variant, the `content` part is rendered as a `<ul />` element, and list items are styled and animated on entry, as in the example below.

<demo>
  <content-details variant="list">
    <u slot="summary">Apollo Astronauts</u>
    <li>Neil Armstrong</li>
    <li>Alan Bean</li>
    <li>Peter Conrad</li>
    <li>Edgar Mitchell</li>
    <li>Alan Shepard</li>
  </content-details>
</demo>

### Grid Variant

Details content can also be arranged in a grid, by setting the `variant` attribute to `grid`.
In this variant, the `content` part is rendered as a [`<content-section />`](./section) element.

The example below leverages the grid layout, in combination with the [`<content-article />`](./article) element,
to animate entry of each article individually when the details element is expanded.

<demo>
  <style>
    content-article {
      background: #f6f6f7;
      border: 1px solid #e2e2e3;
      
      .dark & {
        background: #161618;
        border: 1px solid #2e2e32;
      }
    }
  </style>
  <content-details variant="grid">
    <u slot="summary">System Requirements</u>
    <content-article variant="panel">Requires a computer running an operating system.</content-article>
    <content-article variant="panel">The computer must have some memory.</content-article>
    <content-article variant="panel">Ideally also some kind of long-term storage.</content-article>
    <content-article variant="panel">An input device as well as some form of output device is recommended.</content-article>
  </content-details>
</demo>

## Attributes

<declaration :rows="element.attributes" />

## CSS Parts

<declaration :rows="element.cssParts" />

## Slots

<declaration :rows="element.slots" />