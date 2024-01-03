import {LitElement, css, html} from "lit";
import {customElement, query, queryAssignedNodes} from "lit/decorators.js";

/**
 * ContentArticle element
 * @slot - This element has a slot
 */
@customElement("content-article")
export class ContentArticle extends LitElement {
    @query("header")
    accessor #header;
    
    @queryAssignedNodes({slot: "title"})
    accessor #title;
    
    firstUpdated(_) {
        if (!this.#title.length) this.#header.remove();
    }
    
    render() {
        return html`
            <div part="container">
                <article>
                    <header>
                        <slot name="title"></slot>
                        <slot name="subtitle"></slot>
                        <slot name="timestamp"></slot>
                    </header>
                    <slot></slot>
                </article>
            </div>
        `;
    }
    
    static get styles() {
        return css`
          [part=container] {
            display: grid;
            container-type: inline-size;
          }
          
          article {
            padding: 16px;
          }

          ::slotted(h4), ::slotted(h5) {
            margin: 0;
            font-weight: normal;
          }

          ::slotted(h4) {
            line-height: 1.1;
            font-size: 1.1em;
          }

          ::slotted(p) {
            margin-bottom: 0;
          }
          
          :host(.bubble) article {
            box-sizing: border-box;
            border-radius: 8px;
            box-shadow: inset 0 0 0 200px rgba(255,255,255,0.08);
            backdrop-filter: blur(10px);
            background: rgba(255,255,255,0.08);
          }
          
          :host(.bubble) ::slotted(h4) {
            font-weight: bold;
          }

          :host(.bubble) {
            opacity: 0;
            animation: 1.5s lineUp ease-out forwards;
          }

          :host(.bubble:nth-of-type(2)) {
            animation-delay: 0.25s;
          }

          :host(.bubble:nth-of-type(3)) {
            animation-delay: 0.5s;
          }
          
          :host(.job) article {
            @container (width < 944px) {
              padding: 16px 0;
            } 
            
            header {
              display: grid;
              align-items: center;
              grid-template-columns: 1fr max-content;
              grid-template-areas:
                "title timestamp"
                "subtitle timestamp";
              
              ::slotted([slot=title]) {
                grid-area: title;
              }
              
              ::slotted([slot=subtitle]) {
                grid-area: subtitle;
              }
              
              ::slotted([slot=timestamp]) {
                grid-area: timestamp;
                font-size: 1.1em;
              }
              
              @container (width < 500px) {
                grid-template-columns: 1fr;
                grid-template-areas:
                  "timestamp"
                  "title"
                  "subtitle";
                  
                ::slotted([slot=timestamp]) {
                  font-size: 1.3em;
                  border-bottom: 1px solid var(--color-primary);
                  margin-bottom: 8px;
                }
              }
            }
          }
        `;
    }
}