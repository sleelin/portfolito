import {LitElement, css, html, unsafeCSS} from "lit";
import {customElement, query, queryAssignedElements} from "lit/decorators.js";
import LinkedInLogo from "../../assets/linkedin.svg";
import GitHubLogo from "../../assets/github.svg";

/**
 * PageNav element
 * @summary
 * Provides a responsive page navigation menu which handles positioning and social links
 * @slot {<a>} - in-page navigation links to content with specific IDs
 * @slot {<a>} socials - links to social networks, displayed with relevant logo
 * @csspart container - responsive container element
 * @csspart content - wrapper for native nav element
 * @csspart links - wrapper for non-social page links
 * @csspart socials - wrapper for social page links
 * @cssprop {color} [--color-primary=#1d1d1d] - color of the links and social logos, and hamburger menu button
 * @cssprop {color} [--color-link-hover=#45bbfc] - color of the links on hover
 * @cssprop {color} [--color-link-shadow=#646cffaa] - color of the radial shadow of links on hover
 */
@customElement("page-nav")
export class PageNav extends LitElement {
    @query("#toggle")
    accessor #toggle;
    
    @queryAssignedElements({selector: "a[href^='#']"})
    accessor #links;
    
    @queryAssignedElements({slot: "socials", selector: "a[href^='github.com']"})
    accessor #aGitHub;
    
    @queryAssignedElements({slot: "socials", selector: "a[href^='linkedin.com']"})
    accessor #aLinkedIn;
    
    #listenLinks() {
        for (let link of this.#links) link.addEventListener("click", (e) => {
            e.preventDefault();
            this.#toggle.checked = false;
            document.getElementById(e.target.hash.substring(1))?.scrollIntoView({behavior: "smooth", inline: "start"});
        });
    }
    
    render() {
        return html`
            <input id="toggle" type="checkbox">
            <div part="container">
                <label for="toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <div part="content">
                    <nav>
                        <div part="links">
                            <slot @slotchange=${this.#listenLinks}></slot>
                        </div>
                        <div part="socials">
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
            container: root / inline-size;
            box-sizing: border-box;
            display: flex;
            height: 100%;
            justify-content: end;
            position: fixed;
            top: 0;
            right: 0;
            width: calc(100% - 16px - 256px);
            padding: 0 16px;
          }
          
          label, input {
            display: none;
          }
          
          nav {
            &, & > div {
              display: grid;
              grid-auto-flow: column;
            }
          }
          
          nav {
            position: sticky;
            top: 16px;
            justify-items: center;
            grid-template-columns: 1fr max-content;
            grid-template-areas: "links socials";
            
            @container root (width <= 888px) {
              column-gap: 32px;
            }
            
            @container root (width < 480px) {
              overflow-x: scroll;
              position: absolute;
              top: -64px;
              bottom: 0;
              left: 0;
              right: 0;
              height: 64px;
              transform: translateY(0);
              transition: transform 0.3s ease-in-out, height 0.5s ease-in-out;
              justify-items: start;
              padding: 0 16px;
              
              & > * {
                z-index: 999999;
              }
            }
            
            @container root (width < 228px) {
              top: -100cqh;
              z-index: 999999;
              row-gap: 32px;
              padding: 16px 0;
              height: fit-content;
              justify-items: stretch;
              grid-template-columns: 1fr;
              grid-template-areas: 
                "links"
                "socials";
            }
          }
          
          [part=links] {
            grid-area: links;
            justify-items: center;
            column-gap: 32px;
            
            ::slotted(a) {
              position: relative;
              text-decoration: none;
              color: var(--color-primary, #1d1d1d);
              display: flex;
              align-items: center;
              will-change: color;
              transition: color 300ms;
            }
            
            ::slotted(a:hover) {
              color: var(--color-link-hover, #45bbfc);
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
              --shadow: var(--color-link-shadow, #646cffaa);
              box-shadow: 0 0 3rem 1.3rem var(--shadow);
            }
            
            @container root (width < 228px) {
              grid-auto-flow: row;
              row-gap: 24px;
            }
          }
          
          [part=socials] {
            grid-area: socials;
            justify-self: end;
            align-items: center;
            column-gap: 8px;
            justify-content: end;
            grid-auto-flow: column;
            
            & ::slotted(a) {
              width: 32px;
              height: 32px;
              overflow: hidden;
              color: transparent;
              background-color: var(--color-primary, #1d1d1d);
              mask-repeat: no-repeat;
            }
            
            & ::slotted(a[href*="linkedin.com"]) {
              mask-image: url("${unsafeCSS(LinkedInLogo)}");
            }
            
            & ::slotted(a[href*="github.com"]) {
              mask-image: url("${unsafeCSS(GitHubLogo)}");
            }
            
            @container root (width < 228px) {
              justify-self: center;
            }
          
            @container root (width > 888px) {
              min-width: 256px;
            }
          }
          
          [part=content] {
            display: grid;
            grid-auto-flow: row;
            grid-template-rows: max-content;
            align-content: center;
            right: 0;
            flex-grow: 1;
            box-sizing: border-box;
            contain: paint;
            
            @container root (width < 480px) {
              padding: 0 16px;
              pointer-events: none;
              overflow: hidden;
              position: fixed;
              top: 100%;
              width: 100vw;
              height: calc(100vh - 64px);
              
              > :after {
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
            position: sticky;
            top: 20px;
            
            @container root (width < 480px) {
              display: block;
            }
            
            span {
              display: block;
              width: 30px;
              height: 4px;
              margin-bottom: 5px;
              position: relative;
              background: var(--color-primary, #1d1d1d);
              border-radius: 3px;
              z-index: 1;
              transform-origin: 4px 0;
              transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0), opacity 0.55s ease;
              
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
              top: 100%;
              right: 0;
              width: 100vw;
              height: 100vh;
              pointer-events: none;
              opacity: 0;
            }
          }
          
          input:checked + div > label {
            &:after {
              pointer-events: all;
              background-color: black;
              transition: opacity 0.2s ease-in;
            }
            
            @container root (width < 480px) {
              & + [part=content] {
                &:after {
                  opacity: 0.4;
                }
                
                > :after {
                  opacity: 0.8;
                }
                
                nav {
                  pointer-events: all;
                  transform: translateY(64px);
                
                  @container root (width < 228px) {
                    transform: translateY(100cqh);
                  }
                }
              }
            }
          
            @container root (width < 228px) {
              &:after {
                opacity: 0.4;
              }
            }
            
            span {
              opacity: 1;
              transform: rotate(-45deg) translate(-1px, -2px);
              
              &:first-child {
                transform: rotate(45deg) translate(0, -2px);
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