/// <reference path="../../typings/tsd.d.ts"/>

import React = __React;

import { Chess } from './glossary';
import { Square } from './square';

export interface PieceSetup {
  row: number,
  col: number,
  side: Chess.Side,
  type: Chess.Piece,
  square?: Square
}

interface Props {
  side: Chess.Side,
  type: Chess.Piece
}

export class Piece extends React.Component<Props, any> {
  handleClick(event) {
    console.log(event);
  }

  render() {
    return <span onClick={this.handleClick}>{Chess.Piece[this.props.type]}</span>;
  }
}
