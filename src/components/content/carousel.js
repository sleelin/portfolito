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
          :host {
            display: block;
            container: content-carousel / size;
            height: 100%;
            min-height: 196px;
          }
          
          section {
            display: grid;
            gap: 32px;
            height: 100%;
            align-content: center;
            
            @container content-carousel (width <= 1176px) and (height < 256px){
              grid-auto-flow: column;
              column-gap: 16px;
                
              ::slotted(.bubble), ::slotted(.bubble:first-of-type), ::slotted(.bubble:last-of-type) {
                align-self: stretch;
                display: grid;
              }
            }
            
            @container content-carousel (width <= 946px) and (height < 256px) {
              align-content: start;
            }
            
            @container content-carousel (width <= 876px) and (height < 256px) {
              height: 100%;
              margin: 0 -16px;
              padding: 0 8px 0 16px;
              overflow: scroll;
              column-gap: 8px;
              grid-template-columns: repeat(3, min(100cqw, 352px));
              align-content: stretch;
              
              ::slotted(.bubble), ::slotted(.bubble:first-of-type), ::slotted(.bubble:last-of-type) {
                margin-bottom: 16px;
              }
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