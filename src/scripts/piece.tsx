/// <reference path="../../typings/tsd.d.ts"/>

import React = __React;

import { Chess } from './glossary';
import { Game } from './game';
import { Square } from './square';

interface Props {
  side: Chess.Side,
  type: Chess.Piece,
  square: Square,
  game: Game
}

export interface PieceSetup {
  side: Chess.Side,
  type: Chess.Piece,
  row: number,
  col: number
}

export class Piece extends React.Component<Props, any> {
  color() {
    return Chess.Side[this.props.side].toLowerCase();
  }

  handleClick(event) {
    console.log('Piece clicked', event);
    this.props.game.onPieceClick(this);
  }

  render() {
    return <span onClick={this.handleClick.bind(this)} className={this.color()}>
      {Chess.Piece[this.props.type]}
    </span>;
  }
}
