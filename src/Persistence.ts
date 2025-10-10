import { GameSheetV1, blankSheet } from "./GameSheet";

export default class Persistence {
  localStorage: Storage = window.localStorage;

  public clear(): void {
    localStorage.clear();
  }

  public loadLastGame(): GameSheetV1 {
    const game = this.localStorage.getItem("gameV1");
    return game ? JSON.parse(game) : blankSheet;
  }

  public saveCurrentGame(currentGame: GameSheetV1): void {
    this.localStorage.setItem("gameV1", JSON.stringify(currentGame));
  }
}
