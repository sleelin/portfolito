import {LitElement, css, html} from "lit";
import {customElement, query, queryAsync} from "lit/decorators.js";
import {unsafeSVG} from "lit/directives/unsafe-svg.js";
import {until} from "lit/directives/until.js";
import FaceImage from "../../assets/face.png";

/**
 * ContentHero element
 * @slot - This element has a slot
 */
@customElement("content-hero")
export class ContentHero extends LitElement {
    @query("#face")
    accessor #face;
    
    @queryAsync("#pupil-left")
    accessor #pupilLeft;
    
    @queryAsync("#pupil-right")
    accessor #pupilRight;
    
    constructor() {
        super();
        
        window.addEventListener("mousemove", async (e) => {
            const pupilLeft = await this.#pupilLeft;
            const pupilRight = await this.#pupilRight;
            
            if (!!pupilLeft && !!pupilRight) {
                const bcLeft = pupilLeft.getBoundingClientRect();
                const bcRight = pupilRight.getBoundingClientRect();
                const midpointX = bcLeft.x + ((bcRight.x - bcLeft.x) / 2);
                const midpointY = bcLeft.y + ((bcRight.y - bcLeft.y) / 2);
                const percentX = Math.min(Math.max(Math.ceil(midpointX - e.clientX), -100), 100) / 100;
                const percentY = Math.min(Math.max(Math.ceil(midpointY - e.clientY), -100), 100) / 100;
                
                window.requestAnimationFrame(() => {
                    pupilLeft.style.transform = `translate(${-10 * percentX}px, ${-4 * (percentY)}px)`;
                    pupilRight.style.transform = `translate(${-10 * percentX}px, ${-4 * (percentY)}px)`;
                });
            }
        });
    }
    
    render() {
        return html`
            <section part="container">
                <div id="face">
                    ${until(import("../../assets/face.svg?raw").then(({default: SVG}) => unsafeSVG(SVG)), html`<img alt="face" src=${FaceImage} />`)}
                </div>
                <slot></slot>
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
            border-bottom: 1px solid var(--color-foreground);
            background: rgb(2, 0, 36);
            background: linear-gradient(45deg, rgba(2, 0, 36, 1) 0%, rgba(100, 108, 255, 1) 80%, rgba(0, 212, 255, 1) 100%);
            height: 576px;
            display: grid;
            column-gap: 32px;
            align-items: center;
            grid-template-columns: 1fr 512px 1fr;
            grid-template-areas: "face text carousel";
            
            ::slotted(content-carousel) {
              min-width: 352px;
            }
            
            @container content-hero (width < 1400px) {
              grid-template-columns: min-content 1fr max-content;
              padding: 0 32px;
              
              #face {
                justify-self: start;
              }
            
              ::slotted(p) {
                padding: 0 32px;
                max-width: 452px;
                justify-self: center;
              }
            }
            
            @container content-hero (width <= 1280px) {
              ::slotted(.bubble) {
                justify-self: end;
              }
            }
            
            @container content-hero (width <= 1225px) {
              grid-template-columns: max-content 1fr max-content;
            }
            
            @container content-hero (width <= 1176px) {
              row-gap: 32px;
              grid-template-rows: min-content;
              grid-template-columns: repeat(3, 1fr);
              grid-template-areas:
                "face text text"
                "carousel carousel carousel";
              
              #face {
                align-self: end;
                justify-self: center;
              }
              
              ::slotted(content-carousel) {
                min-width: unset;
              }
              
              ::slotted(p) {
                max-width: 600px;
              }
            }
            
            @container content-hero (width <= 976px) {
              padding: 0 16px;
              column-gap: 16px;
              
              ::slotted(content-carousel) {
                align-self: stretch;
              }
            
              ::slotted(p) {
                max-width: 480px;
              }
            }
            
            @container content-hero (width <= 876px) {
              height: auto;
              grid-auto-flow: row;
              grid-template-rows: 1fr min-content;
              grid-template-columns: 1fr;
              grid-template-areas:
                "face"
                "text"
                "carousel";
            }
          
            @container content-hero (width <= 425px) {
              ::slotted(p) {
                padding: 0 4px;
              }
            }
          }
          
          #face {
            align-self: center;
            justify-self: end;
            width: 288px;
            min-height: 338px;
            grid-area: face;
            
            img {
              opacity: 0.05;
              width: 100%;
              animation: 1s ease-in-out fadeInToFaint;
            }
            
            svg {
              max-width: 100%;
              max-height: 100%;
              overflow: hidden;
              border-radius: 32px;
              filter: drop-shadow(0 0 3rem rgb(197, 201, 204));
              animation: 0.3s ease-in-out fadeInFromFaint;
            }
          }
          
          ::slotted(h3) {
            display: none;
          }
          
          ::slotted(p) {
            padding: 0 48px;
            grid-area: text;
            text-align: center;
            color: white;
            animation: 1s lineUp ease-in-out;
            box-sizing: border-box;
          }
          
          ::slotted(content-carousel) {
            grid-area: carousel;
          }
          
          @keyframes fadeInToFaint {
            0% {
              opacity: 0;
            }
            
            100% {
              opacity: 0.05;
            }
          }
          
          @keyframes fadeInFromFaint {
            0% {
              opacity: 0.05;
            }
            
            100% {
              opacity: 1;
            }
          }
        `;
    }
}