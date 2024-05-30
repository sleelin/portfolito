import {LitElement, css, html} from "lit";
import {customElement} from "lit/decorators.js";

/**
 * PageMain element
 * @summary
 * Provides a responsive container for the native HTML main element
 * @slot {*} - content to be wrapped in the HTML main element
 * @slot {*} hero - content to place above all other content
 * @csspart container - responsive container element
 * @csspart content - wrapper for main page content
 * @cssprop {color} [--color-background-maxi=inherit] - background color of the content part for large containers
 * @cssprop {color} [--color-background-mini=inherit] - background color of the content part for small containers
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
            container: page-main / inline-size;
            position: relative;
          }
          
          [part=content] {
            margin: 0 auto 32px;
            max-width: 976px;
            box-shadow: rgba(0, 0, 0, 0.2) 0 2px 4px -1px, rgba(0, 0, 0, 0.14) 0 4px 5px 0, rgba(0, 0, 0, 0.12) 0 1px 10px 0;
            contain: paint;
            border-bottom-left-radius: 16px;
            border-bottom-right-radius: 16px;
            background-color: var(--color-background-maxi, var(--color-foreground));
            
            @container page-main (width <= 976px) {
              border-bottom-left-radius: 0;
              border-bottom-right-radius: 0;
            }
            
            @container page-main (width < 532px) {
              background-color: var(--color-background-mini, var(--color-background));
            }
          }
        `;
    }
}