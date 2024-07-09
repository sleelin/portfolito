import {LitElement, css, html} from "lit";
import {customElement} from "lit/decorators.js";

/**
 * ContentTechnologies element
 * @summary
 * Provides a scrollable list of technologies related to a specific job or project
 * @slot {<li>} - List of technologies related to the job or project
 * @slot {<span>} [title=Core Technologies:] - Leading text to use in list title
 * @csspart container - Responsive container element
 * @csspart title - Leading heading title element
 * @csspart list - Wrapper for technologies list items
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
    render() {
        return html`
            <div part="container">
                <h6 part="title">
                    <slot name="title">Core Technologies:</slot>
                </h6>
                <ul part="list">
                    <slot></slot>
                </ul>
            </div>
        `;
    }
    
    static get styles() {
        return css`
          :host {
            display: flex;
          }
          
          [part="container"] {
            display: grid;
            grid-template-columns: max-content 1fr;
            align-items: stretch;
            color: var(--container-textColor, inherit);
            border: 1px solid var(--container-borderColor, var(--container-textColor, #1d1d1d));
            background-color: var(--container-bgColor, #fafafa);
            border-radius: 16px;
            border-start-start-radius: 0;
            border-end-start-radius: 0;
          }
          
          h6 {
            margin: 0;
            font-weight: 500;
            padding: 0 8px;
            display: grid;
            align-items: center;
            color: var(--title-textColor, var(--container-bgColor, #fafafa));
            background-color: var(--title-bgColor, var(--container-textColor, #1d1d1d));
            border-start-end-radius: 16px;
            border-end-end-radius: 16px;
          }
          
          ul {
            margin: 0;
            display: grid;
            grid-auto-flow: column;
            justify-content: start;
            list-style-type: none;
            padding-inline-start: 0;
            overflow-x: scroll;
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
        `;
    }
}