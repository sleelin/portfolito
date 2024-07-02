import {LitElement, css, html} from "lit";
import {customElement} from "lit/decorators.js";

/**
 * PageLogo element
 * @summary
 * Provides a responsive container for a logo image and top level page headings
 * @slot {<img>} - Image to use as the logo in a page header
 * @slot {<h1> | <h2>} headings - Page headings to place next to the logo image
 * @cssprop {color} [--color-background=inherit] - Background color of the logo image
 * @cssprop {color} [--color-foreground=transparent] - Foreground color of logo image to blend with background and border colors
 * @cssprop {color} [--color-border=transparent] - Border color of logo image, if any
 */
@customElement("page-logo")
export class PageLogo extends LitElement {
    #clickLogo() {
        window.scrollTo({behavior: "smooth", top: 0});
    }
    
    render() {
        return html`
            <div class="collapse">
                <div class="container">
                    <div class="logo" @click=${this.#clickLogo}>
                        <slot></slot>
                    </div>
                    <slot name="headings"></slot>
                </div>
            </div>
        `;
    }
    
    static get styles() {
        return css`
          :host {
            --color-background: inherit;
            --color-foreground: var(--color-background, transparent);
            --color-border: var(--color-background, transparent);
          }
          
          .collapse {
            position: sticky;
            top: 0;
            display: flex;
            column-gap: 8px;
          }
          
          .container {
            display: grid;
            align-items: center;
            grid-template-rows: repeat(2, max-content);
            grid-template-columns: 52px 1fr;
            min-height: 52px;
          }
          
          .logo {
            cursor: pointer;
            position: relative;
            grid-row-start: 1;
            grid-row-end: span 2;
            max-height: 48px;
            max-width: 100%;
            margin-top: 4px;
            margin-right: 12px;
            display: flex;
            align-items: center;
            
            &:before, &:after {
              content: "";
              display: block;
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              box-sizing: border-box;
            }
            
            &:before {
              background-image: radial-gradient(ellipse at center left, var(--color-foreground, transparent), var(--color-background, transparent));
            }
            
            :host(.animate) & {
              &:before, &:after {
                animation: spin 15s linear infinite;
              }
              
              &:after {
                animation-direction: reverse;
              }
            }
            
            :host(.round) & {
              &:before, &:after {
                border-radius: 32px;
              }
            }
            
            :host(.border) & {
              &:before {
                box-shadow: var(--color-border) 0 0 2px 0;
              }
              
              &:after {
                border: 1px solid transparent;
                background: linear-gradient(to right, white, white) padding-box, linear-gradient(to right, var(--color-border, transparent), var(--color-foreground, transparent)) border-box;
                mask-image: radial-gradient(circle, white, white), radial-gradient(circle, white, white);
                mask-clip: content-box, border-box;
                mask-composite: subtract;
              }
            }
          }
          
          ::slotted(img) {
            width: 100%;
            aspect-ratio: 1;
            max-height: 48px;
            z-index: 0;
            object-fit: contain;
          }
          
          ::slotted(h1), ::slotted(h2) {
            margin: 0;
            line-height: 1.2;
            white-space: nowrap;
            grid-column: 2;
          }
          
          ::slotted(h1) {
            font-size: 1.6em;
          }
          
          ::slotted(h1:last-child:only-of-type) {
            grid-row-end: span 2;
            align-self: end;
            line-height: 1.5;
          }
          
          ::slotted(h2) {
            font-size: 1.1em;
            font-weight: normal;
          }
          
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            
            50% {
              transform: rotate(180deg);
            }
            
            to {
              transform: rotate(360deg);
            }
          }
        `;
    }
}