import {LitElement, css, html} from "lit";
import {customElement, property} from "lit/decorators.js";
import {choose} from "lit/directives/choose.js";

/**
 * ContentDetails element
 * @summary
 * Provides a replacement to the native details element, which does not trigger transitions on expansion
 * @slot {* | <li>} - content to show when details is expanded
 * @slot {*} summary - preview of content shown when details is expanded
 * @csspart container - overall responsive container element
 * @csspart summary - container element for summary slot, including toggle arrow
 * @csspart content - the actual content of the details element
 */
@customElement("content-details")
export class ContentDetails extends LitElement {
    /** Whether the details element is expanded */
    @property({type: Boolean, reflect: true})
    accessor open = false;
    
    /** Which layout to use for the details contents */
    @property({type: String})
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
                    `]            
                ], () => html`
                    <content-section part="content" class="grid">
                        <slot></slot>
                    </content-section>
                `)}
            </div>
        `;
    }
    
    static get styles() {
        return css`
          [part=container] {
            container: content-details / inline-size;
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
            max-height: 0;
            visibility: hidden;
            
            :host([open]) & {
              visibility: visible;
              max-height: 100%;
              margin-top: 8px;
            }
            
            :host([variant=grid]) & {
              padding: 0;
              
              ::slotted(.bubble) {
                opacity: 0;
                transform: translateY(20%);
              }
              
              @container content-details (width <= 876px) {
                grid-template-columns: repeat(2, 1fr);
              }
              
              @container content-details (width <= 576px) {
                grid-template-columns: 1fr;
              }
            }
            
            :host([open][variant=grid]) & ::slotted(.bubble) {
              opacity: 1;
              transform: translateY(0%);
              transition: transform 0.3s ease-out, opacity 0.5s ease-out;
              transition-delay: calc(0.125s * var(--index));
            }
            
            :host([variant=list]) & {
              margin: 0;
              list-style-type: "- ";
              padding-left: 24px;
              
              ::slotted(li) {
                opacity: 0;
                transform: translateX(-2%);
                padding-left: 6px;
              }
              
              @container content-details (width <= 576px) {
                padding-left: 12px;
              
                ::slotted(li) {
                  padding-left: 4px;
                }
              }
            }
            
            :host([open][variant=list]) & {
              margin-top: 8px;
              
              ::slotted(li) {
                opacity: 1;
                transform: translateX(0%);
                transition: transform 0.3s ease-out, opacity 0.5s ease-out;
                transition-delay: 0.125s;
              }
            }
          }
        `;
    }
}