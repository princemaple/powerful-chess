import { Chess } from './glossary';
import { Board } from './board';
import { Status } from './status';
import { Square } from './square';
import { Piece, PieceSetup } from './piece';

let defaultSetup: PieceSetup[] = [
  { row: 0, col: 0, side: Chess.Side.Black, type: Chess.Piece.Rook },
  { row: 0, col: 1, side: Chess.Side.Black, type: Chess.Piece.Knight },
  { row: 0, col: 2, side: Chess.Side.Black, type: Chess.Piece.Bishop },
  { row: 0, col: 3, side: Chess.Side.Black, type: Chess.Piece.Queen },
  { row: 0, col: 4, side: Chess.Side.Black, type: Chess.Piece.King },
  { row: 0, col: 5, side: Chess.Side.Black, type: Chess.Piece.Bishop },
  { row: 0, col: 6, side: Chess.Side.Black, type: Chess.Piece.Knight },
  { row: 0, col: 7, side: Chess.Side.Black, type: Chess.Piece.Rook },
  { row: 1, col: 0, side: Chess.Side.Black, type: Chess.Piece.Pawn },
  { row: 1, col: 1, side: Chess.Side.Black, type: Chess.Piece.Pawn },
  { row: 1, col: 2, side: Chess.Side.Black, type: Chess.Piece.Pawn },
  { row: 1, col: 3, side: Chess.Side.Black, type: Chess.Piece.Pawn },
  { row: 1, col: 4, side: Chess.Side.Black, type: Chess.Piece.Pawn },
  { row: 1, col: 5, side: Chess.Side.Black, type: Chess.Piece.Pawn },
  { row: 1, col: 6, side: Chess.Side.Black, type: Chess.Piece.Pawn },
  { row: 1, col: 7, side: Chess.Side.Black, type: Chess.Piece.Pawn },
  { row: 6, col: 0, side: Chess.Side.White, type: Chess.Piece.Pawn },
  { row: 6, col: 1, side: Chess.Side.White, type: Chess.Piece.Pawn },
  { row: 6, col: 2, side: Chess.Side.White, type: Chess.Piece.Pawn },
  { row: 6, col: 3, side: Chess.Side.White, type: Chess.Piece.Pawn },
  { row: 6, col: 4, side: Chess.Side.White, type: Chess.Piece.Pawn },
  { row: 6, col: 5, side: Chess.Side.White, type: Chess.Piece.Pawn },
  { row: 6, col: 6, side: Chess.Side.White, type: Chess.Piece.Pawn },
  { row: 6, col: 7, side: Chess.Side.White, type: Chess.Piece.Pawn },
  { row: 7, col: 0, side: Chess.Side.White, type: Chess.Piece.Rook },
  { row: 7, col: 1, side: Chess.Side.White, type: Chess.Piece.Knight },
  { row: 7, col: 2, side: Chess.Side.White, type: Chess.Piece.Bishop },
  { row: 7, col: 3, side: Chess.Side.White, type: Chess.Piece.King },
  { row: 7, col: 4, side: Chess.Side.White, type: Chess.Piece.Queen },
  { row: 7, col: 5, side: Chess.Side.White, type: Chess.Piece.Bishop },
  { row: 7, col: 6, side: Chess.Side.White, type: Chess.Piece.Knight },
  { row: 7, col: 7, side: Chess.Side.White, type: Chess.Piece.Rook }
];

let plySwitcher = {
  [Chess.Side.White]: Chess.Side.Black,
  [Chess.Side.Black]: Chess.Side.White
};

export class Game {
  board: Board;
  status: Status;

  movingPiece: Piece = null;
  history: string[] = ['aa', 'bb', 'cc'];

  constructor(
    public boardSetup = defaultSetup,
    public currentPly = Chess.Side.White
  ) {}

  swapPly() {
    this.currentPly = plySwitcher[this.currentPly];
  }

  onSquareClick(square:Square) {

  }

  onPieceClick(piece:Piece) {
    if (this.movingPiece) {

    } else {

    }
  }

  update() {
    this.status.update();
  }
}
