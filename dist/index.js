"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const logger_1 = require("./logger");
const game = new store_1.GameManager();
let t = "1";
setInterval(() => {
    t + 1;
    game.addGame(t);
}, 2000);
(0, logger_1.startLogger)(game);
