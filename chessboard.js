import {LitElement, html, css} from 'lit';

/**
 * A chessboard component
 * 
 * CSS variables :
 * --size: (String) size of the chess board, in whatever unit you want. Defaults to 100px.
 * --backgroundColor: (String) color of the background. Defaults to pink.
 * @fires count-changed - Indicates when the count changes
 * @csspart button - The button
 */
export class ChessBoard extends LitElement {
  static get styles() {
    return css`
      :host {
        --defaultSize: 100px;
        --defaultBackgroundColor: pink;
        display: grid;
        width: var(--size, var(--defaultSize));
        height: var(--size, var(--defaultSize));
        background-color: var(--backgroundColor, var(--defaultBackgroundColor));
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
