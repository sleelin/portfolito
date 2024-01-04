import {LitElement, css, html} from "lit";
import {customElement} from "lit/decorators.js";

/**
 * ContentSection element
 * @slot - This element has a slot
 */
@customElement("content-section")
export class ContentSection extends LitElement {
    render() {
        return html`
            <section part="container">
                <slot></slot>
            </section>
        `;
    }
    
    static get styles() {
        return css`
          :host {
            display: block;
            scroll-margin-top: 76px;
            max-width: 976px;
            margin: 0 auto;
          }
          
          section {
            padding: 16px;
          }
          
          ::slotted(h3) {
            margin-top: 0;
            line-height: 1.1;
            font-size: 1.1em;
            font-weight: normal;
            text-transform: uppercase;
          }
        `;
    }
}