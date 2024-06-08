import {LitElement, css, html} from "lit";
import {customElement, property} from "lit/decorators.js";
import {choose} from "lit/directives/choose.js";

/**
 * ContentCarousel element
 * @summary
 * Provides a responsive container for feature articles
 * @slot {* | <li>} - Elements to place in the carousel
 * @csspart container - Overall responsive container element
 * @cssprop {color} [--list-color-border=#C2C2C4] - Border color of list items in the list variant
 */
@customElement("content-carousel")
export class ContentCarousel extends LitElement {
    /** Which layout to use for the details contents */
    @property({type: String, reflect: true})
    accessor variant;
    
    render() {
        return html`
            ${choose(this.variant, [
                ["list", () => html`
                    <ul part="container">
                        <slot></slot>
                    </ul>
                `]
            ], () => html`
                <section part="container">
                    <slot></slot>
                </section>
            `)}
            </section>
        `;
    }
    
    static get styles() {
        return css`
          :host {
            display: block;
            container: content-carousel / inline-size;
          }
          
          [part=container] {
            display: grid;
            gap: 32px;
            height: 100%;
            align-content: center;
            grid-auto-flow: column;
            box-sizing: border-box;
            overflow-x: scroll;
            overflow-y: hidden;
            
            @container content-carousel (width <= 1176px) {
              column-gap: 16px;
              align-content: center;
            }
            
            @container content-carousel (width <= 976px) {
              height: 100%;
              column-gap: 8px;
              grid-auto-columns: min(calc(100cqw - 32px), 352px);
              align-content: end;
            }
            
            :host([variant=list]) ul& {
              column-gap: 8px;
              grid-auto-columns: max-content;
              scrollbar-width: thin;
              padding: 8px;
              margin: 0;
              
              ::slotted(li) {
                display: flex;
                align-items: center;
                gap: 4px;
                margin: 4px 0;
                border: 1px solid var(--list-color-border, #c2c2c4);
                border-radius: 32px;
                padding: 4px 8px;
              }
            }
          }
          
          ::slotted([variant=panel]) {
            opacity: 0;
            max-width: 352px;
            animation: 1.5s lineUp ease-out forwards;
            animation-delay: calc(0.25s * var(--index));
          }
          
          @container (width <= 1176px) {
            ::slotted([variant=panel]) {
              align-self: stretch;
              display: grid;
            }
          }
          
          @container (width <= 976px) {
            ::slotted([variant=panel]) {
              margin-bottom: 16px;
            }
          }
          
          @container (width <= 425px) {
            ::slotted([variant=panel]) {
              font-size: 0.9em;
            }
          }
        `;
    }
}