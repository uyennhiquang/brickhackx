import { Direction, Player } from "./player";

const VPLAYER_INDEX = 0;
const HPLAYER_INDEX = 1;

const EMPTY = 0;
const FILLED = 1;

const MAX_ROWS = 5;
const MAX_COLS = 5;


/**
 * Domineering is implemented as a game played on a 5x5 board; each player places a domino of their direction -- either horizontal or vertical. The game is over if a player is unable to place their piece, in which case that player loses the game.
*/
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

  /**
   *  The game begins by taking two names of the players: one for the vertical player, another for horizontal. When instantiated:
   * A 5x5 2D list is created
   * A list of vplayer and hplayer
   * The number of pieces placed is 0
   * The players list index that represent a vplayer/player is randomly decided
   * @param vplayerName 
   * @param hplayerName 
   */
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

  /**
   *  The game is over if the number of pieces placed is floor(<total_squares / 2>). When a player makes a move the game checks whether or not the game is over after the move is successfully made. If it is, the other player loses.
   * @returns gameOverStatus
   */
  isGameOver(): boolean {
    return this.piecesPlaced == Domineering.MAX_PIECES_PLAYED;
  }

  switchPlayer(): void {
    this.activePlayer = this.activePlayer == VPLAYER_INDEX ? HPLAYER_INDEX : VPLAYER_INDEX;
  }

}

export { Domineering };