import {LitElement, html, css} from 'lit';
import {classMap} from 'lit/directives/class-map.js';
import { Chess } from 'cm-chess/lib/chess.mjs/Chess';

export const EMPTY_BOARD_FEN = '8/8/8/8/8/8/8/8 w - - 0 1';

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

      .white_cell {
        background-color: var(--white-cells-color);
      }

      .black_cell {
        background-color: var(--black-cells-color);
      }

      .player_turn {
        border-radius: var(--half-cells-size);
        width: 95%;
        height: 95%;
      }

      .player_turn-white {
        background-color: white;
      }

      .player_turn-black {
        background-color: black;
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
       * The background color. Defaults to gray.
       * @type {String}
       */
      backgroundColor: {type: String},

      /**
       * The coordinates color. Defaults to orange.
       * @type {String}
       */
      coordinatesColor: {type: String},

      /**
       * White cells color. Defaults to navajowhite.
       * @type {String}
       */
      whiteCellsColor: {type: String},

      /**
       * Black cells color. Defaults to peru.
       * @type {String}
       */
       blackCellsColor: {type: String},
    };
  }

  constructor() {
    super();

    const position = 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1';
    this._gameLogic = new Chess(position);

    this.style.setProperty('--backgroundColor', 'gray');
    this.style.setProperty('--coordinates-color', 'orange');

    this.style.setProperty('--white-cells-color', 'navajowhite');
    this.style.setProperty('--black-cells-color', 'peru');

    this.style.setProperty('--size', '100px');
    this.style.setProperty('--cells-size', '50px');
    this.style.setProperty('--half-cells-size', '25px');
    const cellsSize = 50 / 9.0;
    const halfCellsSize = cellsSize / 2.0;
    const coordinatesFontSize = cellsSize * 0.00125;
    this.style.setProperty('--grid-template', `${halfCellsSize}px repeat(8, ${cellsSize}px) ${halfCellsSize}px / ${halfCellsSize}px repeat(8, ${cellsSize}px) ${halfCellsSize}px`);
    this.style.setProperty('--coordinates-font-size', `${coordinatesFontSize}px`);
  }

  _playerTurn() {
    const isWhiteTurn = this._gameLogic.turn() === 'w';
    const classes = {'player_turn-white': isWhiteTurn, 'player_turn-black': !isWhiteTurn};
    return html`<div class="player_turn ${classMap(classes)}"></div>`
  }

  _cell(rowIndex, colIndex) {
    const isWhiteCell = (rowIndex + colIndex) %2 == 0;
    const classes = {'white_cell': isWhiteCell, 'black_cell': !isWhiteCell};
    return html`<div class=${classMap(classes)}></div>`;
  }

  _rowCells(rowIndex) {
    return html`<div class="coordinate">${rowIndex}</div>
                  ${this.reversed ? this._cell(7-rowIndex, 0) : this._cell(rowIndex, 0)}
                  ${this.reversed ? this._cell(7-rowIndex, 1) : this._cell(rowIndex, 1)}
                  ${this.reversed ? this._cell(7-rowIndex, 2) : this._cell(rowIndex, 2)}
                  ${this.reversed ? this._cell(7-rowIndex, 3) : this._cell(rowIndex, 3)}
                  ${this.reversed ? this._cell(7-rowIndex, 4) : this._cell(rowIndex, 4)}
                  ${this.reversed ? this._cell(7-rowIndex, 5) : this._cell(rowIndex, 5)}
                  ${this.reversed ? this._cell(7-rowIndex, 6) : this._cell(rowIndex, 6)}
                  ${this.reversed ? this._cell(7-rowIndex, 7) : this._cell(rowIndex, 7)}
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
      this.style.setProperty('--half-cells-size', `${halfCellsSize}${unit}`);
      this.style.setProperty('--grid-template', `${halfCellsSize}${unit} repeat(8, ${cellsSize}${unit}) ${halfCellsSize}${unit} / ${halfCellsSize}${unit} repeat(8, ${cellsSize}${unit}) ${halfCellsSize}${unit}`);
      this.style.setProperty('--coordinates-font-size', `${coordinatesFontSize}${unit}`);
    }

    if (changes.has('backgroundColor')) {
      this.style.setProperty('--backgroundColor', this.backgroundColor);
    }

    if (changes.has('coordinatesColor')) {
      this.style.setProperty('--coordinates-color', this.coordinatesColor);
    }

    if (changes.has('whiteCellsColor')) {
      this.style.setProperty('--white-cells-color', this.whiteCellsColor);
    }

    if (changes.has('blackCellsColor')) {
      this.style.setProperty('--black-cells-color', this.blackCellsColor);
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
          (this.reversed ? [1,2,3,4,5,6,7,8] : [8,7,6,5,4,3,2,1]).map((row) => this._rowCells(row))
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
        <div>${this._playerTurn()}</div>

      </div>
    `;
  }
}

window.customElements.define('loloof64-chessboard', ChessBoard);
