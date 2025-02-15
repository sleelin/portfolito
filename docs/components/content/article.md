<script setup>
import {inject} from "vue";
const element = inject("manifest").for("content", "article");
</script>

<style scoped>
q {
  display: block;
}

.demo {
  content-article {
    --header-borderColor: var(--vp-c-neutral);
  }
  
  &.panel {
    & :deep(.content) {
      display: flex;
      flex-wrap: wrap;
      margin: 0;
      padding: 16px;
      gap: 16px;
      background: radial-gradient(#324fff, #283198);
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
    
    content-article {
      --content-textColor: #fafafa;
      min-width: 250px;
      flex: 1;
    }
  }
  
  &.job {
    & :deep(.container) {
      height: 480px;
      overflow-y: scroll;
      box-shadow: 0 0 1px 0;
      border-radius: 2px;
      min-width: 400px;
      
      @media (max-width: 480px) {
        zoom: 50%;
        line-height: 1.5;
      }
    }
    
    content-article {
      --header-bgColor: var(--vp-c-divider);
      --container-outlineColor: var(--vp-c-divider);
    }
  }
}
</style>

# Article Element

{{ element.summary }}

<demo static class="scale overview">
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
      <content-article class="focus rounded">
        <h4 slot="title">About</h4>
        <h5 slot="subtitle">Getting Started</h5>
        <p>Tamquam vitae curae dico dictas. Antiopam tempor hendrerit delicata maecenas repudiandae tractatos eripuit.</p>
      </content-article>
      <content-article variant="panel" class="focus rounded">
        <h4>Tip</h4>
        <p>Open the console and inspect the demo to see the page and content component structures</p>
      </content-article>
      <content-article variant="panel" class="focus rounded">
        <h4 slot="title">Focus on Your Content</h4>
        <content-languages slot="tags">
          <li value="50">HTML</li>
          <li value="40">CSS</li>
          <li title="JavaScript" value="10">JS</li>
        </content-languages>
        <p>Native web components allow you to create an elegant showcase for your portfolio of work using HTML</p>
      </content-article>
      <content-article class="focus rounded">
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

The `<content-article />` element does not provide any content of its own.
Instead, it wraps supplied content with a native `<article />` element.

<demo>
  <content-article>
    <h3>Yoda Quotes</h3>
    <q>Good relations with the Wookiees, I have.</q>
    <q>Not if anything to say about it, I have.</q>
    <q>Use your feelings, Obi-Wan, and find him you will.</q>
  </content-article>
</demo>

### With Titles

It includes slots and styling for any article title, subtitle, and timestamp.

<demo>
  <content-article>
    <h4 slot="title">Yoda Quotes</h4>
    <h5 slot="subtitle">In No Particular Order</h5>
    <q>Good relations with the Wookiees, I have.</q>
    <q>Not if anything to say about it, I have.</q>
    <q>Use your feelings, Obi-Wan, and find him you will.</q>
  </content-article>
</demo>

### Panel Variant

Articles can also be styled as panels by setting the `variant` attribute to `panel`, which will style the article with rounded corners.

Additionally, it triggers automatic assignment of the `--index` CSS variable as a style to the element.
This is calculated using the article's position amongst any sibling articles within its parent element.
The value is used to delay entry animations in the [`<content-carousel />`](./carousel) and [`<content-details />`](./details) elements.

<demo class="panel">
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
  <template #source>
    <style>
      section {
        display: flex;
        flex-wrap: wrap;
        padding: 16px;
        gap: 16px;
        background: radial-gradient(#324fff, #283198);
      }
      content-article {
        --content-textColor: #fafafa;
        min-width: 200px;
        flex: 1;
      }
    </style>
    <section>
      {{preview}}
    </section>
  </template>
</demo>

### Résumé Variant

Articles can also be stylised for displaying your job history by setting the `variant` attribute to `job`.
As PortfoLitO is designed to showcase developer work experience, articles will look similar to how they would appear on a résumé document.  

When using the `job` variant, the article's `header` part will stick to the top of its scroll container,
meaning important details such as role, employer, and timeframe remain visible as the page is scrolled.

Additionally, in smaller containers (i.e. when the page is being viewed on a phone), articles will automatically
be styled to appear as distinct "bubbles", which can be seen by resizing the container in the example below.

<demo class="job resizable">
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
  <content-article variant="job">
    <h4 slot="title">Software Developer</h4>
    <h5 slot="subtitle">Corporation A</h5>
    <div slot="timestamp">2016 - 2019</div>
    <p>
      His detracto error verear tale maximus rhoncus convallis.
      Ceteros pertinacia verterem moderatius porttitor adversarium nostrum omittam utroque.
      Fabulas parturient ne facilisis pertinax dicit unum mentitum tractatos equidem.
      Eget graeco fabulas mentitum elaboraret assueverit montes purus meliore.
      Definitionem nobis oporteat aptent suscipiantur sapientem curae curae prodesset tortor.
    </p>
  </content-article>
  <content-article variant="job">
    <h4 slot="title">Junior Software Developer</h4>
    <h5 slot="subtitle">Corporation A</h5>
    <div slot="timestamp">2015 - 2016</div>
    <p>
      His detracto error verear tale maximus rhoncus convallis.
      Ceteros pertinacia verterem moderatius porttitor adversarium nostrum omittam utroque.
      Fabulas parturient ne facilisis pertinax dicit unum mentitum tractatos equidem.
      Eget graeco fabulas mentitum elaboraret assueverit montes purus meliore.
      Definitionem nobis oporteat aptent suscipiantur sapientem curae curae prodesset tortor.
    </p>
  </content-article>
</demo>

## Attributes

<declaration :rows="element.attributes" />

## CSS Parts

<declaration :rows="element.cssParts" />

## CSS Variables

<declaration :rows="element.cssProperties" />

## Slots

<declaration :rows="element.slots" />