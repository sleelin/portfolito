import {LitElement, css, html} from "lit";
import {customElement} from "lit/decorators.js";

/**
 * ContentTechnologies element
 * @summary
 * Provides a scrollable list of technologies related to a specific job or project
 * @slot {<li>} - List of technologies related to the job or project
 * @csspart container - Responsive container element
 * @csspart list - Wrapper for technologies list items
 * @cssprop {color} [--color-foreground=#1D1D1D] - Foreground color of the technologies list items
 * @cssprop {color} [--color-background=#D5D5D5] - Background color of the technologies list items
 */
@customElement("content-technologies")
export class ContentTechnologies extends LitElement {
    render() {
        return html`
            <div part="container">
                <h6>Core Technologies:</h6>
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
            border: 1px solid var(--color-background, #d5d5d5);
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
            color: var(--color-foreground, #1d1d1d);
            background-color: var(--color-background, #d5d5d5);
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

            ::slotted(li) {
              white-space: nowrap;
              padding: 0 8px;
              font-size: 0.8125rem;
              margin: -1px 0;
              border: 1px solid var(--color-background, #d5d5d5);
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