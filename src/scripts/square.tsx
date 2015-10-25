/// <reference path="../../typings/tsd.d.ts"/>

import React = __React;

import { Chess } from './glossary';
import { Piece } from './piece';

interface Props {
  piece: { side: Chess.Side, type: Chess.Piece },
  rank: Chess.Rank,
  file: Chess.File
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
      {this.props.piece ? <Piece side={this.props.piece.side} type={this.props.piece.type}></Piece> : ''}
    </div>;
  }
}
