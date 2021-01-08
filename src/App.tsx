import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <CharacterList></CharacterList>
      <WordSection></WordSection>
      <GuessSection></GuessSection>
    </div>
  );
}

function CharacterList() {
  return (
    <div id="charList">
      <span className="activeChar">A</span>
      <span className="activeChar">B</span>
      <span className="activeChar">C</span>
      <span className="activeChar">D</span>
      <span className="activeChar">E</span>
      <span className="activeChar">F</span>
      <span className="activeChar">G</span>
      <span className="activeChar">H</span>
      <span className="activeChar">I</span>
      <span className="inactiveChar">J</span>
      <span className="activeChar">K</span>
      <span className="activeChar">L</span>
      <span className="activeChar">M</span>
      <span className="activeChar">N</span>
      <span className="activeChar">O</span>
      <span className="activeChar">P</span>
      <span className="inactiveChar">Q</span>
      <span className="activeChar">R</span>
      <span className="activeChar">S</span>
      <span className="activeChar">T</span>
      <span className="activeChar">U</span>
      <span className="inactiveChar">V</span>
      <span className="activeChar">W</span>
      <span className="inactiveChar">X</span>
      <span className="activeChar">Y</span>
      <span className="inactiveChar">Z</span>
    </div>
  );
}

function WordLine() {
  return (
    <div>
      <input type="text" title="a1" className="singleInput line1" placeholder="1"></input>
      <input type="text" title="a2" className="singleInput line2" placeholder="2"></input>
      <input type="text" title="a3" className="singleInput line3" placeholder="3"></input>
      <input type="text" title="a4" className="singleInput line4" placeholder="4"></input>
      <input type="text" title="a5" className="singleInput line5" placeholder="5"></input>
      <input type="text" title="a6" className="singleInput line6" placeholder="6"></input>
      <input type="text" title="a7" className="singleInput line7" placeholder="7"></input>
      <input type="text" title="a8" className="singleInput line8" placeholder="8"></input>
      <input type="text" title="a9" className="singleInput line9" placeholder="9..."></input>
      <input type="text" title="character" className="guesses"></input>
    </div>
  );
}

function WordSection() {
  return (
    <div id="wordSection">
      <div className="wordChunk">
        <WordLine></WordLine>
        <WordLine></WordLine>
        <WordLine></WordLine>
        <WordLine></WordLine>
        <WordLine></WordLine>
      </div>
      <div className="wordChunk">
        <WordLine></WordLine>
        <WordLine></WordLine>
        <WordLine></WordLine>
        <WordLine></WordLine>
        <WordLine></WordLine>
      </div>
    </div>
  );
}

function GuessSection() {
  return (
    <div id="guessSection">
      <div>
        <input type="text" title="g1" className="singleInput big"></input>
        <input type="text" title="g2" className="singleInput big"></input>
        <input type="text" title="g3" className="singleInput big"></input>
        <input type="text" title="g4" className="singleInput big"></input>
        <input type="text" title="g5" className="singleInput big"></input>
        <input type="text" title="g6" className="singleInput big"></input>
        <input type="text" title="g7" className="singleInput big"></input>
      </div>
      <div>
        <input type="text" title="g1" className="singleInput big darkBg"></input>
        <input type="text" title="g2" className="singleInput big darkBg"></input>
        <input type="text" title="g3" className="singleInput big darkBg"></input>
        <input type="text" title="g4" className="singleInput big darkBg"></input>
        <input type="text" title="g5" className="singleInput big darkBg"></input>
        <input type="text" title="g6" className="singleInput big darkBg"></input>
        <input type="text" title="g7" className="singleInput big darkBg"></input>
      </div>
    </div>
  );
}

export default App;
