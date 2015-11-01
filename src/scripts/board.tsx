/// <reference path="../../typings/tsd.d.ts"/>

import React = __React;

import { Chess } from './glossary';
import { Game } from './game';
import { Square, SquareSetup } from './square';
import { PieceSetup } from './piece';

interface Props {
  game: Game
}

type BoardSetup = PieceSetup[];

export class Board extends React.Component<Props, any> {
  squares: SquareSetup[][];
  pieces: PieceSetup[];

  constructor(props:Props) {
    super(props);

    props.game.board = this;

    this.initSquares();
    this.initPieces(props.game.boardSetup);
    this.updatePower();

    this.state = { squares: this.squares, pieces: this.pieces };
  }

  initSquares() {
    this.squares = [];

    for (let i = 0; i < 8; ++i) {
      let row: SquareSetup[] = [];

      for (let j = 0; j < 8; ++j) {
        row.push({ rank: Chess.ranks[i], file: Chess.files[j] });
      }

      this.squares.push(row);
    }
  }

  initPieces(setup: BoardSetup) {
    this.pieces = [];

    for (let piece of setup) {
      let square = this.squares[piece.row][piece.col];
      square.piece = piece;
      this.pieces.push(piece);
    }
  }

  updatePower() {

  }

  update() {
    this.setState(this.state);
  }

  handleClick(event) {
    console.log('Board clicked', event);
  }

  render() {
    let game = this.props.game;

    return <div id="board" onClick={this.handleClick.bind(this)}>
    {
      this.state.squares.map(
        row => row.map(
          square => <Square {...square} board={this} game={game} />))
    }
    </div>;
  }
}
