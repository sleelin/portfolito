import {LitElement, css, html} from "lit";
import {customElement} from "lit/decorators.js";

/**
 * PageHeader element
 * @summary
 * Provides a responsive container for the native HTML header element
 * @slot {*} - Contents of the page header
 * @cssprop {color} [--header-bgColor=inherit] - Background color of the header element
 */
@customElement("page-header")
export class PageHeader extends LitElement {
    render() {
        return html`
            <header>
                <div class="container">
                    <slot />
                </div>
            </header>
        `;
    }
    
    static get styles() {
        return css`
          :host {
            background-color: var(--header-bgColor, inherit);
          }
          
          header {
            container: header / inline-size;
            position: sticky;
            z-index: 100;
            top: -24px;
            width: 100%;
            background-color: inherit;
            box-shadow: rgba(0, 0, 0, 0.2) 0 2px 4px -1px, rgba(0, 0, 0, 0.14) 0 4px 5px 0, rgba(0, 0, 0, 0.12) 0 1px 10px 0;
            
            &::before, &::after {
              display: block;
              content: "";
            }
            
            &::before {
              padding: 8px 0;
            }
            
            &::after {
              padding: 8px 0;
            }
          }
          
          .container {
            padding: 0 16px 4px;
            display: grid;
            grid-auto-flow: column;
            grid-template-columns: 256px 1fr;
            justify-content: space-between;
            align-items: stretch;
            position: sticky;
            top: 4px;
          }
        `;
    }
}