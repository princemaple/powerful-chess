/// <reference path="../../typings/tsd.d.ts"/>

import React = __React;

import { Chess } from './glossary';
import { Square } from './square';
import * as Piece from './piece';

let initialSetup : Array<any> = [
  { row: 0, col: 0, side: Chess.Side.Black, type: Chess.Piece.Rook },
  { row: 0, col: 1, side: Chess.Side.Black, type: Chess.Piece.Knight },
  { row: 0, col: 2, side: Chess.Side.Black, type: Chess.Piece.Bishop },
  { row: 0, col: 3, side: Chess.Side.Black, type: Chess.Piece.Queen },
  { row: 0, col: 4, side: Chess.Side.Black, type: Chess.Piece.King },
  { row: 0, col: 5, side: Chess.Side.Black, type: Chess.Piece.Bishop },
  { row: 0, col: 6, side: Chess.Side.Black, type: Chess.Piece.Knight },
  { row: 0, col: 7, side: Chess.Side.Black, type: Chess.Piece.Rook },
  { row: 1, col: 0, side: Chess.Side.Black, type: Chess.Piece.Pawn },
  { row: 1, col: 1, side: Chess.Side.Black, type: Chess.Piece.Pawn },
  { row: 1, col: 2, side: Chess.Side.Black, type: Chess.Piece.Pawn },
  { row: 1, col: 3, side: Chess.Side.Black, type: Chess.Piece.Pawn },
  { row: 1, col: 4, side: Chess.Side.Black, type: Chess.Piece.Pawn },
  { row: 1, col: 5, side: Chess.Side.Black, type: Chess.Piece.Pawn },
  { row: 1, col: 6, side: Chess.Side.Black, type: Chess.Piece.Pawn },
  { row: 1, col: 7, side: Chess.Side.Black, type: Chess.Piece.Pawn },
  { row: 6, col: 0, side: Chess.Side.White, type: Chess.Piece.Pawn },
  { row: 6, col: 1, side: Chess.Side.White, type: Chess.Piece.Pawn },
  { row: 6, col: 2, side: Chess.Side.White, type: Chess.Piece.Pawn },
  { row: 6, col: 3, side: Chess.Side.White, type: Chess.Piece.Pawn },
  { row: 6, col: 4, side: Chess.Side.White, type: Chess.Piece.Pawn },
  { row: 6, col: 5, side: Chess.Side.White, type: Chess.Piece.Pawn },
  { row: 6, col: 6, side: Chess.Side.White, type: Chess.Piece.Pawn },
  { row: 6, col: 7, side: Chess.Side.White, type: Chess.Piece.Pawn },
  { row: 7, col: 0, side: Chess.Side.White, type: Chess.Piece.Rook },
  { row: 7, col: 1, side: Chess.Side.White, type: Chess.Piece.Knight },
  { row: 7, col: 2, side: Chess.Side.White, type: Chess.Piece.Bishop },
  { row: 7, col: 3, side: Chess.Side.White, type: Chess.Piece.King },
  { row: 7, col: 4, side: Chess.Side.White, type: Chess.Piece.Queen },
  { row: 7, col: 5, side: Chess.Side.White, type: Chess.Piece.Bishop },
  { row: 7, col: 6, side: Chess.Side.White, type: Chess.Piece.Knight },
  { row: 7, col: 7, side: Chess.Side.White, type: Chess.Piece.Rook },
]

export class Board extends React.Component<{}, any> {
  squares: Array<Array<any>>;
  pieces: Array<any>;

  constructor() {
    super();

    this.initSquares();
    this.initPieces();

    this.state = { squares: this.squares, pieces: this.pieces };
  }

  initSquares() {
    this.squares = [];

    for (let i = 0; i < 8; ++i) {
      let row = [];

      for (let j = 0; j < 8; ++j) {
        row.push({
            rank: Chess.ranks[i],
            file: Chess.files[j]
        });
      }

      this.squares.push(row);
    }
  }

  initPieces() {
    this.pieces = [];

    for (let piece of initialSetup) {
      let square = this.squares[piece.row][piece.col];
      square.piece = piece;
      piece.square = square;
      this.pieces.push(piece);
    }
  }

  render() {
    return <div id="board">
    {
      this.state.squares.map(
        row => row.map(
          square =>
            <Square piece={square.piece} rank={square.rank} file={square.file}></Square>))
    }
    </div>;
  }
}
