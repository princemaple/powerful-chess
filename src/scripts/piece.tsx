/// <reference path="../../typings/tsd.d.ts"/>

import React = __React;

import { Chess } from './glossary';
import { Square } from './square';

interface Props {
  side: Chess.Side,
  type: Chess.Piece
}

export class Piece extends React.Component<Props, any> {
  render() {
    return <span>{Chess.Piece[this.props.type]}</span>;
  }
}
