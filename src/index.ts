import { startLogger } from "./logger";
import { game } from "./store";

let t: string = "1";

setInterval(() => {
  t + 1;
  game.addGame(t);
}, 2000);

startLogger();
