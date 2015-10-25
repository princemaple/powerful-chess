import { Chess } from './glossary';
import { PieceSetup } from './piece';

let defaultSetup : Array<PieceSetup> = [
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
  { row: 7, col: 7, side: Chess.Side.White, type: Chess.Piece.Rook },
]

export class Game {
  constructor(public boardSetup = defaultSetup) {}
}
