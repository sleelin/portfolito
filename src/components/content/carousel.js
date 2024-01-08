import {LitElement, css, html} from "lit";
import {customElement, queryAssignedElements} from "lit/decorators.js";

/**
 * ContentCarousel element
 * @slot - This element has a slot
 */
@customElement("content-carousel")
export class ContentCarousel extends LitElement {
    @queryAssignedElements({selector: ".bubble"})
    accessor #articles;
    
    firstUpdated(_) {
        for (let article of this.#articles) {
            article.style = `--index: ${this.#articles.indexOf(article)}`;
        }
    }
    
    render() {
        return html`
            <section part="container">
                <slot></slot>
            </section>
        `;
    }
    
    static get styles() {
        return css`
          section {
            display: grid;
            gap: 32px;
            height: 100%;
            
            @container (width <= 1176px) {
              grid-auto-flow: column;
              column-gap: 16px;
                
              ::slotted(.bubble), ::slotted(.bubble:first-of-type), ::slotted(.bubble:last-of-type) {
                align-self: stretch;
                margin-bottom: 16px;
                display: grid;
              }
            }
            
            @container (width <= 876px) {
              margin: 0 -16px;
              padding: 0 8px 0 16px;
              overflow: scroll;
              column-gap: 8px;
              grid-template-columns: repeat(3, min(100cqw, 352px));
            }
          }
          
          ::slotted(.bubble) {
            opacity: 0;
            max-width: 352px;
            animation: 1.5s lineUp ease-out forwards;
            animation-delay: calc(0.25s * var(--index));
          }
          
          ::slotted(.bubble:first-of-type) {
            align-self: end;
          }
          
          ::slotted(.bubble:last-of-type) {
            align-self: start;
          }
        `;
    }
}