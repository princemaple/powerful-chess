/// <reference path="../../typings/tsd.d.ts"/>

import React = __React;
import ReactDOM = __ReactDom;

import { Chess } from './glossary';
import { Board } from './board';
import { Game } from './game';
import { Status } from './status';

export class UI {
  constructor(
    public game: Game,
    public orientation = Chess.Side.White
  ) {}

  render() {
    let board = document.querySelector('#main');
    let pane = document.querySelector('#side');

    ReactDOM.render(<Board game={this.game} />, board);
    ReactDOM.render(<Status game={this.game} />, pane);
  }
}
