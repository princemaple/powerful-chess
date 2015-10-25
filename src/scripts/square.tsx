/// <reference path="../../typings/tsd.d.ts"/>

import React = __React;

import { Chess } from './glossary';
import * as Piece from './piece';

export class Square extends React.Component<{}, any> {
  key: string;

  piece: Piece.Piece;
  color: Chess.Color;

  constructor(public rank: Chess.Rank, public file: Chess.File ) {
    super();
    this.color = Chess.colors[((this.rank % 2) + this.file + 1) % 2];
    this.key = Chess.File[this.file] + (this.rank + 1).toString();
  }

  render() {
    let classList = ['square', Chess.Color[this.color].toLowerCase()].join(' ');
    return <div className={classList}>
      <span>{this.key}</span>
      { this.piece ? this.piece.toString() : '' }
    </div>;
  }
}
