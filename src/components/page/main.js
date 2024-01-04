import {LitElement, css, html} from "lit";
import {customElement} from "lit/decorators.js";

/**
 * PageMain element
 * @slot - This element has a slot
 */
@customElement("page-main")
export class PageMain extends LitElement {
    render() {
        return html`
            <main slot="container">
                <slot></slot>
            </main>
        `;
    }
    
    static get styles() {
        return css` 
          main {
            position: relative;
          }
          
          ::slotted(content-section:nth-of-type(odd)) {
            background-color: var(--color-foreground);
          }
          
          ::slotted(content-section:nth-of-type(even)) {
            //box-sizing: border-box;
            //border: 1px solid var(--color-foreground);
          }
        `;
    }
}