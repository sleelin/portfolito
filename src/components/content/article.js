import {LitElement, css, html} from "lit";
import {customElement, property, query, queryAssignedNodes} from "lit/decorators.js";

/**
 * ContentArticle element
 * @summary
 * Provides responsive layout and styling to the native HTML article element
 * @slot - Contents of the article, not including thumbnail, titles, or tags
 * @slot {<img>} thumb - Thumbnail image of the article
 * @slot {<h4>|*} title - Primary title of the article
 * @slot {<h5>|*} subtitle - Secondary subtitle of the article
 * @slot {<div>|*} timestamp - Any date/time associated with the article
 * @slot {<div>|*} tags - Any category or grouping details relevant to the article
 * @csspart container - Overall responsive container element
 * @csspart header - Container element for title, subtitle, and timestamp slots
 * @csspart content - The actual content of the article
 * @cssprop {color} [--container-outlineColor] - Outline color of the article container
 * @cssprop {length} [--header-stickyTop-lg=0px] - Sticky header top position for large containers
 * @cssprop {length} [--header-stickyTop-sm=0px] - Sticky header top position for small containers
 * @cssprop {color} [--header-textColor=inherit] - Foreground color of the article header
 * @cssprop {color} [--header-bgColor=#D5D5D5] - Background color of the article header
 * @cssprop {color} [--header-bgColor-lg=--header-bgColor] - Background color of the article header for large containers
 * @cssprop {color} [--header-bgColor-sm=--header-bgColor] - Background color of the article header for small containers
 * @cssprop {color} [--header-borderColor=#000000] - Bottom border (underline) color of the article header
 * @cssprop {color} [--content-textColor=inherit] - Foreground color of the article content
 * @cssprop {color} [--content-bgColor] - Background color of the article content
 * @cssprop {color} [--content-bgColor-lg=--content-bgColor] - Background color of the article content for large containers
 * @cssprop {color} [--content-bgColor-sm=--content-bgColor] - Background color of the article content for small containers
 */
@customElement("content-article")
export class ContentArticle extends LitElement {
    /** Which layout to use for the article container */
    @property({type: String, reflect: true})
    accessor variant;
    
    @query("header", true)
    accessor #header;
    
    @queryAssignedNodes({slot: "title"})
    accessor #title;
    
    @queryAssignedNodes({slot: "thumb"})
    accessor #thumb;
    
