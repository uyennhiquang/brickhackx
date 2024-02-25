import { Direction } from "../model/player";
import { Domineering } from "../model/domineering";
// import { gui } from "../../index";

const BLUE = "aab7f2";
const RED = "c30211";

const updateSquareToGUI = (row: number, col: number, direction: Direction) => {
  const tBodyEl = document.getElementById("table--game").firstElementChild;
  // const squares: HTMLElement[] = [];


  let locations: {
    row: number,
    col: number,
  }[];

  if (direction == Direction.Vertical) {
    locations = [
      {
        row: row,
        col: col,
      },
      {
        row: row + 1,
        col: col,
      },
    ];
  } else {
    locations = [
      {
        row: row,
        col: col,
      },
      {
        row: row,
        col: col + 1,
      },
    ];
  }


  // let squares = locations.map((location) => {
  //   for (let row = 0; row < Domineering.MAX_ROWS; row++) {
  //     const currentRow = tBodyEl.children[row];
  //     for (let col = 0; col < Domineering.MAX_COLS; col++) {
  //       const currentTD = currentRow.children[col];
  //       if (location.row == row && location.col == col) {
  //         return currentTD;
  //       }
  //     }
  //   }
  // });

  locations.forEach((location) => {
    for (let row = 0; row < Domineering.MAX_ROWS; row++) {
      const currentRow = tBodyEl.children[row];
      // console.log
      for (let col = 0; col < Domineering.MAX_COLS; col++) {
        const currentTD = currentRow.children[col];
        if (location.row == row && location.col == col) {
          // return currentTD;
          // const color = location.direction == Direction.Vertical ? BLUE : RED;
          currentTD.classList.add(direction == Direction.Vertical ? "filled--vertical" : "filled--horizontal");

        }
      }
    }
  });
};

export { updateSquareToGUI };
