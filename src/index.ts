import "../assets/styles/reset.css";
import "../assets/styles/styles.css";

import { Domineering } from "./domineering/model/domineering";

const model = new Domineering("vplayer", "hplayer");

const startBtnElt = document.getElementById("button--start");
const menuDisplayElt = document.getElementById("display--menu");
const gameDisplayElt = document.getElementById("display--game");

startBtnElt.addEventListener("click", () => {
  // menuDisplayElt.classList.toggle("hidden");
  gameDisplayElt.classList.toggle("hidden");
});

// console.log(menuDisplayElt);