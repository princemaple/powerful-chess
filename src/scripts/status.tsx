/// <reference path="../../typings/tsd.d.ts"/>

import React = __React;

import { Chess } from './glossary';
import { Game } from './game';

interface Props {
  game: Game
}

export class Status extends React.Component<Props, any> {
  constructor(props:Props) {
    super(props);

    props.game.status = this;
    this.state = { game: props.game };
  }

  playerToMove() {
    return Chess.Side[this.props.game.currentRound];
  }

  update() {
    this.setState(this.state);
  }

  render() {
    return <div id="status">
      <h3>{this.playerToMove()} to move</h3>
      Move history:
      <pre>
        {this.props.game.history.join('\n').trim()}
      </pre>
    </div>;
  }
}
