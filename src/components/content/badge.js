import {LitElement, css, html} from "lit";
import {customElement, property} from "lit/decorators.js";

/**
 * ContentBadge element
 * @summary
 * Provides a stylised "badge" element
 * @slot {*} - Text content of the badge element
 * @csspart container - Responsive container element
 * @cssprop {color} [--content-textColor=#1d1d1d|#ffffff] - Text color of badge contents
 * @cssprop {color} [--content-bgColor=#edf2f7|#e2e8f029] - Background color of badge
 */
@customElement("content-badge")
export class ContentBadge extends LitElement {
    /** Which layout to use for the badge contents */
    @property({type: String, reflect: true})
    accessor variant;
    
    /** Which color style to use for the badge contents */
    @property({type: String, reflect: true})
    accessor color;
    
    render() {
        return html`
            <div part="container">
                <slot name="thumb"></slot>
                <slot></slot>
            </div>
        `;
    }
    
    static get styles() {
        return css`
          :host {
            margin: 6px 0;
            line-height: 1.5;
            font-size: 0.75rem;
            font-family: Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
            --content-textColor: light-dark(#1d1d1d, #ffffff);
            --content-bgColor: light-dark(#d0d1e7, #2e374a);
          }
          
          :host([color=blue]) {
            --content-textColor: light-dark(#00273f, #b2c6ff);
            --content-bgColor: light-dark(#358ef14d, #4169e12e);
          }
          
          :host([color=green]) {
            --content-textColor: light-dark(#01421c, #90edb3);
            --content-bgColor: light-dark(#b9f5d0, #90edb32e);
          }
          
          :host([color=red]) {
            --content-textColor: light-dark(#c53030, #feb2b2);
            --content-bgColor: light-dark(#fed7d7, #ff32322d);
          }
          
          :host([color=orange]) {
            --content-textColor: light-dark(#7b341e, #f6ad55);
            --content-bgColor: light-dark(#feebc8, #f6ad552e);
          }
          
          :host([color=yellow]) {
            --content-textColor: light-dark(#744210, #faf089);
            --content-bgColor: light-dark(#fefcbf, #faf08929);
          }
          
          :host([color=cyan]) {
            --content-textColor: light-dark(#086f83, #9decf9);
            --content-bgColor: light-dark(#c4f1f9, #358ef14d);
          }
          
          :host([color=teal]) {
            --content-textColor: light-dark(#234e52, #81e6d9);
            --content-bgColor: light-dark(#b2f5ea, #81e6d92e);
          }
          
          :host([color=purple]) {
            --content-textColor: light-dark(#44337a, #d6bcfa);
            --content-bgColor: light-dark(#e9d8fd, #9f7aea2e);
          }
          
          :host([color=pink]) {
            --content-textColor: light-dark(#97266d, #fbb6ce);
            --content-bgColor: light-dark(#fed7e2, #fbb6ce29);
          }
          
          :host([color=grey]) {
            --content-textColor: light-dark(#2a3439, #e9e9e9);
            --content-bgColor: light-dark(#cecece, #b4b4b440);
          }
          
          [part="container"] {
            box-sizing: border-box;
            display: inline-block;
            white-space: nowrap;
            padding: 1px 6px;
            border-radius: 6px;
            color: var(--content-textColor);
            background-color: var(--content-bgColor);
            
            :host([variant=outline]) & {
              background-color: light-dark(var(--content-bgColor), transparent);
              outline: 1px solid var(--content-textColor);
              outline-offset: -1px;
            }
          }
        `;
    }
}