import {LitElement, css, html} from "lit";
import {customElement, property} from "lit/decorators.js";

/**
 * ContentSection element
 * @summary
 * Provides responsive layout and styling to the native HTML section element
 * @slot {*} - Content of the section, typically article elements
 * @slot {*} title - Element to show above content as section title
 * @csspart container - Overall responsive container element
 * @csspart content - The actual content of the section element
 * @cssprop {color} [--title-textColor=#3C3C43] - Color of the section title
 * @cssprop {color} [--title-iconColor=--title-textColor] - Color of the section title's leading icon
 * @cssprop {display} [--title-iconDisplay=none] - Display property of the section title's leading icon
 * @cssprop {url(SVG)} [--title-iconMask] - Mask image of the section title's leading icon
 */
@customElement("content-section")
export class ContentSection extends LitElement {
    /** Which layout to use for the section content */
    @property({type: String, reflect: true})
    accessor variant;
    
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
            container-type: inline-size;
          }
          
          [part=container] {
            padding: 16px;
            
            @container (width <= 425px) {
              padding: 16px 8px;
              
              ::slotted([slot=title]) {
                justify-content: center;
              }
            }
          }
          
          :host([variant=grid]) [part=content] {
            display: grid;
            gap: 16px;
            grid-template-columns: repeat(3, 1fr);
            
            ::slotted(.span) {
              grid-column: 1 / -1;
              margin-bottom: 0;
            }
            
            @container (width <= 90ch) {
              grid-template-columns: repeat(2, 1fr);
            }
            
            @container (width <= 60ch) {
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
            color: var(--title-textColor, #3c3c43);
          }
          
          ::slotted([slot=title]):before {
            content: "";
            display: var(--title-iconDisplay, none);
            mask-image: var(--title-iconMask, unset);
            mask-repeat: no-repeat;
            mask-size: 24px 24px;
            width: 24px;
            height: 24px;
            margin-right: 8px;
            background-color: var(--title-iconColor, var(--title-textColor, #3c3c43));
          }
          
          @media print {
            [part=container] {
              padding: 0;
            }
            
            ::slotted([slot=title]) {
              margin-bottom: 12pt;
              justify-content: center;
            }
            
            ::slotted([slot=title]):before {
              -webkit-print-color-adjust: exact !important;
              color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
          }
        `;
    }
}