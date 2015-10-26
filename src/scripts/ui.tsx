/// <reference path="../../typings/tsd.d.ts"/>

import React = __React;

import { Chess } from './glossary';
import { Board } from './board';
import { Game } from './game';

export class UI {
  constructor(public game: Game, public orientation = Chess.Side.White) {}

  render() {
    let mountpoint = document.querySelector('#mountpoint');

    React.render(<Board setup={this.game.boardSetup} />, mountpoint);
  }
}
