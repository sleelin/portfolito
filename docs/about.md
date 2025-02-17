<img alt="PortfoLitO" src="/logo-text.svg" width="512" />
<hr />

# About

PortfoLitO is a small library of Lit-based Web Components for Software Developers to build simple Portfolio of Work Pages.

##### Prerequisites

- [Node.js](https://nodejs.org/) version 18 or higher.
- [Lit](https://lit.dev/) version 3.1.x
- Any browser that supports [Web Components](https://www.webcomponents.org/) and [CSS @container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/@container)

## Installation

PortfoLitO can be installed alongside Lit using your preferred package manager

::: code-group
```shell [npm]
npm i lit@3.1 portfolito
```

```shell [yarn]
yarn add lit@3.1 portfolito
```

```shell [pnpm]
pnpm add lit@3.1 portfolito
```
:::

## Usage

Simply import the package anywhere in your source code, being sure to include your code in the page with a module script tag.

::: code-group
```js{1} [index.js]
import "portfolito";

// ...any other code!
```

```html{4} [index.html]
<html>
    <head>
        <title>My Portfolio of Work</title>
        <script type="module" src="index.js"></script>
        <!-- The Rest of Your Document Head -->
    </head>
    <body>
        <!-- Your Content! -->
    </body>
</html>
```
:::

That's all! Once imported, PortfoLitO will automatically register all of its Web Components, and the rest is handled by the browser itself.