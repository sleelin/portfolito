import {LitElement, css, html} from "lit";
import {customElement} from "lit/decorators.js";

/**
 * PageNav element
 * @slot - This element has a slot
 */
@customElement("page-nav")
export class PageNav extends LitElement {
    #handleClick(e) {
        e.preventDefault();
        document.getElementById(e.target.href.split("#").pop())?.scrollIntoView({behavior: "smooth", inline: "start"});
    }
    
    connectedCallback() {
        super.connectedCallback();
        for (let link of this.querySelectorAll("& > a"))
            link.addEventListener("click", this.#handleClick);
    }
    
    disconnectedCallback() {
        for (let link of this.querySelectorAll("& > a"))
            link.removeEventListener("click", this.#handleClick);
        super.disconnectedCallback();
    }
    
    render() {
        return html`
            <nav>
                <slot></slot>
            </nav>
        `;
    }
    
    static get styles() {
        return css`
          nav {
            height: 100%;
            display: grid;
            grid-auto-flow: column;
            column-gap: 32px;
          }
          
          ::slotted(a) {
            position: relative;
            text-decoration: none;
            color: var(--color-primary);
            display: flex;
            align-items: center;
            will-change: color;
            transition: color 300ms;
          }
          
          ::slotted(a:hover) {
            color: #45bbfc;
          }
          
          ::slotted(a):before {
            display: block;
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            will-change: box-shadow;
            transition: box-shadow 300ms;
            border-radius: 50%;
          }
          
          ::slotted(a:hover):before {
            box-shadow: 0 0 3rem 1.3rem #646cffaa;
          }
        `;
    }
}