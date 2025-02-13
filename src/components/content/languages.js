import {LitElement, css, html, unsafeCSS} from "lit";
import {customElement, property, query, queryAssignedElements, state} from "lit/decorators.js";
import {styleMap} from "lit/directives/style-map.js";

/**
 * ContentLanguages element
 * @summary
 * Provides a bar graph overview of programming languages with percentage for developer project listings
 * @slot {<li>} - Language names and percent of overall code in project
 * @csspart container - Responsive container element
 * @csspart heading - Languages heading and icon container
 * @csspart list - Wrapper for language names and color bubbles
 * @csspart line - Wrapper for language percentage line graph
 * @cssprop {color} [--heading-textColor] - Color of the languages heading and icon
 * @cssprop {color} [--container-textColor=inherit] - Foreground color of text inside the languages element container
 * @cssprop {color} [--container-bgColor=transparent] - Background color of the languages element container
 * @cssprop {color} [--languageColor-c=#555555] - C line and bubble color
 * @cssprop {color} [--languageColor-cpp=#F34B7D] - C++ line and bubble color
 * @cssprop {color} [--languageColor-csharp=#178600] - C# line and bubble color
 * @cssprop {color} [--languageColor-css=#663399] - CSS line and bubble color
 * @cssprop {color} [--languageColor-go=#00ADD8] - GoLang line and bubble color
 * @cssprop {color} [--languageColor-html=#FF4500] - HTML line and bubble color
 * @cssprop {color} [--languageColor-java=#B07219] - Java line and bubble color
 * @cssprop {color} [--languageColor-js=#FFD700] - JavaScript line and bubble color
 * @cssprop {color} [--languageColor-php=#4F5D95] - PHP line and bubble color
 * @cssprop {color} [--languageColor-python=#3572A5] - Python line and bubble color
 * @cssprop {color} [--languageColor-rust=#DEA584] - Rust line and bubble color
 * @cssprop {color} [--languageColor-shell=#89E051] - Shell script line and bubble color
 * @cssprop {color} [--languageColor-ts=#4169E1] - TypeScript line and bubble color
 * @cssprop {color} [--languageColor-unknown=#EDEDED] - Unknown language line and bubble color
 */
@customElement("content-languages")
export class ContentLanguages extends LitElement {
    @queryAssignedElements({selector: "li"})
    accessor #data;
    
    @state()
    accessor #languages = [];
    
    @query("[part=content]")
    accessor #content;
    
    /** Whether the languages element is interactive */
    @property({type: Boolean, reflect: true})
    accessor interactive = false;
    
    // Languages that are already styled by this component
    static #knownLanguages = ["c", "cpp", "csharp", "css", "go", "html", "java", "js", "php", "python", "rust", "shell", "ts"];
    
