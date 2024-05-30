import {LitElement, css, html} from "lit";
import {customElement, query, queryAssignedNodes} from "lit/decorators.js";

/**
 * ContentArticle element
 * @summary
 * Provides responsive layout and styling to the native HTML article element
 * @slot - contents of the article, not including titles or tags
 * @slot {<h4>} title - primary title of the article
 * @slot {<h5>} subtitle - secondary subtitle of the article
 * @slot {<div>} timestamp - any date/time associated with the article
 * @slot {<div>} tags - any category or grouping details relevant to the article
 * @csspart container - overall responsive container element
 * @csspart header - container element for title, subtitle, and timestamp slots
 * @csspart content - the actual content of the article
 * @cssprop {color} [--header-color-fg=inherit] - foreground color of the article header
 * @cssprop {color} [--header-color-bg=#D5D5D5] - background color of the article header
 * @cssprop {color} [--header-color-bg-maxi] - background color of the article header for large containers
 * @cssprop {color} [--header-color-bg-mini] - background color of the article header for small containers
 * @cssprop {color} [--header-color-ul=#000000] - bottom border (underline) color of the article header
 * @cssprop {color} [--content-color-fg=inherit] - foreground color of the article content
 * @cssprop {color} [--content-color-bg] - background color of the article content
 * @cssprop {color} [--content-color-bg-maxi] - background color of the article content for large containers
 * @cssprop {color} [--content-color-bg-mini] - background color of the article content for small containers
 */
@customElement("content-article")
export class ContentArticle extends LitElement {
    @query("header", true)
    accessor #header;
    
    @queryAssignedNodes({slot: "title"})
    accessor #title;
    
    constructor() {
        super();
        
        // Add index variable to bubble articles so their animations can be delayed
        if (this.classList.contains("bubble")) {
            const index = [...this.parentElement.querySelectorAll("content-article")].indexOf(this);
            this.setAttribute("style", `--index: ${index}`);
        }
    }
    
    #slotChange({currentTarget}) {
        // Reattach header with associated named slots...
        if (currentTarget.children.item(0) !== this.#header)
            currentTarget.prepend(this.#header);
        // ...then remove it if there's no title
        if (!this.#title.length)
            this.#header.remove();
    }
    
    render() {
        return html`
            <article part="container" @slotchange=${this.#slotChange}>
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
        `;
    }
    
    static get styles() {
        return css`
          :host {
            display: block;
            container: content-article / inline-size;
            --header-color-fg: inherit;
            --header-color-bg: #D5D5D5;
            --header-color-bg-maxi: var(--header-color-bg);
            --header-color-bg-mini: var(--header-color-bg);
            --header-color-ul: #000000;
            --content-color-fg: inherit;
            --content-color-bg: color-mix(in srgb, var(--content-color-fg), transparent 92%);
            --content-color-bg-maxi: var(--content-color-bg);
            --content-color-bg-mini: var(--content-color-bg);
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
              height: 100%;
              box-sizing: border-box;
              border-radius: 8px;
              box-shadow: inset 0 0 0 200px var(--content-color-bg);
              
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
              
              @container content-article (width < 500px) {
                margin-top: 16px;
                border-radius: 16px;
                background-color: var(--content-color-bg-mini, var(--content-color-bg));
                box-shadow: rgba(0, 0, 0, 0.2) 0 2px 4px -1px, rgba(0, 0, 0, 0.14) 0 4px 5px 0, rgba(0, 0, 0, 0.12) 0 1px 10px 0;
                
                ::slotted([slot=tags]) {
                  margin-top: 0;
                }
              }
              
              [part=content] {
                display: grid;
                padding: 16px 8px;
                margin-bottom: 16px;
                row-gap: 16px;
                
                @container content-article (width < 500px) {
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
                
                @container content-article (width < 500px) {
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
            
            @container content-article (width < 500px) {
              :host(.job:first-of-type) & {
                margin-top: 0;
              }
            }
          }
          
          @keyframes lineUp {
            0% {
              opacity: 0;
              transform: translateY(80%);
            }
            
            20% {
              opacity: 0;
            }
            
            50% {
              opacity: 1;
              transform: translateY(0%);
            }
            
            100% {
              opacity: 1;
              transform: translateY(0%);
            }
          }
        `;
    }
}