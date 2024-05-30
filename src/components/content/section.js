import {LitElement, css, html} from "lit";
import {customElement} from "lit/decorators.js";

/**
 * ContentSection element
 * @slot {*} - content of the section, typically article elements
 * @slot {*} title - element to show above content as section title
 * @csspart container - overall responsive container element
 * @csspart content - the actual content of the section element
 * @cssprop {color} [--color-heading=inherit] - color of the section heading
 */
@customElement("content-section")
export class ContentSection extends LitElement {
    render() {
        return html`
            <section part="container">
                <slot name="title"></slot>
                <div part="content">
                    <slot></slot>
                </div>
            </section>
        `;
    }
    
    static get styles() {
        return css`
          :host {
            display: block;
            container: content-section / inline-size;
            scroll-margin-top: 76px;
            padding: 16px;
          }
          
          :host(.grid) [part=content] {
            display: grid;
            gap: 16px;
            grid-template-columns: repeat(3, 1fr);
            
            ::slotted(.span) {
              grid-column: 1 / -1;
              margin-bottom: 0;
            }
            
            @container content-section (width <= 876px) {
              grid-template-columns: repeat(2, 1fr);
            }
            
            @container content-section (width <= 576px) {
              grid-template-columns: 1fr;
            }
          }
          
          ::slotted([slot=title]) {
            margin-top: 0;
            line-height: 1.2;
            font-size: 1.3em;
            font-weight: normal;
            text-transform: uppercase;
            display: flex;
            align-items: center;
            position: relative;
            color: var(--color-heading);
          }
          
          ::slotted([slot=title]):before {
            display: block;
            mask-repeat: no-repeat;
            width: 24px;
            height: 24px;
            margin-right: 8px;
            background-color: var(--color-heading);
          }
        `;
    }
}