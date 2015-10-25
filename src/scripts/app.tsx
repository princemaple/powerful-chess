/// <reference path="../../typings/tsd.d.ts"/>

import React = __React;
import ReactDOM = __ReactDom;

import { Chess } from './glossary';
import { Board } from './board';

class Game {
  constructor(public board = new Board()) {}
}

class UI {
  orientation: Chess.Side;

  constructor(public board: Board, orientation = Chess.Side.White) {}

  render() {
    let mountpoint = document.querySelector('#mountpoint');

    ReactDOM.render(<Board></Board>, mountpoint);
  }
}

let game = new Game();
let ui = new UI(game.board);

ui.render();
