/// <reference path="../../typings/tsd.d.ts"/>

import React = __React;

import { Chess } from './glossary';
import { Square, SquareSetup } from './square';
import { PieceSetup } from './piece';

interface Props {
  setup: Array<PieceSetup>
}

export class Board extends React.Component<Props, any> {
  squares: Array<Array<SquareSetup>>;
  pieces: Array<PieceSetup>;

  constructor(props) {
    super(props);

    this.initSquares();
    this.initPieces(props.setup);
    this.updatePower();

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

  initPieces(setup) {
    this.pieces = [];

    for (let piece of setup) {
      let square = this.squares[piece.row][piece.col];
      square.piece = piece;
      piece.square = square;
      this.pieces.push(piece);
    }
  }

  updatePower() {

  }

  update() {
    this.setState(this.state);
  }

  handleClick() {
    console.log(this);
  }

  render() {
    return <div id="board" onClick={this.handleClick.bind(this)}>
    {
      this.state.squares.map(
        row => row.map(
          square => <Square {...square} board={this}></Square>))
    }
    </div>;
  }
}
