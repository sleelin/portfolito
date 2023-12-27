import {LitElement, css, html} from "lit";
import {customElement} from "lit/decorators.js";

/**
 * PageHeader element
 * @slot - This element has a slot
 */
@customElement("page-header")
export class PageHeader extends LitElement {
    render() {
        return html`
            <header>
                <div class="container">
                    <slot />
                </div>
            </header>
        `;
    }
    
    static get styles() {
        return css`
          :host {
            display: contents;
          }

          header {
            display: grid;
            position: sticky;
            z-index: 100;
            top: -8px;
            background-color: var(--color-header);
            box-shadow: rgba(0, 0, 0, 0.2) 0 2px 4px -1px, rgba(0, 0, 0, 0.14) 0 4px 5px 0px, rgba(0, 0, 0, 0.12) 0 1px 10px 0px;
          }

          .container {
            padding: 8px 16px 16px;
            margin-top: 8px;
            display: grid;
            grid-auto-flow: column;
            grid-template-columns: 256px 1fr;
            justify-content: space-between;
          }
        `;
    }
}