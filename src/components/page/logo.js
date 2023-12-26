import {LitElement, css, html} from "lit";
import {customElement} from "lit/decorators.js";

/**
 * PageLogo element
 * @slot - This element has a slot
 */
@customElement("page-logo")
export class PageLogo extends LitElement {
    render() {
        return html`
            <div class="collapse">
                <div class="container">
                    <slot></slot>
                </div>
            </div>
        `;
    }
    
    static get styles() {
        return css`
          .collapse {
            position: sticky;
            top: 0;
          }
          
          .container {
            display: grid;
            grid-template-rows: repeat(2, max-content);
            grid-template-columns: max-content 1fr;
          }
          
          ::slotted(h1), ::slotted(h2) {
            margin: 0;
            line-height: 1.2;
          }
          
          ::slotted(h1) {
            font-size: 1.6em;
            grid-column: 1;
            grid-row: 1;
          }
          
          ::slotted(h2) {
            font-size: 1.1em;
            font-weight: normal;
            grid-column: 1;
            grid-row: 2;
          }
        `;
    }
}