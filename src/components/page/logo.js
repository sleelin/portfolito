import {LitElement, css, html} from "lit";
import {customElement} from "lit/decorators.js";

/**
 * PageLogo element
 * @summary
 * Provides a responsive container for a logo image and top level page headings
 * @slot default - image to use as the logo in a page header
 * @slot headings - page headings to place next to the logo image
 */
@customElement("page-logo")
export class PageLogo extends LitElement {
    render() {
        return html`
            <div class="collapse">
                <div class="container">
                    <div class="logo">
                        <slot></slot>
                    </div>
                    <slot name="headings"></slot>
                </div>
            </div>
        `;
    }
    
    static get styles() {
        return css`
          .collapse {
            position: sticky;
            top: 0;
            display: flex;
            column-gap: 8px;
          }
          
          .container {
            display: grid;
            grid-template-rows: repeat(2, max-content);
            grid-template-columns: max-content 1fr;
            min-height: 52px;
          }
          
          .logo {
            grid-row-start: 1;
            grid-row-end: span 2;
            max-height: 48px;
            margin-top: 4px;
            display: flex;
            align-items: center;
          }
          
          ::slotted(img) {
            height: 100%;
            aspect-ratio: 1;
            max-height: 48px;
            margin-right: 12px;
            border-radius: 32px;
            background-color: grey;
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
          
          ::slotted(h2) {
            font-size: 1.1em;
            font-weight: normal;
          }
        `;
    }
}