import { Direction, Player } from "./player";
import { updateSquareToGUI } from "../controller/updateSquareToGUI";

/**
 * Domineering is implemented as a game played on a 5x5 board; each player places a domino of their direction -- either horizontal or vertical. The game is over if a player is unable to place their piece, in which case that player loses the game.
 */
class Domineering {
  static VPLAYER_INDEX = 0;
  static HPLAYER_INDEX = 1;

  static MAX_ROWS = 5;
  static MAX_COLS = 5;

  static EMPTY = 0;
  static FILLED = 1;

  static MAX_PIECES_PLAYED = Math.floor(
    (Domineering.MAX_ROWS * Domineering.MAX_COLS) / 2
  );

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
      const row = [];
      for (let col = 0; col < Domineering.MAX_COLS; col++) {
        row.push(Domineering.EMPTY);
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
    this.activePlayer =
      this.activePlayer == Domineering.VPLAYER_INDEX
        ? Domineering.HPLAYER_INDEX
        : Domineering.VPLAYER_INDEX;
  }
  /**
   * Determines the active player so that their direction can be determined.
   * Checks if the move specified at row, col is valid. There are two cases:
   * If the move is invalid, the move is not made.
   * If the  move is valid, the spaces on the board that the piece takes up will be changed to 1 to indicate being filled.
   * If the active player places vertically, the piece will be placed vertically.
   * If the active player places horizontally, the piece will be placed horizontally.
   * The position clicked will always fill, if valid move. 
   * @param row 
   * @param col 
   */
  makeMove(row: number, col: number): void {
    const activePlayer = this.players[this.activePlayer];
    if (this.validateMove(row, col, activePlayer.direction)){
      this.board[row][col] = Domineering.FILLED;
      if(activePlayer.direction == Direction.Vertical){
        this.board[row+1][col] = Domineering.FILLED;
      }
      else{
        this.board[row][col+1] = Domineering.FILLED;
      }

      this.notify(row, col, activePlayer.direction);
      this.switchPlayer();
      
    }
  }

  /**
   * Checks whether or not it's possible to place a piece onto the board. There are 3 cases:
   * Row/Col is completely off -> false
   * If vertical piece
   *  + If the square to be placed or the square below it is filled -> false
   * If horizontal piece
   *  + if the square to be placed or the square to the right of it -> false
   * Otherwise, true
   * @param row 
   * @param col 
   * @param direction 
   * @returns valid
   */
  validateMove(row: number, col: number, direction: Direction): boolean {
    let valid: boolean;
    // If move's row and/or col is completely off
    if (row > Domineering.MAX_ROWS - 1 || col > Domineering.MAX_COLS - 1) {
      valid = false;
    } else if (direction == Direction.Vertical) {
      const outOfBound: boolean = row == Domineering.MAX_ROWS - 1;
      if (outOfBound) {
        valid = false;
      } else {
        const occupied: boolean =
          this.board[row][col] == Domineering.FILLED ||
          this.board[row + 1][col] == Domineering.FILLED;
        valid = occupied ? false : true;
      }
    } else if (direction == Direction.Horizontal) {
      const outOfBound: boolean = col == Domineering.MAX_COLS - 1;
      if (outOfBound) {
        valid = false;
      } else {
        const occupied: boolean =
          this.board[row][col] == Domineering.FILLED ||
          this.board[row][col + 1] == Domineering.FILLED;
        valid = occupied ? false : true;
      }
    }

    return valid;
  }

  notify(row: number, col: number, direction: Direction): void {
    updateSquareToGUI(row, col, direction);
  }
}

export { Domineering };
