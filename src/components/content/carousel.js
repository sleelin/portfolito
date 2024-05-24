import {LitElement, css, html} from "lit";
import {customElement} from "lit/decorators.js";

/**
 * ContentCarousel element
 * @summary
 * Provides a responsive container for feature articles
 * @slot - up to three elements to place in the carousel
 */
@customElement("content-carousel")
export class ContentCarousel extends LitElement {
    render() {
        return html`
            <content-section>
                <slot></slot>
            </content-section>
        `;
    }
    
    static get styles() {
        return css`
          :host {
            display: block;
            container: content-carousel / size;
            height: 100%;
            min-height: 180px;
          }
          
          content-section {
            display: contents;
            container: none;
            
            &::part(container) {
              display: grid;
              gap: 32px;
              height: 100%;
              align-content: center;
            }
            
            &::part(content) {
              display: contents;
            }
            
            @container content-carousel (width <= 1176px) and (height < 256px){
              &::part(container) {
                grid-auto-flow: column;
                column-gap: 16px;
              }
                  
              ::slotted(.bubble), ::slotted(.bubble:first-of-type), ::slotted(.bubble:last-of-type) {
                align-self: stretch;
                display: grid;
              }
            }
            
            @container content-carousel (width <= 946px) and (height < 256px) {
              &::part(container) {
                align-content: center;
              }
            }
            
            @container content-carousel (width <= 876px) and (height < 256px) {
              &::part(container) {
                margin: 0 -16px;
                height: 100%;
                padding: 0 8px 0 16px;
                overflow-x: scroll;
                overflow-y: hidden;
                column-gap: 8px;
                grid-template-columns: repeat(3, min(100cqw, 352px));
                align-content: stretch;
                box-sizing: border-box;
              }
              
              ::slotted(.bubble), ::slotted(.bubble:first-of-type), ::slotted(.bubble:last-of-type) {
                margin-bottom: 16px;
              }
            }
          
            @container content-carousel (width <= 425px) and (height < 256px) {
              ::slotted(.bubble) {
                font-size: 0.9em;
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