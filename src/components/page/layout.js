import {LitElement, css, html} from "lit";
import {customElement} from "lit/decorators.js";

/**
 * PageLayout element
 * @slot - This element has a slot
 */
@customElement("page-layout")
export class PageLayout extends LitElement {
    render() {
        return html`
            <div class="container">
                <slot></slot>
            </div>
        `;
    }
    
    static get styles() {
        return css` 
          :host {
            width: 100%;
          }
          
          .container {
            position: relative;
          }
          
          ::slotted(main) {
            display: block;
          }
        `;
    }
}