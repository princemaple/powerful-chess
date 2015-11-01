/// <reference path="../../typings/tsd.d.ts"/>

import React = __React;

import { Chess } from './glossary';
import { Game } from './game';
import { Board } from './board';
import { Piece, PieceSetup } from './piece';

interface Props {
  rank: Chess.Rank,
  file: Chess.File,
  piece: PieceSetup,
  board: Board,
  game: Game
}

export interface SquareSetup {
  rank: Chess.Rank,
  file: Chess.File,
  piece?: PieceSetup,
}

export class Square extends React.Component<Props, any> {
  color() {
    return Chess.colors[((this.props.rank % 2) + this.props.file + 1) % 2];
  }

  notation() {
    return Chess.File[this.props.file] + (this.props.rank + 1).toString();
  }

  classList() {
    return ['square', Chess.Color[this.color()].toLowerCase()].join(' ');
  }

  handleClick(event) {
    console.log('Square clicked', event);
    this.props.game.onSquareClick(this);
  }

  render() {
    let piece: any = '';

    if (this.props.piece) {
      piece = <Piece {...this.props.piece} square={this} game={this.props.game} />
    }

    return <div className={this.classList()} onClick={this.handleClick.bind(this)}>
      <span>{this.notation()}</span>
      {piece}
    </div>;
  }
}
