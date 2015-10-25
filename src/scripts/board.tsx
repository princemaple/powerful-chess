/// <reference path="../../typings/tsd.d.ts"/>

import React = __React;

import { Chess } from './glossary';
import { Square } from './square';
import * as Piece from './piece';

let initialSetup = [
  { row: 0, col: 0, side: Chess.Side.Black, type: Piece.Rook },
  { row: 0, col: 1, side: Chess.Side.Black, type: Piece.Knight },
  { row: 0, col: 2, side: Chess.Side.Black, type: Piece.Bishop },
  { row: 0, col: 3, side: Chess.Side.Black, type: Piece.Queen },
  { row: 0, col: 4, side: Chess.Side.Black, type: Piece.King },
  { row: 0, col: 5, side: Chess.Side.Black, type: Piece.Bishop },
  { row: 0, col: 6, side: Chess.Side.Black, type: Piece.Knight },
  { row: 0, col: 7, side: Chess.Side.Black, type: Piece.Rook },
  { row: 1, col: 0, side: Chess.Side.Black, type: Piece.Pawn },
  { row: 1, col: 1, side: Chess.Side.Black, type: Piece.Pawn },
  { row: 1, col: 2, side: Chess.Side.Black, type: Piece.Pawn },
  { row: 1, col: 3, side: Chess.Side.Black, type: Piece.Pawn },
  { row: 1, col: 4, side: Chess.Side.Black, type: Piece.Pawn },
  { row: 1, col: 5, side: Chess.Side.Black, type: Piece.Pawn },
  { row: 1, col: 6, side: Chess.Side.Black, type: Piece.Pawn },
  { row: 1, col: 7, side: Chess.Side.Black, type: Piece.Pawn },
  { row: 6, col: 0, side: Chess.Side.White, type: Piece.Pawn },
  { row: 6, col: 1, side: Chess.Side.White, type: Piece.Pawn },
  { row: 6, col: 2, side: Chess.Side.White, type: Piece.Pawn },
  { row: 6, col: 3, side: Chess.Side.White, type: Piece.Pawn },
  { row: 6, col: 4, side: Chess.Side.White, type: Piece.Pawn },
  { row: 6, col: 5, side: Chess.Side.White, type: Piece.Pawn },
  { row: 6, col: 6, side: Chess.Side.White, type: Piece.Pawn },
  { row: 6, col: 7, side: Chess.Side.White, type: Piece.Pawn },
  { row: 7, col: 0, side: Chess.Side.White, type: Piece.Rook },
  { row: 7, col: 1, side: Chess.Side.White, type: Piece.Knight },
  { row: 7, col: 2, side: Chess.Side.White, type: Piece.Bishop },
  { row: 7, col: 3, side: Chess.Side.White, type: Piece.King },
  { row: 7, col: 4, side: Chess.Side.White, type: Piece.Queen },
  { row: 7, col: 5, side: Chess.Side.White, type: Piece.Bishop },
  { row: 7, col: 6, side: Chess.Side.White, type: Piece.Knight },
  { row: 7, col: 7, side: Chess.Side.White, type: Piece.Rook },
]

export class Board extends React.Component<{}, any> {
  squares: Array<Array<Square>>;
  pieces: Array<Piece.Piece>;

  constructor() {
    super();
    this.squares = [];

    for (let i = 0; i < 8; ++i) {
      let row = [];

      for (let j = 0; j < 8; ++j) {
        row.push(
          new Square(
            Chess.ranks[i],
            Chess.files[j]
          )
        );
      }

      this.squares.push(row);
    }

    this.pieces = [];

    for (let setup of initialSetup) {
      let square = this.squares[setup.row][setup.col];
      let piece = new setup.type(setup.side, square);
      this.pieces.push(piece);
      square.piece = piece;
    }
  }

  render() {
    return <div id="board">
    {
      this.squares.map(row => row.map(cell => cell.render()))
    }
    </div>;
  }
}
