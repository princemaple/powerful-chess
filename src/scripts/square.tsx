/// <reference path="../../typings/tsd.d.ts"/>

import React = __React;

import { Chess } from './glossary';
import { Board } from './board';
import { Piece, PieceSetup } from './piece';

export interface SquareSetup {
  rank: Chess.Rank,
  file: Chess.File,
  piece?: Chess.Piece
}

interface Props {
  piece: PieceSetup,
  rank: Chess.Rank,
  file: Chess.File,
  board: Board
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

  render() {
    return <div className={this.classList()}>
      <span>{this.notation()}</span>
      {this.props.piece ? <Piece {...this.props.piece} /> : ''}
    </div>;
  }
}
