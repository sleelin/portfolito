import {LitElement, css, html} from "lit";
import {customElement, property, queryAssignedElements} from "lit/decorators.js";

/**
 * ContentDetails element
 * @slot - This element has a slot
 */
@customElement("content-details")
export class ContentDetails extends LitElement {
    @property({type: Boolean, reflect: true})
    accessor open = false;
    
    @queryAssignedElements({selector: ".bubble"})
    accessor #content;
    
    firstUpdated(_) {
        for (let el of this.#content) {
            el.style = `--index: ${this.#content.indexOf(el)}`;
        }
    }
    
    toggle() {
        this.open = !this.open;
    }
    
    render() {
        return html`
            <div part="container">
                <div part="summary" @click=${this.toggle}>
                    <slot name="summary"></slot>
                </div>
                <div part="content">
                    <slot></slot>
                </div>
            </div>
        `;
    }
    
    static get styles() {
        return css`
          [part=container] {
            container-type: inline-size;
          }
          
          [part=summary] {
            display: grid;
            grid-template-columns: max-content 1fr;
            cursor: pointer;
            
            &:before {
              content: "";
              display: list-item;
              width: 0.625em;
              height: 1.5em;
              line-height: 1.5;
              font-size: 1em;
              margin-right: 6px;
              list-style: disclosure-closed inside;
              transform: rotate(0);
              transition: transform 0.3s ease-in-out;
            }
            
            :host([open]) &:before {
              transform: rotate(90deg);
            }
            
            ::slotted(*) {
              grid-column: 2;
            }
          }
          
          [part=content] {
            max-height: 0;
            visibility: hidden;
            
            :host([open]) & {
              visibility: visible;
              max-height: 100%;
              margin-top: 8px;
            }
            
            :host(.grid) & {
              display: grid;
              gap: 16px;
              grid-template-columns: repeat(3, 1fr);
              
              ::slotted(.bubble) {
                opacity: 0;
                transform: translateY(20%);
              }
            
              @container (width <= 876px) {
                grid-template-columns: repeat(2, 1fr);
              }
              
              @container (width <= 576px) {
                grid-template-columns: 1fr;
              }
            }
            
            :host([open].grid) & ::slotted(.bubble) {
              opacity: 1;
              transform: translateY(0%);
              transition: transform 0.3s ease-out, opacity 0.5s ease-out;
              transition-delay: calc(0.125s * var(--index));
            }
          }
        `;
    }
}