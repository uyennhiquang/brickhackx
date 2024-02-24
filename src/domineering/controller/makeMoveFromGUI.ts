import { Domineering } from "../model/domineering";

const makeMoveFromGUI = (row: number, col: number , model: Domineering) => {
  const activePlayer = model.players[model.activePlayer];
  model.makeMove(row, col);

  console.log(activePlayer.direction, model.board);
}

export { makeMoveFromGUI };