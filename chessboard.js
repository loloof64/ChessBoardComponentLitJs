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
        --defaultSize: 10px;
        display: inline-flex;
        width: var(--size, var(--defaultSize));
        height: var(--size, var(--defaultSize));
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

  render() {
    return html`
      
    `;
  }
}

window.customElements.define('loloof64-chessboard', ChessBoard);
