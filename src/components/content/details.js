import {LitElement, css, html} from "lit";
import {customElement, property} from "lit/decorators.js";
import {choose} from "lit/directives/choose.js";

/**
 * ContentDetails element
 * @summary
 * Provides a replacement to the native details element, which does not trigger animations on expansion
 * @slot {* | <li>} - Content to show when details is expanded
 * @slot {*} summary - Preview of content shown when details is expanded
 * @csspart container - Overall responsive container element
 * @csspart summary - Container element for summary slot, including toggle arrow
 * @csspart content - The actual content of the details element
 */
@customElement("content-details")
export class ContentDetails extends LitElement {
    /** Whether the details element is expanded */
    @property({type: Boolean, reflect: true})
    accessor open = false;
    
    /** Which layout to use for the details contents */
    @property({type: String, reflect: true})
    accessor variant;
    
    toggle() {
        this.open = !this.open;
    }
    
    render() {
        return html`
            <div part="container">
                <div part="summary" @click=${this.toggle}>
                    <slot name="summary">
                        <u>Details</u>
                    </slot>
                </div>
                ${choose(this.variant, [
                    ["list", () => html`
                        <ul part="content">
                            <slot></slot>
                        </ul>
                    `],
                    ["grid", () => html`
                        <content-section part="content" variant="grid">
                            <slot></slot>
                        </content-section>
                    `]
                ], () => html`
                    <div part="content">
                        <div>
                            <slot></slot>
                        </div>
                    </div>
                `)}
            </div>
        `;
    }
    
    static get styles() {
        return css`
          [part=container] {
            container-type: inline-size;
          }
          
          [part=summary] {
            display: grid;
            grid-template-columns: max-content 1fr;
            cursor: pointer;
            
            &:before {
              content: "";
              display: list-item;
              width: 0.625em;
              height: 1.5em;
              line-height: 1.5;
              font-size: 1em;
              margin-right: 6px;
              list-style: disclosure-closed inside;
              transform: rotate(0);
              transition: transform 0.3s ease-in-out;
            }
            
            :host([open]) &:before {
              transform: rotate(90deg);
            }
            
            ::slotted(*) {
              grid-column: 2;
            }
          }
          
          [part=content] {
            display: grid;
            grid-template-rows: 0fr;
            
            div& > div {
              max-height: 100%;
              overflow: hidden;
            }
            
            :host([open]) & {
              grid-template-rows: 1fr;
            }
            
            :host([variant=grid]) & {
              max-height: 0;
              
              &::part(container) {
                padding: 0;
              }
              
              ::slotted([variant=panel]) {
                opacity: 0;
                transform: translateY(20%);
              }
            }
            
            :host([open][variant=grid]) & {
              max-height: 100%;
              margin-top: 12px;
              
              ::slotted([variant=panel]) {
                opacity: 1;
                transform: translateY(0%);
                transition: transform 0.3s ease-out, opacity 0.5s ease-out;
                transition-delay: calc(0.125s * var(--index));
              }
            }
            
            :host([variant=list]) & {
              margin: 0;
              list-style-type: "- ";
              padding-left: 24px;
              max-height: 0;
              
              ::slotted(li) {
                opacity: 0;
                transform: translateX(-2%);
                padding-left: 6px;
              }
              
              @container (width <= 576px) {
                padding-left: 12px;
              
                ::slotted(li) {
                  padding-left: 4px;
                }
              }
            }
            
            :host([open][variant=list]) & {
              margin-top: 8px;
              max-height: 100%;
              
              ::slotted(li) {
                opacity: 1;
                transform: translateX(0%);
                transition: transform 0.3s ease-out, opacity 0.5s ease-out;
                transition-delay: 0.125s;
              }
            }
          }
          
          @media print {
            [part=summary] {
              display: flex;
              pointer-events: none;
              
              &:before {
                display: none;
              }
              
              &:after {
                content: ":";
              }
            }
            
            :host([variant=list]) [part=content] {
              max-height: 100%;
              padding-left: 8pt;
              
              ::slotted(li) {
                opacity: 1;
                transform: unset;
              }
            }
          }
        `;
    }
}