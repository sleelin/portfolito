<script setup>
import {inject} from "vue";
const element = inject("manifest").for("page", "main");
</script>

<style scoped>
.demo:not([static]) {
  &.resizable :deep(.container) {
    min-width: 280px;
    box-shadow: 0 0 1px 0;
    border-radius: 2px;
  }
  
  page-header {
    --header-bgColor: var(--vp-c-bg-elv);
  }
  
  page-main {
    --title-textColor: var(--vp-c-neutral);
    --container-fgColor: var(--vp-c-bg-elv);
    --container-bgColor: var(--vp-c-bg-alt);
    
    &::part(container) {
      padding-bottom: 32px;
    }
  }
  
  content-article {
    --header-bgColor: var(--vp-c-border);
    --header-borderColor: var(--vp-c-neutral);
    --container-outlineColor: var(--vp-c-divider);
  }
}
</style>

# Main Element

{{ element.summary }}

<demo static class="scale overview">
  <style>
    content-hero {
      border: 2px solid transparent;
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
  <page-main class="focus">
    <content-hero slot="hero"></content-hero>
    <content-section variant="grid">
      <content-article>
        <h4 slot="title">About</h4>
        <h5 slot="subtitle">Getting Started</h5>
        <p>Tamquam vitae curae dico dictas. Antiopam tempor hendrerit delicata maecenas repudiandae tractatos eripuit.</p>
      </content-article>
      <content-article variant="panel">
        <h4>Tip</h4>
        <p>Open the console and inspect the demo to see the page and content component structures</p>
      </content-article>
      <content-article variant="panel">
        <h4 slot="title">Focus on Your Content</h4>
        <content-languages slot="tags">
          <li value="50">HTML</li>
          <li value="40">CSS</li>
          <li title="JavaScript" value="10">JS</li>
        </content-languages>
        <p>Native web components allow you to create an elegant showcase for your portfolio of work using HTML</p>
      </content-article>
      <content-article>
        <h4 slot="title">Overview</h4>
        <h5 slot="subtitle">Installation and Usage</h5>
        <content-topics slot="tags" variant="tile">
          <content-badge color="teal">Lit</content-badge>
          <content-badge color="red">HTML</content-badge>
          <content-badge color="purple">CSS</content-badge>
        </content-topics>
        <p>Libero curae luptatum intellegat evertitur elit. Interesset inciderint enim eam sale maluisset. Graece regione urbanitas nominavi duis honestatis ancillae voluptatibus libero senectus.</p>
      </content-article>
    </content-section>
  </page-main>
  <page-footer class="blur"></page-footer>
</demo>

## Usage

The `<page-main />` element wraps the native HTML `<main />` element, and is intended to be a direct child of the `<body />` element of a page.
It acts as a responsive container for your supplied content, and does not provide any content of its own.

<demo class="scale resizable">
  <page-header>PortfoLitO</page-header>
  <page-main>
    <content-section>
      <h3 slot="title">Experience</h3>
      <content-article variant="job">
        <h4 slot="title">Senior Software Developer</h4>
        <h5 slot="subtitle">Corporation C</h5>
        <div slot="timestamp">2024 - Present</div>
        <p>
          Rhoncus perpetua atqui harum signiferumque mea reprimique prodesset et.
          Enim pulvinar senserit feugiat viris vim tale.
          Oratio feugiat graeco mea vim fabulas definiebas varius discere.
          Idque platonem gubergren noster interesset.
        </p>
      </content-article>
      <content-article variant="job">
        <h4 slot="title">Software Developer</h4>
        <h5 slot="subtitle">Corporation B</h5>
        <div slot="timestamp">2020 - 2024</div>
        <p>
          Gubergren ius mutat inceptos habitant habemus reque.
          Consectetur vidisse ubique dolores natum iusto rhoncus assueverit cursus fusce.
          Perpetua pellentesque ornatus imperdiet lacus vitae facilis deserunt.
          Curae ligula ridens dolorem discere. Verterem in maluisset quod quaestio convallis.
          Wisi convallis melius laudem veniam montes. Mi diam his augue quaerendum legere. 
          Liber vehicula moderatius veritus nunc.
        </p>
      </content-article>
    </content-section>
  </page-main>
  <template #snippet>
    <body>
      <page-header>PortfoLitO</page-header>
      <page-main>
        <!-- Your Content -->
      </page-main>
    </body>
  </template>
  <template #source>
    <body>
      {{preview}}
    </body>
  </template>
</demo>

## CSS Parts

<declaration :rows="element.cssParts" />

## CSS Variables

<declaration :rows="element.cssProperties" />

## Slots

<declaration :rows="element.slots" />