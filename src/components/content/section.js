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
          }
          
          section {
            padding: 16px;
            
            :host(.grid) & {
              display: grid;
              gap: 16px;
              grid-template-columns: repeat(3, 1fr);
              
              ::slotted(h3) {
                grid-column: span 3;
              }
            }
          }
          
          ::slotted(h3) {
            margin-top: 0;
            line-height: 1.2;
            font-size: 1.3em;
            font-weight: normal;
            text-transform: uppercase;
            display: flex;
            align-items: center;
            position: relative;
            color: var(--color-heading);
          }
          
          ::slotted(h3):before {
            display: block;
            mask-repeat: no-repeat;
            width: 24px;
            height: 24px;
            margin-right: 8px;
            background-color: var(--color-heading);
          }
        `;
    }
}