export namespace Chess {
  export enum Side { Black, White };
  export enum Color { Dark, Light };
  export enum File { A, B, C, D, E, F, G, H };
  export enum Rank { One, Two, Three, Four, Five, Six, Seven, Eight };

  export let colors = [Color.Light, Color.Dark];
  export let files = [File.A, File.B, File.C, File.D, File.E, File.F, File.G, File.H];
  export let ranks = [Rank.Eight, Rank.Seven, Rank.Six, Rank.Five, Rank.Four, Rank.Three, Rank.Two, Rank.One];
}
