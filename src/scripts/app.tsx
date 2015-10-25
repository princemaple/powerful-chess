/// <reference path="../../typings/tsd.d.ts"/>

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

    ReactDOM.render(this.board.render(), mountpoint);
  }
}

let game = new Game();
let ui = new UI(game.board);

console.log(game);
console.log(game.board);
console.log(ui);

ui.render();
