import {LitElement, css, html} from "lit";
import {customElement, state, queryAssignedElements} from "lit/decorators.js";
import {styleMap} from "lit/directives/style-map.js";

/**
 * ContentLanguages element
 * @summary
 * Provides a bar graph overview of programming languages with percentage for developer project listings
 * @slot {<li>} - language names and percent of overall code in project
 * @csspart container - responsive container element
 * @csspart heading - languages heading and icon container
 * @csspart list - wrapper for language names and color bubbles
 * @csspart line - wrapper for language percentage line graph
 * @cssprop {color} [--color-heading=#1A194F] - color of the languages heading and icon
 * @cssprop {color} [--color-foreground=#000000] - foreground color of text inside the languages element container
 * @cssprop {color} [--color-background=#F6F6F6] - background color of the languages element container
 * @cssprop {color} [--color-lang-js=#FFD700] - JavaScript line and bubble color
 * @cssprop {color} [--color-lang-ts=#4169E1] - TypeScript line and bubble color
 * @cssprop {color} [--color-lang-html=#FF4500] - HTML line and bubble color
 * @cssprop {color} [--color-lang-css=#663399] - CSS line and bubble color
 */
@customElement("content-languages")
export class ContentLanguages extends LitElement {
    @queryAssignedElements({selector: "li"})
    accessor #data;
    
    @state()
    accessor #languages;
    
    #parseLanguages() {
        this.#languages = this.#data?.map(({title, value, textContent}) => ({name: title, weight: Number(value), label: textContent}))
        this.requestUpdate();
    }
    
    render() {
        const list = html`${this.#languages?.map(({name, label}) => html`<div class=${name.toLowerCase()} title=${label}>${name}</div>`)}`;
        const line = html`${this.#languages?.map(({name, weight}) => html`<div class=${name.toLowerCase()} title="${weight}%"></div>`)}`;
        
        return html`
            <div part="container">
                <h6 part="heading">
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16"><path d="M240-400h480v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z"/></svg>
                    <span>Languages:</span>
                </h6>
                <div part="list">${list}</div>
                <div part="line" style=${styleMap({gridTemplateColumns: this.#languages?.map(({weight}) => (`${weight}%`)).join(" ")})}>
                    ${line}
                </div>
                <ul>
                    <slot @slotchange=${this.#parseLanguages}></slot>
                </ul>
            </div>
        `;
    }
    
    static get styles() {
        return css`
          :host {
            --color-heading: #1a194f;
            --color-foreground: #000000;
            --color-background: #f6f6f6;
            --color-lang-js: #ffd700;
            --color-lang-ts: #4169e1;
            --color-lang-html: #ff4500;
            --color-lang-css: #663399;
          }
          
          [part="container"] {
            container: content-languages / inline-size;
            color: var(--color-foreground);
            background-color: var(--color-background);
            padding: 8px 8px 12px;
            margin: 0 -16px;
            row-gap: 8px;
            align-items: center;
            justify-content: space-between;
            display: grid;
            grid-template-areas:
              "heading list"
              "line line";
          }
          
          ul {
            display: none;
          }
          
          h6 {
            grid-area: heading;
            padding-left: 4px;
            color: var(--color-heading);
            margin: 0 16px 0 0;
            font-weight: normal;
            font-size: 0.95em;
            display: grid;
            grid-auto-flow: column;
            column-gap: 4px;
            line-height: 1;
          
          @container content-languages (width < 284 px) {
            margin-right: 8px;
          }
            
            svg {
              fill: var(--color-heading);
            }
          }
          
          [part=list] {
            grid-area: list;
            padding-right: 8px;
            display: grid;
            grid-auto-flow: column;
            column-gap: 16px;
            justify-content: start;
          
          @container content-languages (width < 284 px) {
            column-gap: 8px;
          }
            
            div {
              display: grid;
              align-items: center;
              grid-template-columns: 12px 1fr;
              column-gap: 4px;
              font-size: 0.8em;
              line-height: 1;
              
              &:before {
                content: "";
                display: flex;
                width: 12px;
                height: 12px;
                border-radius: 50%;
                box-sizing: border-box;
                background-position: center;
                background-origin: border-box;
              }
              
              &.js:before {
                background-color: var(--color-lang-js);
              }
              
              &.ts:before {
                background-color: var(--color-lang-ts);
              }
              
              &.html:before {
                background-color: var(--color-lang-html);
              }
              
              &.css:before {
                background-color: var(--color-lang-css);
              }
            }
          }
          
          [part=line] {
            grid-area: line;
            display: grid;
            column-gap: 2px;
            height: 12px;
            border-radius: 16px;
            overflow: hidden;
            
            .js {
              background-color: var(--color-lang-js);
            }
            
            .ts {
              background-color: var(--color-lang-ts);
            }
            
            .html {
              background-color: var(--color-lang-html);
            }
            
            .css {
              background-color: var(--color-lang-css);
            }
          }
        `;
    }
}