import {LitElement, css, html} from "lit";
import {customElement} from "lit/decorators.js";

/**
 * ContentHero element
 * @summary
 * Provides a full-width responsive container for a hero image, tagline, and feature articles
 * @slot {p} - Text to show alongside hero image and feature content
 * @slot {<h3>} title - Hidden title of the hero section
 * @slot {<img> | *} image - Image or other content to show in the hero section
 * @slot {*} feature - Articles to feature alongside hero image and tagline
 * @csspart container - Overall responsive container section element
 * @cssprop {color} [--color-border=#000000] - Bottom border color of hero section
 * @cssprop {color} [--color-tagline=#F4F4F4] - Foreground color of tagline text
 * @cssprop {color} [--color-background=#020024] - Primary background color, used as fallback to gradient 
 * @cssprop {color} [--color-gradient-from=#020024] - Primary color used in background gradient
 * @cssprop {color} [--color-gradient-mid=#646CFF] - Secondary color used in background gradient
 * @cssprop {color} [--color-gradient-to=#00D4FF] - Final color used in background gradient
 */
@customElement("content-hero")
export class ContentHero extends LitElement {
    render() {
        return html`
            <section part="container">
                <slot name="title"></slot>
                <slot name="image"></slot>
                <div class="tagline">
                    <slot></slot>
                </div>
                <content-carousel>
                    <slot name="feature"></slot>
                </content-carousel>
            </section>
        `;
    }
    
    static get styles() {
        return css`
          :host {
            display: block;
            scroll-margin-top: 86px;
            container: content-hero / inline-size;
          }
          
          section {
            overflow: hidden;
            border-bottom: 1px solid var(--color-border, #000000);
            background: var(--color-background, #020024);
            background: linear-gradient(45deg, var(--color-gradient-from, #020024) 0%, var(--color-gradient-mid, #646CFF) 80%, var(--color-gradient-to, #00D4FF) 100%);
            height: 576px;
            display: grid;
            column-gap: 32px;
            align-items: stretch;
            grid-template-columns: 1fr 512px 1fr;
            grid-template-areas: "image tagline carousel";
            
            ::slotted([slot=title]) {
              display: none;
            }
            
            ::slotted([slot=image]) {
              align-self: center;
              justify-self: end;
              min-height: 338px;
              grid-area: image;
            }
            
            .tagline {
              padding: 0 48px;
              grid-area: tagline;
              text-align: center;
              align-content: center;
              color: var(--color-tagline, #F4F4F4);
              animation: 1s ease-in-out fold;
              box-sizing: border-box;
            }
            
            content-carousel {
              min-width: 352px;
              grid-area: carousel;
              
              @container content-hero (width > 1176px) {
                container-type: normal;
                
                &::part(container) {
                  grid-auto-flow: row;
                }
              }
            }
            
            @container content-hero (width < 1400px) {
              grid-template-columns: min-content 1fr max-content;
              padding: 0 32px;
              
              .tagline {
                padding: 0 32px;
                max-width: 452px;
                justify-self: center;
              }
              
              ::slotted([slot=image]) {
                justify-self: start;
              }
            }
            
            @container content-hero (width <= 1225px) {
              grid-template-columns: max-content 1fr max-content;
            }
            
            @container content-hero (width <= 1176px) {
              row-gap: 32px;
              height: auto;
              min-height: 576px;
              grid-template-rows: min-content 1fr;
              grid-template-columns: repeat(3, 1fr);
              grid-template-areas:
                "image tagline tagline"
                "carousel carousel carousel";
              
              ::slotted([slot=image]) {
                align-self: end;
                justify-self: center;
              }
            
              .tagline {
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
            
            @container content-hero (width <= 1066px) {
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
            
            @container content-hero (width <= 976px) {
              padding: 0 16px;
              column-gap: 16px;
            
              .tagline {
                max-width: 480px;
              }
              
              content-carousel {
                margin: 0 -16px;
                
                &::part(container) {
                  padding: 0 8px 0 16px;
                }
              }
            }
            
            @container content-hero (width <= 876px) {
              height: auto;
              grid-auto-flow: row;
              grid-template-rows: auto min-content 1fr;
              grid-template-columns: 1fr;
              grid-template-areas:
                "image"
                "tagline"
                "carousel";
            }
          
            @container content-hero (width <= 425px) {
              .tagline {
                padding: 0 4px;
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
        `;
    }
}