import { GameSheet, blankSheet } from "./GameSheet";

export default class Persistance {
    localStorage: Storage = window.localStorage;

    public clear(): void {
        localStorage.clear();
    }

    public loadLastGame(): GameSheet {
        const game = this.localStorage.getItem('game');
        return game ? JSON.parse(game) : blankSheet;
    }

    public saveCurrentGame(currentGame: GameSheet): void {
        this.localStorage.setItem('game', JSON.stringify(currentGame));
    }
}
