import {LitElement, css, html} from "lit";
import {customElement} from "lit/decorators.js";

/**
 * PageMain element
 * @slot - This element has a slot
 */
@customElement("page-main")
export class PageMain extends LitElement {
    render() {
        return html`
            <main part="container">
                <slot name="hero"></slot>
                <div part="content">
                    <slot></slot>
                </div>
            </main>
        `;
    }
    
    static get styles() {
        return css` 
          main {
            position: relative;
            container-type: inline-size;
          }
          
          [part=content] {
            margin: 0 auto 32px;
            max-width: 976px;
            box-shadow: rgba(0, 0, 0, 0.2) 0 2px 4px -1px, rgba(0, 0, 0, 0.14) 0 4px 5px 0px, rgba(0, 0, 0, 0.12) 0 1px 10px 0px;
            contain: paint;
            border-bottom-left-radius: 16px;
            border-bottom-right-radius: 16px;
            background-color: var(--color-foreground);
            
            @container (width <= 976px) {
              border-bottom-left-radius: 0;
              border-bottom-right-radius: 0;
            }
            
            @container (width < 532px) {
              background-color: var(--color-background);
            }
          }
        `;
    }
}