    #slotChange({currentTarget}) {
        // Reattach header with associated named slots...
        if (currentTarget.children.item(0) !== this.#header)
            currentTarget.prepend(this.#header);
        // Remove header if there's no title...
        if (!this.#title.length) this.#header.remove();
        // ...or add classes if it needs styling
        else {
            this.#header.classList.toggle("thumb", !!this.#thumb.length);
            this.#header.classList.toggle("stack", this.variant === "panel" && 1>[...this.querySelectorAll("[slot]")].indexOf(this.#title.at(0)))
        }
    }
    
    render() {
        // Add index variable to panel articles so their animations can be delayed
        if (this.variant === "panel") {
            const index = [...this.parentElement.querySelectorAll("content-article")].indexOf(this);
            this.setAttribute("style", `--index: ${index}`);
        }
        
        return html`
            <article part="container" @slotchange=${this.#slotChange}>
                <header part="header">
                    <slot name="thumb"></slot>
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
            --header-textColor: inherit;
            --header-bgColor: #D5D5D5;
            --header-bgColor-lg: var(--header-bgColor);
            --header-bgColor-sm: var(--header-bgColor);
            --header-borderColor: #000000;
            --content-textColor: inherit;
            --content-bgColor: color-mix(in srgb, var(--content-textColor), transparent 92%);
            --content-bgColor-lg: var(--content-bgColor);
            --content-bgColor-sm: var(--content-bgColor);
          }
          
          :host([variant=panel]) {
            border-radius: 8px;
          }
          
          article {
            padding: 16px;
            color: var(--content-textColor);
            background-color: var(--content-bgColor);
            
            header {
              border-bottom: 1px solid var(--header-borderColor);
              margin-bottom: 8px;
              
              ::slotted(:is(h4, h5)) {
                font-weight: normal;
                margin: 0;
              }
            }
            
            ::slotted(:is(h4, h5)) {
              margin: 0 0 16px;
            }
            
            ::slotted(h4) {
              line-height: 1.1;
              font-size: 1.1em;
            }
            
            ::slotted(p) {
              margin: 0;
            }
            
            :host([variant=panel]) & {
              padding: 0;
              height: 100%;
              box-sizing: border-box;
              border-radius: 8px;
              outline: 1px solid var(--container-outlineColor);
              
              &:not(:has(header)) {
                box-shadow: inset 0 0 0 200px var(--content-bgColor);
              }
              
              [part=content] {
                padding: 16px;
              }
              
              header {
                padding: 12px 16px;
                margin-bottom: 0;
                border-bottom: unset;
                border-start-start-radius: 8px;
                border-start-end-radius: 8px;
                color: var(--header-textColor);
                background-color: var(--header-bgColor);
                display: grid;
                grid-template-columns: [thumb] min-content [headings] 1fr;
                grid-template-rows: [thumb title] 1fr [subtitle] 1fr [timestamp] min-content [thumb];
                
                &.thumb {
                  column-gap: 8px;
                }
                
                &.stack {
                  grid-template-columns: [thumb headings] 1fr;
                  grid-template-rows: [title thumb] minmax(100px, 120px) [thumb] minmax(1.825cap, max-content) [title subtitle] max-content [subtitle];
                  
                  ::slotted([slot=thumb]) {
                    min-width: unset;
                    max-height: 100%;
                    pointer-events: none;
                    place-self: center;
                  }
                  
                  ::slotted([slot=title]) {
                    grid-row: thumb / title 2;
                  }
                  
                  ::slotted([slot=title].status) {
                    display: grid;
                    grid-auto-flow: column;
                    justify-content: start;
                    align-items: center;
                    grid-template-rows: 1.1em;
                  }
                }
                
                ::slotted([slot=thumb]) {
                  grid-column: thumb;
                  grid-row: thumb / thumb 2;
                  min-width: 52px;
                  max-width: 100%;
                  max-height: 52px;
                  object-fit: contain;
                }
                
                ::slotted([slot=title]) {
                  align-content: end;
                  grid-column: headings;
                  grid-row: title;
                }
                
                ::slotted([slot=subtitle]) {
                  grid-column: headings;
                  grid-row: subtitle;
                }
                
                ::slotted([slot=timestamp]) {
                  grid-column: headings;
                  grid-row: timestamp;
                }
                
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
            
            :host([variant=job]) & {
              padding: 0;
              position: relative;
              contain: layout;
              background-color: var(--content-bgColor-lg, var(--content-bgColor));
              
              ::slotted([slot=tags]) {
                margin-top: -1px;
              }
              
              @container content-article (width < 500px) {
                contain: paint;
                margin-bottom: 16px;
                border-radius: 16px;
                background-color: var(--content-bgColor-sm, var(--content-bgColor));
                outline: 1px solid var(--container-outlineColor);
                
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
                margin-bottom: 0;
                top: var(--header-stickyTop-lg, 0px);
                color: var(--header-textColor);
                background-color: var(--header-bgColor-lg, var(--header-bgColor));
                border-bottom: 1px solid var(--header-borderColor);
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
                  padding: 8px 12px 8px;
                  top: var(--header-stickyTop-sm, 0px);
                  background-color: var(--header-bgColor-sm, var(--header-bgColor));
                  margin-bottom: -1px;
                  grid-template-columns: 1fr;
                  grid-template-areas:
                    "timestamp"
                    "title"
                    "subtitle";
                  
                  ::slotted([slot=timestamp]) {
                    font-size: 1.3em;
                    border-bottom: 1px solid var(--header-borderColor);
                    margin-bottom: 8px;
                  }
                }
              }
            }
            
            :host([variant=job]:last-of-type) & {
              &, [part=content] {
                margin-bottom: 0;
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