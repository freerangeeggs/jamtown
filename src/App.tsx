import React, { useState } from 'react';

import './App.css';
import { GameSheetV1, RoundLine } from './GameSheet';
import Persistance from './Persistance';
import { CharacterList } from './components/CharacterList';
import { WordSection } from './components/WordSection';
import { LetterSection, LetterSectionType } from './components/LetterSection';

const gameState = new Persistance();

function App() {
  const [sheet, setSheet] = useState(loadState());

  function loadState(): GameSheetV1 {
    return gameState.loadLastGame();
  }

  function saveState(sheet: GameSheetV1): void {
    gameState.saveCurrentGame(sheet);
  }

  function newGame(): void {
    gameState.clear();

    //TODO: Find out why setting state does not refresh page
    setSheet(loadState());

    window.location.reload();
  }

  function wordSectionUpdated(lines: Array<RoundLine>): void {

    const newSheet: GameSheetV1 = {
      ...sheet,
      lines: lines
    };

    setSheet({
      ...newSheet
    });

    saveState(newSheet);
  }

  function derivedLettersSectionCallback(derivedLetters: Array<string>) {
    console.log(derivedLetters);

    const newSheet: GameSheetV1 = {
      ...sheet,
      derivedLetters: derivedLetters
    };

    setSheet({
      ...newSheet
    });

    saveState(newSheet);
  }

  function guessSectionCallback(guesses: Array<string>) {
    console.log(guesses);

    const newSheet: GameSheetV1 = {
      ...sheet,
      guessLetters: guesses
    };

    setSheet({
      ...newSheet
    });

    saveState(newSheet);
  }

  return (
    <div className="App">
      <button onClick={() => newGame()}>New Game</button>
      <CharacterList></CharacterList>
      <WordSection lines={sheet.lines} onUpdated={wordSectionUpdated}></WordSection>
      <div id="guessSection">
        <LetterSection type={LetterSectionType.DerivedLetters} letters={sheet.derivedLetters} callback={derivedLettersSectionCallback}></LetterSection>
        <LetterSection type={LetterSectionType.GuessLetters} letters={sheet.guessLetters} callback={guessSectionCallback}></LetterSection>
      </div>
    </div>
  );
}

export default App;
