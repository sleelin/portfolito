import {LitElement, css, html} from "lit";
import {customElement} from "lit/decorators.js";

/**
 * ContentCarousel element
 * @summary
 * Provides a responsive container for feature articles
 * @slot {*} - up to three elements to place in the carousel
 */
@customElement("content-carousel")
export class ContentCarousel extends LitElement {
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
            container: content-carousel / inline-size;
            height: 100%;
            min-height: 180px;
          }
          
          section {
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