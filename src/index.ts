import "../assets/styles/reset.css";
import "../assets/styles/styles.css";

import { Domineering } from "./domineering/model/domineering";

const model = new Domineering("vplayer", "hplayer");

console.log(model.board);
console.log(model.players);


