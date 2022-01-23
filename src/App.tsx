import React, { useState } from 'react';

import './App.css';
import { GameSheet, RoundLine } from './GameSheet';
import Persistance from './Persistance';
import { CharacterList } from './components/CharacterList';
import { WordSection } from './components/WordSection';
import { LetterSection, LetterSectionType } from './components/LetterSection';

const gameState = new Persistance();

function App() {
  const [sheet, setSheet] = useState(loadState());

  function loadState(): GameSheet {
    return gameState.loadLastGame();
  }

  function saveState(sheet: GameSheet): void {
    gameState.saveCurrentGame(sheet);
  }

  function wordSectionUpdated(lines: Array<RoundLine>): void {

    const newSheet: GameSheet = {
      ...sheet,
      lines: lines
    };

    setSheet({
      ...newSheet
    });

    saveState(sheet);
  }

  function derivedLettersSectionCallback(derivedLetters: Array<string>) {
    console.log(derivedLetters);

    const newSheet: GameSheet = {
      ...sheet,
      derivedLetters: derivedLetters
    };

    setSheet({
      ...newSheet
    });

    saveState(sheet);
  }

  function guessSectionCallback(guesses: Array<string>) {
    console.log(guesses);

    setSheet({
      ...sheet,
      guessLetters: guesses
    });

    saveState(sheet);
  }

  return (
    <div className="App">
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
