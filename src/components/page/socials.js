import {LitElement, css, html, nothing} from "lit";
import {customElement, property} from "lit/decorators.js";
import {unsafeSVG} from "lit/directives/unsafe-svg.js";
import LinkedInLogo from "../../assets/linkedin.svg?raw";
import GitHubLogo from "../../assets/github.svg?raw";

/**
 * PageSocials element
 */
@customElement("page-socials")
export class PageSocials extends LitElement {
    /** URL to a LinkedIn profile */
    @property({type: String, attribute: "href-linkedin"})
    accessor linkedInUrl;
    
    /** URL to a GitHub profile */
    @property({type: String, attribute: "href-github"})
    accessor gitHubUrl;
    
    render() {
        return html`
            <div class="container">
                ${!this.linkedInUrl ? nothing : html`<a href="${this.linkedInUrl}" target="_blank">${unsafeSVG(LinkedInLogo)}</a>`}
                ${!this.gitHubUrl ? nothing : html`<a href="${this.gitHubUrl}" target="_blank">${unsafeSVG(GitHubLogo)}</a>`}
            </div>
        `;
    }
    
    static get styles() {
        return css`
          .container {
            height: 100%;
            display: grid;
            grid-auto-flow: column;
            align-items: center;
            column-gap: 8px;
            justify-content: end;
          }
          
          a {
            display: flex;
          }
          
          svg {
            width: 32px;
            height: 32px;
            fill: var(--color-primary);
          }
        `;
    }
}