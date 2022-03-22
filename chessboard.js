import {LitElement, html, css} from 'lit';

/**
 * A chessboard component
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class ChessBoard extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-flex;
        width: var(--size);
        height: var(--size);
        background-color: pink;
      }
    `;
  }

  static get properties() {
    return {
      /**
       * The common size width/height of the board, in whatever unit you want.
       * @type {string}
       */
      size: {type: String},
    };
  }

  constructor() {
    super();
    this.size = '100px';
    this.style.setProperty('--size', `100px`);
  }

  update(changes) {
    if (changes.has('size')) {
      if (this.size) {
        this.style.setProperty('--size', this.size);
      } else {
        this.style.removeProperty('--size');
      }
    }
  }

  render() {
    return html`
      
    `;
  }
}

window.customElements.define('loloof64-chessboard', ChessBoard);
