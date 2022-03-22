import {LitElement, html, css} from 'lit';

/**
 * A chessboard component
 * 
 * CSS variables :
 * size: (String) size of the chess board, in whatever unit you want. Defaults to 100px.
 * backgroundColor: (String) color of the background. Defaults to pink.
 */
export class ChessBoard extends LitElement {
  static get styles() {
    return css`
      :host {
        --defaultSize: 100px;
        --defaultBackgroundColor: pink;
        display: grid;
        width: var(--size);
        height: var(--size);
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

  constructor() {
    super();
    this._defaultSize = '100px';
  }

  updated(changes) {
    if (changes.has('size')) {
      const groups = this.size.match(/([0-9\.]+)(.*)/);
      const sizeValue = parseFloat(groups[1]);
      const unit = groups[2];
      const halfSizeValue = sizeValue / 2.0;
      this.style.setProperty('--size', this.size);
      this.style.setProperty('--half-size', `${halfSizeValue}${unit}`);
    }
    else {
      this.style.setProperty('--size', '100px');
      this.style.setProperty('--half-size', '50px');
    }
  }

  render() {
    return html`
      
    `;
  }
}

window.customElements.define('loloof64-chessboard', ChessBoard);
