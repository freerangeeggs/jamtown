import React, { useState } from "react";

export enum LetterSectionType {
  DerivedLetters,
  GuessLetters,
}

type LetterSectionProps = {
  type: LetterSectionType;
  letters: Array<string>;
  callback: (letters: Array<string>) => void;
};

export const LetterSection = (props: LetterSectionProps) => {
  const [letters, setLetters] = useState(props.letters);

  function letterUpdated(index: number, value: string): void {
    const newLetters: Array<string> = letters.map((item, letterIndex) =>
      letterIndex === index ? value : item
    );
    setLetters(newLetters);

    props.callback(newLetters);
  }

  const className: string = `singleInput big${
    props.type === LetterSectionType.DerivedLetters ? "" : " darkBg"
  }`;

  return (
    <div>
      {letters.map((value, index) => (
        <input
          key={index}
          type="text"
          title={index.toString()}
          value={value}
          onChange={(event) => {
            letterUpdated(index, event.target.value);
          }}
          className={className}
        ></input>
      ))}
    </div>
  );
};