    #parseLanguages() {
        const weighted = this.#data?.filter(({value}) => value);
        const remainder = 100 - weighted.reduce((res, {value}) => res + Number(value), 0);
        const autoweight = (remainder / (this.#data?.length - weighted.length));
        
        this.#languages = this.#data?.map(({title, value, textContent}) =>
            ({name: textContent.toLowerCase().replace(/^c\+\+$/, "cpp").replace(/^c#$/, "csharp"), title, weight: value ? Number(value) : autoweight, label: textContent}));
        
        this.requestUpdate();
    }
    
    #focusLanguage({currentTarget}) {
        if (this.interactive) {
            const focus = !currentTarget.classList.contains("focus")
            for (let t of this.#content.querySelectorAll(".focus")) t.classList.remove("focus");
            for (let t of this.#content.querySelectorAll(`.${currentTarget.classList.value}`)) t.classList.toggle("focus", focus);
            
            if (focus) {
                const list = this.#content.querySelector("[part=list]");
                const focused = this.#content.querySelector("[part=list] .focus .name").getBoundingClientRect();
                const left = focused.left - list.getBoundingClientRect().left - 12;
                
                list.scrollTo({left, behavior: "smooth"});
            }
        }
    }
    
    render() {
        // Build list and line contents
        const line = html`${this.#languages?.map(({name, weight}) => html`<div key=${name} class=${name} title="${Math.floor(weight)}%" @click=${this.#focusLanguage}></div>`)}`;
        const list = html`${this.#languages?.map(({name, title, label, weight}, index) => html`<div key=${name} class=${name} title=${title} style="--index: ${index}" @click=${this.#focusLanguage}><span class="name">${label}</span></div>`)}`;
        
        // Add styling for unknown languages
        const style = this.#languages?.filter(({name}) => !ContentLanguages.#knownLanguages.includes(name))
            ?.map(({name}) => (`[part=list] div.${name}:before, [part=line] .${name} { background-color: var(--languageColor-${name}, var(--languageColor-unknown)); }`));
        
        return html`
            <style>
                ${style.join("")}
            </style>
            <div part="container">
                <div part="content">
                    <h6 part="heading">
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16"><path d="M240-400h480v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z"/></svg>
                        <span>Languages:</span>
                    </h6>
                    <div part="list" style="--items: ${this.#languages.length}">${list}</div>
                    <div part="line" style=${styleMap({gridTemplateColumns: this.#languages?.map(({weight}) => (`${weight}%`)).join(" ")})}>
                        ${line}
                    </div>
                </div>
                <ul>
                    <slot @slotchange=${this.#parseLanguages}></slot>
                </ul>
            </div>
        `;
    }
    
    static get styles() {
        return [css`
          :host {
            --languageColor-c: #555555;
            --languageColor-cpp: #f34b7d;
            --languageColor-csharp: #178600;
            --languageColor-css: #663399;
            --languageColor-go: #00add8;
            --languageColor-html: #ff4500;
            --languageColor-java: #b07219;
            --languageColor-js: #ffd700;
            --languageColor-php: #4f5d95;
            --languageColor-python: #3572a5;
            --languageColor-rust: #dea584;
            --languageColor-shell: #89e051;
            --languageColor-ts: #4169e1;
            --languageColor-unknown: #ededed;
          }
          
          [part=container] {
            container-type: inline-size;
            color: var(--container-textColor, inherit);
            background-color: var(--container-bgColor, transparent);
            padding: 8px 8px 12px;
          }
          
          [part=content] {
            align-items: start;
            justify-content: space-between;
            display: grid;
            grid-template-areas:
              "heading list"
              "line line";
            
            :is([part=list], [part=line]):has(.focus) :not(:is(.focus, .focus *)) {
              color: color-mix(in srgb, var(--container-textColor) 60%, transparent);
              
              &:is([part=line] *) {
                opacity: 0.6;
              }
              
              &:before {
                box-shadow: inset 0 0 32px -10px var(--container-bgColor);
              }
            }
          }
          
          ul {
            display: none;
          }
          
          h6 {
            grid-area: heading;
            padding-left: 4px;
            color: var(--heading-textColor);
            margin: 0 16px 8px 0;
            font-weight: normal;
            font-size: 0.95em;
            display: grid;
            grid-auto-flow: column;
            column-gap: 4px;
            line-height: 1;
            
            @container (width < 320px) {
              margin-right: 8px;
            }
            
            svg {
              fill: var(--heading-textColor);
            }
          }
          
          [part=list] {
            margin-right: 8px;
            grid-area: list;
            display: grid;
            grid-auto-flow: column;
            grid-auto-columns: 12px max-content;
            justify-content: start;
            align-items: center;
            font-size: 0.8em;
            line-height: 1.1;
            overflow-x: auto;
            overflow-y: hidden;
            scrollbar-width: thin;
            padding-bottom: 2px;
            padding-top: 2px;
            
            div {
              display: contents;
              cursor: default;
              
              :host([interactive]) & {
                cursor: pointer;
                
                &:before, .name {
                  transition: all 0.2s ease-in-out;
                }
              }
              
              &:before {
                content: "";
                display: flex;
                width: 12px;
                height: 12px;
                border-radius: 50%;
                box-sizing: border-box;
                background-position: center;
                position: sticky;
                left: calc(8px * var(--index));
                right: calc(8px * calc(var(--items) - var(--index) - 1));
                z-index: calc(var(--index));
                outline: 2px solid var(--container-bgColor);
              }
              
              .name {
                user-select: none;
                font-weight: 500;
                padding: 0 12px 0 4px;
                position: sticky;
                left: calc(12px + calc(8px * var(--index)));
                background-color: var(--container-bgColor);
                
                @container (width < 320px) {
                  padding-right: 8px;
                }
              }
              
              &:last-child .name {
                padding-right: 0;
              }
            }
          }
          
          [part=line] {
            grid-area: line;
            display: grid;
            height: 10px;
            
            div {
              transition: opacity 0.2s ease-in-out;
              background-clip: padding-box;
              box-sizing: border-box;
              border: 1px solid transparent;
              position: relative;
              
              &:first-child {
                border-top-left-radius: 16px;
                border-bottom-left-radius: 16px;
              }
              
              &:last-child {
                border-top-right-radius: 16px;
                border-bottom-right-radius: 16px;
              }
            }
          }
        `,
        // Add styling for known languages
        ...ContentLanguages.#knownLanguages.map((name) => css` 
          [part=list] div.${unsafeCSS(name)}:before, [part=line] .${unsafeCSS(name)} {
            background-color: var(--languageColor-${unsafeCSS(name)});
          }
        `)];
    }
}