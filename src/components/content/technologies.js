import {LitElement, css, html} from "lit";
import {customElement, property} from "lit/decorators.js";
import {choose} from "lit/directives/choose.js";

/**
 * ContentTechnologies element
 * @summary
 * Provides a scrollable or wrapping list of technologies related to a specific job or project
 * @slot {<li>} - List of technologies related to the job or project
 * @slot {<span>} [title=Core Technologies] - Leading text to use in list title
 * @csspart container - Responsive container element
 * @csspart title - Leading heading title element
 * @csspart content - Wrapper element for technologies contents
 * @cssprop {color} [--container-textColor=#1D1D1D] - Text color of title and list items
 * @cssprop {color} [--container-borderColor=--container-textColor] - Border color of title and list items
 * @cssprop {color} [--container-bgColor=#FAFAFA] - Background color of title and list items
 * @cssprop {color} [--title-textColor=--container-bgColor] - Text color of the title heading element
 * @cssprop {color} [--title-bgColor=--container-textColor] - Background color of the title heading element
 * @cssprop {color} [--list-textColor=--container-textColor] - Text color of the technologies list items
 * @cssprop {color} [--list-borderColor=--container-borderColor] - Background color of the technologies list items
 */
@customElement("content-technologies")
export class ContentTechnologies extends LitElement {
    /** Which layout to use for the technologies contents */
    @property({type: String, reflect: true})
    accessor variant;
    
    render() {
        return html`
            <div part="container">
                <h6 part="title">
                    <slot name="title">Core Technologies</slot>
                </h6>
                ${choose(this.variant, [
                    ["list", () => html`
                        <ul part="content">
                            <slot></slot>
                        </ul>
                    `],
                    ["tile", () => html`
                        <div part="content">
                            <div>
                                <slot></slot>
                            </div>
                        </div>
                    `]
                ], () => html`
                    <div part="content" class="content">
                        <slot></slot>
                    </div>
                `)}
            </div>
        `;
    }
    
    static get styles() {
        return css`
          :host {
            display: flex;
          }
          
          [part=container] {
            display: grid;
            grid-template-columns: max-content 1fr;
            align-items: stretch;
            color: var(--container-textColor, inherit);
            background-color: var(--container-bgColor, transparent);
            
            :host([variant=list]) & {
              border: 1px solid var(--container-borderColor, var(--container-textColor, #1d1d1d));
              border-radius: 16px;
              border-start-start-radius: 0;
              border-end-start-radius: 0;
            }
          }
          
          [part=title] {
            margin: 0;
            font-weight: 500;
            display: grid;
            align-items: center;
            line-height: 1.5;
            padding: 0 8px;
            color: var(--title-textColor, var(--container-textColor, #1d1d1d));
            background-color: var(--title-bgColor, var(--container-bgColor, #fafafa));
            
            :host([variant=list]) & {
              color: var(--title-textColor, var(--container-bgColor, #fafafa));
              background-color: var(--title-bgColor, var(--container-textColor, #1d1d1d));
              border-start-end-radius: 16px;
              border-end-end-radius: 16px;
            }
            
            :host([variant=tile]) & {
              color: var(--title-textColor, var(--container-bgColor, #fafafa));
              background-color: var(--title-bgColor, var(--container-textColor, #1d1d1d));
              border-end-end-radius: 6px;
              align-items: start;
              padding-top: 8px;
            }
          }
          
          [part=content] {
            display: flex;
            
            &.content {
              line-height: 1.5;
              gap: 4px;
              font-size: 0.67em;
            }
            
            :host([variant=list]) &:is(ul) {
              margin: 0;
              display: grid;
              grid-auto-flow: column;
              justify-content: start;
              list-style-type: none;
              padding-inline-start: 0;
              overflow-y: hidden;
              scrollbar-width: thin;
              
              ::slotted(li) {
                white-space: nowrap;
                padding: 0 8px;
                font-size: 0.8125rem;
                margin: -1px 0;
                color: var(--list-textColor, var(--container-textColor, #1d1d1d));
                border: 1px solid var(--list-borderColor, var(--container-borderColor, var(--container-textColor, #1d1d1d)));
                border-left-width: 0;
                border-top-right-radius: 16px;
                border-bottom-right-radius: 16px;
              }
              
              ::slotted(li:last-child) {
                margin: 0;
                border-width: 0;
              }
            }
            
            :host([variant=tile]) & {
              & > div {
                padding: 4px 6px 0;
                display: flex;
                column-gap: 4px;
                flex-wrap: wrap;
              }
              
              ::slotted(content-badge) {
                margin: 2px 0;
              }
            }
          }
        `;
    }
}