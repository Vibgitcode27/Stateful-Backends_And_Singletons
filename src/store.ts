interface Game {
  id: string;
  whitePlayerName: string;
  blackPlayerName: string;
  moves: string[];
}

export class GameManager {
  private game: Game[] = [];
  private static instance: GameManager;
  private constructor() {
    this.game = [];
  }

  static instantiate() {
    if (!this.instance) {
      this.instance = new GameManager();
    }

    return this.instance;
  }

  addMove(gameId: string, move: string) {
    const game = this.game.find((game) => game.id === gameId);
    if (game) {
      game.moves.push(move);
    }
  }

  addGame(gameId: string) {
    let newGame = {
      id: gameId,
      whitePlayerName: "Alice",
      blackPlayerName: "James",
      moves: [],
    };

    this.game.push(newGame);
  }
}

// export const game = new GameManager();

// Implementing sinleton pattern
// to make this possible we first make constructor private/
// and make a static function that creates an instance
export const game = GameManager.instantiate();
