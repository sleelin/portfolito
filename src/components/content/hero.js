import {LitElement, css, html} from "lit";
import {customElement, query, queryAssignedNodes} from "lit/decorators.js";

/**
 * ContentHero element
 * @summary
 * Provides a full-width responsive container for a hero image, tagline, and feature articles
 * @slot {p} - Text to show alongside hero image and feature content
 * @slot {<h3>} title - Hidden title of the hero section
 * @slot {<img> | *} image - Image or other content to show in the hero section
 * @slot {*} feature - Articles to feature alongside hero image and tagline
 * @csspart container - Overall responsive container section element
 * @csspart content - Text and tagline content of the hero element
 * @csspart feature - Carousel element container for the feature articles of the hero element
 * @cssprop {color} [--container-borderColor=#000000] - Bottom border color of hero section
 * @cssprop {color} [--container-textColor=#F4F4F4] - Foreground text color of tagline text
 * @cssprop {color} [--container-bgColor=#020024] - Primary background color, used as fallback to gradient 
 * @cssprop {color} [--gradient-fromColor=#020024] - Primary color used in background gradient
 * @cssprop {color} [--gradient-midColor=#646CFF] - Secondary color used in background gradient
 * @cssprop {color} [--gradient-toColor=#00D4FF] - Final color used in background gradient
 */
@customElement("content-hero")
export class ContentHero extends LitElement {
    @query("content-carousel", true)
    accessor #carousel;
    
    @queryAssignedNodes({slot: "feature"})
    accessor #feature;
    
    #slotChange() {
        this.#carousel.classList.toggle("hidden", !this.#feature.length);
    }
    
    render() {
        return html`
            <section part="container" @slotchange=${this.#slotChange}>
                <slot name="title"></slot>
                <slot name="image"></slot>
                <div part="content">
                    <slot></slot>
                </div>
                <content-carousel part="feature">
                    <slot name="feature"></slot>
                </content-carousel>
            </section>
        `;
    }
    
    static get styles() {
        return css`
          :host {
            display: block;
            container-type: inline-size;
          }
          
          section {
            overflow: hidden;
            border-bottom: 1px solid var(--container-borderColor, #000000);
            background: var(--container-bgColor, #020024);
            background: linear-gradient(45deg, var(--gradient-fromColor, #020024) 0%, var(--gradient-midColor, #646CFF) 80%, var(--gradient-toColor, #00D4FF) 100%);
            display: grid;
            column-gap: 32px;
            align-items: stretch;
            grid-template-columns: 1fr 512px 1fr;
            grid-template-areas: "image content carousel";
            
            &:has(content-carousel.hidden) {
              justify-content: center;
              grid-template-columns: auto auto;
              grid-template-areas: "image content";
            }
            
            ::slotted([slot=title]) {
              display: none;
            }
            
            ::slotted([slot=image]) {
              align-self: center;
              justify-self: end;
              min-height: min(100%, 338px);
              grid-area: image;
            }
            
            [part=content] {
              padding: 0 48px;
              grid-area: content;
              align-content: center;
              color: var(--container-textColor, #F4F4F4);
              animation: 1s ease-in-out fold;
              box-sizing: border-box;
              display: grid;
              row-gap: 8px;
              
              ::slotted(:is(h2, h3, h4, h5, h6, p)) {
                margin: 0;
              }
              
              ::slotted(:is(h2, h3, h4, h5, h6)) {
                line-height: 1.1;
              }
              
              ::slotted(:is(h2, h3)) {
                font-size: 3em;
              }
              
              ::slotted(:is(h4)) {
                font-size: 1.5em;
                font-weight: 500;
              }
            }
            
            content-carousel {
              min-width: 352px;
              grid-area: carousel;
              
              &.hidden {
                display: none;
              }
              
              @container (width > 1176px) {
                padding: 32px 0;
                container-type: normal;
                
                &::part(container) {
                  grid-auto-flow: row;
                }
              }
            }
            
            @container (width < 1400px) {
              grid-template-columns: max-content auto max-content;
              padding: 0 32px;
              
              [part=content] {
                padding: 0 32px;
                max-width: 452px;
                justify-self: center;
              }
            }
            
            @container (width <= 1225px) {
              grid-template-columns: auto auto max-content;
            }
            
            @container (width <= 1176px) {
              padding-top: 32px;
              row-gap: 32px;
              grid-template-rows: min-content 1fr;
              grid-template-columns: repeat(3, 1fr);
              grid-template-areas:
                "image content content"
                "carousel carousel carousel";
              
              &:has(content-carousel.hidden) {
                grid-template-rows: 1fr;
                grid-template-columns: auto auto;
                grid-template-areas: "image content";
              }
              
              ::slotted([slot=image]) {
                justify-self: center;
              }
            
              [part=content] {
                max-width: 600px;
              }
              
              content-carousel {
                min-width: unset;
                margin: 0 -32px;
                
                &::part(container) {
                  padding: 0 32px;
                }
                
                ::slotted([variant=panel]) {
                  margin: 8px 0 24px;
                }
              }
            }
            
            @container (width <= 1066px) {
              content-carousel {
                align-self: end;
                
                &::part(container) {
                  padding: 0 16px;
                }
                
                ::slotted([variant=panel]) {
                  margin: 0 0 16px;
                }
              }
            }
            
            @container (width <= 976px) {
              padding: 32px 16px 0;
              column-gap: 16px;
            
              [part=content] {
                max-width: 480px;
              }
              
              content-carousel {
                margin: 0 -16px;
                
                &::part(container) {
                  padding: 0 8px 0 16px;
                }
              }
            }
            
            @container (width <= 876px) {
              grid-auto-flow: row;
              grid-template-rows: auto min-content 1fr;
              grid-template-columns: 1fr;
              grid-template-areas:
                "image"
                "content"
                "carousel";
              
              &:has(content-carousel.hidden) {
                grid-template-rows: auto min-content;
                grid-template-areas:
                    "image"
                    "content";
              }
              
              [part=content] {
                margin-block: 1em;
                text-align: center;
              }
            }
          
            @container (width <= 425px) {
              [part=content] {
                padding: 0 4px;
              }
            
              content-carousel::part(container) {
                padding: 0 8px;
              }
            }
          }
          
          @keyframes fold {
            0% {
              opacity: 0;
              transform: rotateX(90deg) scale(0.75);
            }
            
            20% {
              opacity: 0;
            }
            
            50% {
              opacity: 1;
            }
            
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          @media print {
            section {
              height: auto;
              min-height: unset;
              padding: 0;
              background: transparent;
              display: block;
              width: 100%;
              
              ::slotted([slot=image]), content-carousel {
                display: none;
              }
              
              [part=content] {
                color: inherit;
                animation: unset;
                max-width: 50ch;
                padding: 0;
                margin: 0 auto;
                font-size: 11pt;
              }
              
              &:after {
                content: "";
                display: block;
                border-bottom: 1px solid;
                margin: 12pt 2pt 18pt;
                opacity: 0.25;
              }
            }
          }
        `;
    }
}