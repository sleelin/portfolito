import {LitElement, css, html} from "lit";
import {customElement} from "lit/decorators.js";

/**
 * ContentHero element
 * @slot - This element has a slot
 */
@customElement("content-hero")
export class ContentHero extends LitElement {
    render() {
        return html`
            <section part="container">
                <slot name="face"></slot>
                <slot></slot>
            </section>
        `;
    }
    
    static get styles() {
        return css`
          :host {
            display: block;
            scroll-margin-top: 86px;
            container: content-hero / inline-size;
          }
          
          section {
            overflow: hidden;
            border-bottom: 1px solid var(--color-foreground);
            background: rgb(2, 0, 36);
            background: linear-gradient(45deg, rgba(2, 0, 36, 1) 0%, rgba(100, 108, 255, 1) 80%, rgba(0, 212, 255, 1) 100%);
            height: 576px;
            display: grid;
            column-gap: 32px;
            align-items: center;
            grid-template-columns: 1fr 512px 1fr;
            grid-template-areas: "face text carousel";
            
            ::slotted(content-carousel) {
              min-width: 352px;
            }
            
            @container content-hero (width < 1400px) {
              grid-template-columns: min-content 1fr max-content;
              padding: 0 32px;
              
              ::slotted([slot=face]) {
                justify-self: start;
              }
            
              ::slotted(p) {
                padding: 0 32px;
                max-width: 452px;
                justify-self: center;
              }
            }
            
            @container content-hero (width <= 1280px) {
              ::slotted(.bubble) {
                justify-self: end;
              }
            }
            
            @container content-hero (width <= 1225px) {
              grid-template-columns: max-content 1fr max-content;
            }
            
            @container content-hero (width <= 1176px) {
              row-gap: 32px;
              grid-template-rows: min-content;
              grid-template-columns: repeat(3, 1fr);
              grid-template-areas:
                "face text text"
                "carousel carousel carousel";
            
              ::slotted([slot=face]) {
                align-self: end;
                justify-self: center;
              }
              
              ::slotted(content-carousel) {
                min-width: unset;
              }
              
              ::slotted(p) {
                max-width: 600px;
              }
            }
            
            @container content-hero (width <= 976px) {
              padding: 0 16px;
              column-gap: 16px;
              
              ::slotted(content-carousel) {
                align-self: stretch;
              }
            
              ::slotted(p) {
                max-width: 480px;
              }
            }
            
            @container content-hero (width <= 876px) {
              height: auto;
              grid-auto-flow: row;
              grid-template-rows: 1fr min-content;
              grid-template-columns: 1fr;
              grid-template-areas:
                "face"
                "text"
                "carousel";
            }
          
            @container content-hero (width <= 425px) {
              ::slotted(p) {
                padding: 0 4px;
              }
            }
          }
          
          ::slotted([slot=face]) {
            align-self: center;
            justify-self: end;
            min-height: 338px;
            grid-area: face;
          }
          
          ::slotted(h3) {
            display: none;
          }
          
          ::slotted(p) {
            padding: 0 48px;
            grid-area: text;
            text-align: center;
            color: white;
            animation: 1s lineUp ease-in-out;
            box-sizing: border-box;
          }
          
          ::slotted(content-carousel) {
            grid-area: carousel;
          }
        `;
    }
}