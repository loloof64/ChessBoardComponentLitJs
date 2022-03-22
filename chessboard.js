import {LitElement, html, css} from 'lit';

/**
 * A chessboard component.
 */
export class ChessBoard extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-flex;
        width: var(--size);
        height: var(--size);
        background-color: var(--backgroundColor);
      }

      .lower_layer {
        display: grid;
        grid-template: var(--grid-template);
      }

      .coordinate {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--coordinates-color);
        font-size: var(--coordinates-font-size);
      }
    `;
  }

  static get properties() {
    return {
      /**
       * The common size width/height of the board, in whatever unit you want. Defaults to 100px.
       * @type {String}
       */
      size: {type: String},

      /**
       * Is the black side at the bottom of the board ? Defaults to false.
       * @type {Boolean}
       */
      reversed: {type: Boolean},

      /**
       * The background color. Defaults to pink.
       * @type {String}
       */
      backgroundColor: {type: String},

      /**
       * The coordinates color. Defaults to yellow.
       * @type {String}
       */
      coordinatesColor: {type: String},
    };
  }

  constructor() {
    super();

    this.style.setProperty('--backgroundColor', 'pink');
    this.style.setProperty('--coordinates-color', 'yellow');

    this.style.setProperty('--size', '100px');
    this.style.setProperty('--cells-size', '50px');
    const cellsSize = 50 / 9.0;
    const halfCellsSize = cellsSize / 2.0;
    const coordinatesFontSize = cellsSize * 0.00125;
    this.style.setProperty('--grid-template', `${halfCellsSize}px repeat(8, ${cellsSize}px) ${halfCellsSize}px / ${halfCellsSize}px repeat(8, ${cellsSize}px) ${halfCellsSize}px`);
    this.style.setProperty('--coordinates-font-size', `${coordinatesFontSize}px`);


  }

  _rowCells(rowIndex) {
    return html`<div class="coordinate">${rowIndex}</div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                <div class="coordinate">${rowIndex}</div>`;
  }

  updated(changes) {
    if (changes.has('size')) {
      const groups = this.size.match(/([0-9\.]+)(.*)/);
      const sizeValue = parseFloat(groups[1]);
      const unit = groups[2];
      const cellsSize = sizeValue / 9.0;
      const halfCellsSize = cellsSize / 2.0;
      const coordinatesFontSize = cellsSize * 0.425;
      this.style.setProperty('--size', this.size);
      this.style.setProperty('--cells-size', `${cellsSize}${unit}`);
      this.style.setProperty('--grid-template', `${halfCellsSize}${unit} repeat(8, ${cellsSize}${unit}) ${halfCellsSize}${unit} / ${halfCellsSize}${unit} repeat(8, ${cellsSize}${unit}) ${halfCellsSize}${unit}`);
      this.style.setProperty('--coordinates-font-size', `${coordinatesFontSize}${unit}`);
    }

    if (changes.has('backgroundColor')) {
      this.style.setProperty('--backgroundColor', this.backgroundColor);
    }

    if (changes.has('coordinates-color')) {
      this.style.setProperty('--coordinates-color', this.coordinatesColor);
    }
  }

  render() {
    return html`
      <div class="lower_layer">
        <div></div>
        <div class="coordinate">${this.reversed ? 'H' : 'A'}</div>
        <div class="coordinate">${this.reversed ? 'G' : 'B'}</div>
        <div class="coordinate">${this.reversed ? 'F' : 'C'}</div>
        <div class="coordinate">${this.reversed ? 'E' : 'D'}</div>
        <div class="coordinate">${this.reversed ? 'D' : 'E'}</div>
        <div class="coordinate">${this.reversed ? 'C' : 'F'}</div>
        <div class="coordinate">${this.reversed ? 'B' : 'G'}</div>
        <div class="coordinate">${this.reversed ? 'A' : 'H'}</div>
        <div></div>

        ${
          (this.reversed ? [1,2,3,4,5,6,7,8] : [8,7,6,4,5,3,2,1]).map((row) => this._rowCells(row))
        }

        <div></div>
        <div class="coordinate">${this.reversed ? 'H' : 'A'}</div>
        <div class="coordinate">${this.reversed ? 'G' : 'B'}</div>
        <div class="coordinate">${this.reversed ? 'F' : 'C'}</div>
        <div class="coordinate">${this.reversed ? 'E' : 'D'}</div>
        <div class="coordinate">${this.reversed ? 'D' : 'E'}</div>
        <div class="coordinate">${this.reversed ? 'C' : 'F'}</div>
        <div class="coordinate">${this.reversed ? 'B' : 'G'}</div>
        <div class="coordinate">${this.reversed ? 'A' : 'H'}</div>
        <div></div>

      </div>
    `;
  }
}

window.customElements.define('loloof64-chessboard', ChessBoard);
