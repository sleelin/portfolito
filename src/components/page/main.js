import {LitElement, css, html} from "lit";
import {customElement} from "lit/decorators.js";

/**
 * PageMain element
 * @summary
 * Provides a responsive container for the native HTML main element
 * @slot {*} - Content to be wrapped in the HTML main element
 * @slot {*} hero - Content to place above all other content
 * @csspart container - Responsive container element
 * @csspart content - Wrapper for main page content
 * @cssprop {color} [--container-bgColor=inherit] - Background color of the outer container part
 * @cssprop {color} [--container-fgColor] - Background color of the inner content part
 * @cssprop {color} [--container-fgColor-sm] - Background color of the content part for small containers
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
          :host {
            background-color: var(--container-bgColor, inherit);
          }
          
          main {
            background-color: inherit;
            container-type: inline-size;
            position: relative;
          }
          
          [part=content] {
            margin: 0 auto 8px;
            max-width: 976px;
            box-shadow: rgba(0, 0, 0, 0.2) 0 2px 4px -1px, rgba(0, 0, 0, 0.14) 0 4px 5px 0, rgba(0, 0, 0, 0.12) 0 1px 10px 0;
            contain: paint;
            border-bottom-left-radius: 16px;
            border-bottom-right-radius: 16px;
            background-color: var(--container-fgColor);
            
            @container (width <= 976px) {
              border-bottom-left-radius: 0;
              border-bottom-right-radius: 0;
            }
            
            @container (width < 532px) {
              box-shadow: unset;
              background-color: var(--container-fgColor-sm, var(--container-fgColor));
            }
          }
        `;
    }
}