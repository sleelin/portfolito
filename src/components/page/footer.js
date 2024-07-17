import {LitElement, css, html} from "lit";
import {customElement} from "lit/decorators.js";

/**
 * PageFooter element
 * @summary
 * Provides a responsive container for the native HTML footer element
 * @slot {*} - Contents of the page footer
 * @slot {<span>} [author] - Page author shown after copyright
 * @slot {<span>} [attribution] - Message and link to PortfoLitO
 * @csspart container - Native HTML footer element
 * @csspart copyright - Copyright year and page author container
 * @csspart content - Wrapper for other page footer content
 * @cssprop {color} [--footer-bgColor=transparent] - Background color of the footer element
 * @cssprop {color} [--footer-borderColor=transparent] - Top border color of the footer element
 * @cssprop {color} [--footer-borderColor-sm=--footer-borderColor] - Top border color of the footer element for small containers
 */
@customElement("page-footer")
export class PageFooter extends LitElement {
    render() {
        return html`
            <footer part="container">
                <div part="copyright">
                    <span>© ${new Date().getFullYear()}</span>
                    <slot name="author"></slot>
                </div>
                <div part="content">
                    <slot></slot>
                </div>
                <div part="attribution">
                    <slot name="attribution">
                        <span>Made with</span>
                        <span class="heart">&hearts;</span>
                        <span>using</span>
                        <a href="https://www.sleelin.io/portfolito" target="_blank">PortfoLitO</a>
                    </slot>
                </div>
            </footer>
        `;
    }
    
    static get styles() {
        return css`
          :host {
            container-type: inline-size;
            display: grid;
            grid-template-columns: minmax(auto, 976px);
            justify-content: center;
            
            @media print {
              display: none;
            }
          }
          
          footer {
            font-size: 0.8em;
            max-width: 976px;
            box-sizing: border-box;
            margin: 0 16px 32px;
            display: grid;
            grid-auto-flow: column;
            align-items: stretch;
            justify-content: space-between;
            white-space: nowrap;
            background-color: var(--footer-bgColor, transparent);
            border-top: 1px solid var(--footer-borderColor, transparent);
          
            @container (width <= 976px) {
              margin-bottom: 16px;
            }
            
            @container (width < 532px) {
              grid-auto-flow: row;
              padding: 8px 0 16px;
              margin: 0 16px;
              border-top-color: var(--footer-borderColor-sm, var(--footer-borderColor, transparent));
              justify-content: center;
              justify-items: center;
              
              [part=copyright] {
                grid-row: 3;
              }
            }
          
            @container (width <= 425px) {
              margin: 0 8px;
            }
          }
          
          ::slotted(a), a {
            color: inherit;
          }
          
          .heart, ::slotted(.heart) {
            color: #e25555;
          }
        `;
    }
}