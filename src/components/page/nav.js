import {LitElement, css, html, nothing} from "lit";
import {customElement, state, query, queryAssignedElements} from "lit/decorators.js";
import {unsafeSVG} from "lit/directives/unsafe-svg.js";
import LinkedInLogo from "../../assets/linkedin.svg?raw";
import GitHubLogo from "../../assets/github.svg?raw";

/**
 * PageNav element
 * @slot - This element has a slot
 */
@customElement("page-nav")
export class PageNav extends LitElement {
    @query("#toggle")
    accessor #toggle;
    
    @queryAssignedElements({selector: "[href^='#']"})
    accessor #links;
    
    @queryAssignedElements({slot: "socials"})
    accessor #socials;
    
    @state()
    accessor #aGitHub;
    
    @state()
    accessor #aLinkedIn;
    
    firstUpdated(_) {
        for (let link of this.#links) link.addEventListener("click", (e) => {
            e.preventDefault();
            this.#toggle.checked = false;
            document.getElementById(e.target.hash.substring(1))?.scrollIntoView({behavior: "smooth", inline: "start"});
        });
        
        this.#aGitHub = this.#socials.find((a) => a.matches("[href*='github.com']"));
        this.#aLinkedIn = this.#socials.find((a) => a.matches("[href*='linkedin.com']"));
        this.requestUpdate();
    }
    
    #renderSocials() {
        return html`
            ${!this.#aLinkedIn ? nothing : html`<span class="linkedin">${unsafeSVG(LinkedInLogo)}</span>`}
            ${!this.#aGitHub ? nothing : html`<span class="github">${unsafeSVG(GitHubLogo)}</span>`}
        `
    }
    
    render() {
        return html`
            <div part="container">
                <input id="toggle" type="checkbox">
                <label for="toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <div part="content">
                    <nav>
                        <div part="links">
                            <slot></slot>
                        </div>
                        <div part="socials">
                            ${this.#renderSocials()}
                            <slot name="socials"></slot>
                        </div>
                    </nav>
                </div>
            </div>
        `;
    }
    
    static get styles() {
        return css`
          [part=container] {
            container-type: inline-size;
            container-name: root;
            box-sizing: border-box;
          }

          label, input {
            display: none;
          }
          
          nav, div {
            height: 100%;
            display: grid;
            grid-auto-flow: column;
          }
          
          nav {
            justify-items: center;
            grid-template-columns: 1fr 256px;
            
            @container root (width <= 888px) {
              grid-template-columns: 1fr max-content;
              column-gap: 32px;
            }

            @container root (width < 480px) {
              overflow-x: scroll;
              position: fixed;
              top: -64px;
              bottom: 0;
              left: 0;
              right: 0;
              height: 64px;
              transform: translateY(0);
              transition: transform 0.3s ease-in-out;
              z-index: 999999;
              justify-items: start;
              padding: 0 16px;
            }
          }
          
          [part=links] {
            justify-items: center;
            column-gap: 32px;

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
          }
          
          [part=socials] {
            justify-self: end;
            align-items: center;
            column-gap: 8px;
            justify-content: end;
            grid-template-areas: "linkedin github";

            span {
              display: flex;

              &.linkedin {
                grid-area: linkedin;
              }

              &.github {
                grid-area: github;
              }

              svg {
                width: 32px;
                height: 32px;
                fill: var(--color-primary);
              }
            }

            & ::slotted(a) {
              width: 32px;
              height: 32px;
              overflow: hidden;
              opacity: 0;
            }

            & ::slotted(a[href*="linkedin.com"]) {
              grid-area: linkedin;
            }

            & ::slotted(a[href*="github.com"]) {
              grid-area: github;
            }
          }
          
          [part=content] {
            @container root (width < 480px) {
              transition: height 0.3s ease-in-out;
              overflow: hidden;
              container-type: size;
              position: absolute;
              top: 67px;
              right: -16px;
              width: 100vw;
              height: 0;

              &:after {
                display: block;
                content: "";
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                opacity: 0;
                pointer-events: none;
                background-color: black;
                transition: opacity 0.2s ease-in;
                z-index: 999998;
              }
            }
          }
          
          label {
            place-self: center end;

            @container(width < 480px) {
              display: block;
            }
            
            span {
              display: block;
              width: 30px;
              height: 4px;
              margin-bottom: 5px;
              position: relative;
              background: var(--color-primary);
              border-radius: 3px;
              z-index: 1;
              transform-origin: 4px 0;
              transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0), opacity 0.55s ease;

              &:first-child {
                transform-origin: 0 0;
              }

              &:last-child {
                margin-bottom: 0;
              }

              &:nth-last-child(2) {
                transform-origin: 0 100%;
              }
            }
            
            &:after {
              display: block;
              content: "";
              position: fixed;
              top: 68px;
              right: -16px;
              width: 100vw;
              height: calc(100vh - 76px);
              pointer-events: none;
            }
          }
          
          input:checked + label {
            &:after {
              pointer-events: all;
            }
            
            & + [part=content] {
              @container root (width < 480px) {
                height: 64px;
                
                &:after {
                  opacity: 0.8;
                }
                
                nav {
                  transform: translateY(64px);
                }
              }
            }
            
            span {
              opacity: 1;
              transform: rotate(-45deg) translate(-1px, -2px);
              
              &:first-child {
                transform: rotate(45deg) translate(0, -2px)
              }
              
              &:nth-last-child(2) {
                opacity: 0;
                transform: rotate(0deg) scale(0.2, 0.2);
              }
            }
          }
        `;
    }
}