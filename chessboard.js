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
        display: grid;
        width: var(--size);
        height: var(--size);
        background-color: var(--backgroundColor);
        grid-template: var(--grid-template);
      }
    `;
  }

  static get properties() {
    return {
      /**
       * The common size width/height of the board, in whatever unit you want.
       * @type {String}
       */
      size: {type: String},
      /**
       * The background color.
       * @type {String}
       */
      backgroundColor: {type: String},
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
      const cellsSize = sizeValue / 9.0;
      const halfCellsSize = cellsSize / 2.0;
      this.style.setProperty('--size', this.size);
      this.style.setProperty('--cells-size', `${cellsSize}${unit}`);
      this.style.setProperty('--grid-template', `${halfCellsSize}${unit} repeat(8, ${cellsSize}${unit}) ${halfCellsSize}${unit} / ${halfCellsSize}${unit} repeat(8, ${cellsSize}${unit}) ${halfCellsSize}${unit}`);
    }
    else {
      this.style.setProperty('--size', '100px');
      this.style.setProperty('--cells-size', '50px');
      const cellsSize = 50 / 9.0;
      const halfCellsSize = cellsSize / 2.0;
      this.style.setProperty('--grid-template', `${halfCellsSize}px repeat(8, ${cellsSize}px) ${halfCellsSize}px / ${halfCellsSize}px repeat(8, ${cellsSize}px) ${halfCellsSize}px`);
    }

    if (changes.has('backgroundColor')) {
      this.style.setProperty('--backgroundColor', this.backgroundColor);
    }
    else {
      this.style.setProperty('--backgroundColor', 'blue');
    }
  }

  render() {
    return html`
      
    `;
  }
}

window.customElements.define('loloof64-chessboard', ChessBoard);
