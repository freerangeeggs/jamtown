import React, { useState } from "react";
import { RoundLine } from "../GameSheet";

type WordLineProps = {
  line: RoundLine;
  onUpdated: (line: RoundLine) => void;
};

export const WordLine = (props: WordLineProps) => {
  const numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [letters, setLetters] = useState(
    numbers.map((_, index) => props.line.letters[index] ?? "")
  );
  const [guess, setGuess] = useState(props.line.guess);

  function letterChanged(index: number, value: string) {
    const newLetters: Array<string> = letters.map((item, letterIndex) =>
      letterIndex === index ? value : item
    );

    setLetters([...newLetters]);

    props.onUpdated({
      letters: newLetters,
      guess: guess,
    });
  }

  function guessChanged(value: string) {
    setGuess(value);

    props.onUpdated({
      letters: letters,
      guess: value,
    });
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        width: "100%",
      }}
    >
      {numbers.map((item, index) => {
        return (
          <div
            key={index.toString()}
            // onChange={(event) => letterChanged(index, event.target.value)}
            title={item.toString()}
            className={"singleInput line" + item.toString()}
            style={{ flex: countFlexWidth(item) }}
          >
            {/* {letters[index]} */}
            &nbsp;
          </div>
        );
      })}
      <div
        // onChange={(event) => guessChanged(event.target.value)}
        title="character"
        className="guesses"
        style={{ flex: "4 1 0" }}
      >
        {/* {guess} */}&nbsp;
      </div>
    </div>
  );
};

const countFlexWidth = (item: number) => {
  return item == 9 ? "2 1 0" : "1 1 0";
};
