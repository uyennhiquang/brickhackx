import { Direction, Player } from "./player";

const VPLAYER_INDEX = 0;
const HPLAYER_INDEX = 1;

const EMPTY = 0;
const FILLED = 1;

const MAX_ROWS = 5;
const MAX_COLS = 5;

class Domineering {
  static VPLAYER_INDEX = 0;
  static HPLAYER_INDEX = 1;

  static MAX_ROWS = 5;
  static MAX_COLS = 5;
  static MAX_PIECES_PLAYED = Math.floor(Domineering.MAX_ROWS * Domineering.MAX_COLS / 2);

  board: number[][];
  piecesPlaced: number;
  players: Player[];
  activePlayer: number;

  constructor(vplayerName: string, hplayerName: string) {
    this.board = [];
    for (let row = 0; row < Domineering.MAX_ROWS; row++) {
      const row  = [];
      for (let col = 0; col <Domineering.MAX_COLS; col++) {
        row.push(EMPTY);
      }
      this.board.push(row);
    }

    const vplayer = new Player(vplayerName, Direction.Vertical);
    const hplayer = new Player(hplayerName, Direction.Horizontal);

    this.piecesPlaced = 0;
    this.players = [vplayer, hplayer];
    this.activePlayer = Math.floor(Math.random() * this.players.length);
  }

  isGameOver(): boolean {
    return this.piecesPlaced == Domineering.MAX_PIECES_PLAYED;
  }

  switchPlayer(): void {
    this.activePlayer = this.activePlayer == VPLAYER_INDEX ? HPLAYER_INDEX : VPLAYER_INDEX;
  }

}

export { Domineering };