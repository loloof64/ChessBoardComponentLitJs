import {ChessBoard} from '../chessboard.js';
import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('loloof64-chessboard', () => {
  test('is defined', () => {
    const el = document.createElement('loloof64-chessboard');
    assert.instanceOf(el, ChessBoard);
  });
});
