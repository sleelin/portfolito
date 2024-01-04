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
                    <slot name="tags"></slot>
                    <div part="content">
                        <slot></slot>
                    </div>
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
            contain: paint;
            padding: 0;
            position: relative;
            
            @container (width < 500px) {
              margin-top: 16px;
              border-radius: 16px;
              box-shadow: rgba(0, 0, 0, 0.2) 0 2px 4px -1px, rgba(0, 0, 0, 0.14) 0 4px 5px 0px, rgba(0, 0, 0, 0.12) 0 1px 10px 0px;
            }
            
            ::slotted(p) {
              margin: 0;
            }
            
            [part=content] {
              display: grid;
              padding: 16px 8px;
              margin-bottom: 16px;
              
              @container (width < 500px) {
                padding: 16px;
                margin-bottom: 0;
              }
            }
            
            header {
              z-index: 998;
              padding: 8px 8px 4px;
              position: sticky;
              top: var(--header-min-height);
              background-color: var(--color-foreground);
              border-bottom: 1px solid var(--color-primary);
              display: grid;
              align-items: center;
              grid-template-columns: 1fr max-content;
              grid-template-areas:
                "title timestamp"
                "subtitle timestamp";
              
              ::slotted([slot=title]) {
                z-index: 999;
                grid-area: title;
              }
              
              ::slotted([slot=subtitle]) {
                z-index: 999;
                grid-area: subtitle;
              }
              
              ::slotted([slot=timestamp]) {
                z-index: 999;
                grid-area: timestamp;
                font-size: 1.1em;
              }
              
              @container (width < 500px) {
                margin-bottom: -1px;
                top: calc(var(--header-min-height) - 8px);
                padding-bottom: 8px;
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
          
          :host(.job:first-of-type) article {
            @container (width < 500px) {
              margin-top: 0;
            }
          }
        `;
    }
}