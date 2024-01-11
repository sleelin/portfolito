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
                <article part="article">
                    <header part="header">
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
          :host {
            --header-color-fg: inherit;
            --header-color-bg: #D5D5D5FF;
            --header-color-bg-maxi: var(--header-color-bg);
            --header-color-bg-mini: var(--header-color-bg);
            --header-color-ul: black;
            --content-color-fg: inherit;
            --content-color-bg: color-mix(in srgb, var(--content-color-fg), transparent 92%);
            --content-color-bg-maxi: var(--content-color-bg);
            --content-color-bg-mini: var(--content-color-bg);
          }
          
          [part=container] {
            display: grid;
            container-type: inline-size;
            
            :host(.bubble) & {
              height: 100%;
            }
          }
          
          article {
            padding: 16px;
            color: var(--content-color-fg);
            background-color: var(--content-color-bg);
            
            header ::slotted(:is(h4, h5)) {
              font-weight: normal;
            }
            
            ::slotted(:is(h4, h5)) {
              margin: 0;
            }
            
            ::slotted(h4) {
              line-height: 1.1;
              font-size: 1.1em;
            }
            
            ::slotted(p) {
              margin-bottom: 0;
            }
            
            :host(.bubble) & {
              box-sizing: border-box;
              border-radius: 8px;
              box-shadow: inset 0 0 0 200px var(--content-color-bg);
              backdrop-filter: blur(10px);
              
              header {
                margin-bottom: 8px;
                
                ::slotted(h5) {
                  font-size: 1em;
                }
                
                ::slotted(.status):before {
                  content: "";
                  display: inline-block;
                  width: 12px;
                  height: 12px;
                  border-radius: 50%;
                  margin-right: 4px;
                }
                
                ::slotted(.active):before {
                  background-color: green;
                }
                
                ::slotted(.inactive):before {
                  background-color: orange;
                }
                
                ::slotted(.obsolete):before {
                  background-color: red;
                }
              }
            }
            
            :host(.job) & {
              padding: 0;
              position: relative;
              contain: paint;
              background-color: var(--content-color-bg-maxi, var(--content-color-bg));
              
              ::slotted(p) {
                margin: 0;
              }
              
              ::slotted([slot=tags]) {
                margin-top: -1px;
              }
              
              @container (width < 500px) {
                margin-top: 16px;
                border-radius: 16px;
                background-color: var(--content-color-bg-mini, var(--content-color-bg));
                box-shadow: rgba(0, 0, 0, 0.2) 0 2px 4px -1px, rgba(0, 0, 0, 0.14) 0 4px 5px 0px, rgba(0, 0, 0, 0.12) 0 1px 10px 0px;
              
                ::slotted([slot=tags]) {
                  margin-top: 0;
                }
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
                top: var(--header-top-maxi, 0px);
                background-color: var(--header-color-bg-maxi, var(--header-color-bg));
                border-bottom: 1px solid var(--header-color-ul);
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
                  top: var(--header-top-mini, 0px);
                  background-color: var(--header-color-bg-mini, var(--header-color-bg));
                  margin-bottom: -1px;
                  padding-bottom: 8px;
                  grid-template-columns: 1fr;
                  grid-template-areas:
                    "timestamp"
                    "title"
                    "subtitle";
                
                  ::slotted([slot=timestamp]) {
                    font-size: 1.3em;
                    border-bottom: 1px solid var(--header-color-ul);
                    margin-bottom: 8px;
                  }
                }
              }
            }
            
            @container (width < 500px) {
              :host(.job:first-of-type) & {
                margin-top: 0;
              }
            }
          }
        `;
    }
}