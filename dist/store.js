"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManager = void 0;
class GameManager {
    constructor() {
        this.game = [];
    }
    addMove(gameId, move) {
        const game = this.game.find((game) => game.id === gameId);
        if (game) {
            game.moves.push(move);
        }
    }
    addGame(gameId) {
        let newGame = {
            id: gameId,
            whitePlayerName: "Alice",
            blackPlayerName: "James",
            moves: [],
        };
        this.game.push(newGame);
    }
}
exports.GameManager = GameManager;
