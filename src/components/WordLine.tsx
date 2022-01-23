import React, { useState } from "react";
import { RoundLine } from "../GameSheet";

type WordLineProps = {
    line: RoundLine,
    onUpdated: ((line: RoundLine) => void)
}

export const WordLine = (props: WordLineProps) => {
    const numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const [letters, setLetters] = useState(numbers.map((_, index) => props.line.letters[index] ?? ''));
    const [guess, setGuess] = useState(props.line.guess);

    function letterChanged(index: number, value: string) {
        const newLetters: Array<string> = letters.map((item, letterIndex) => (letterIndex === index) ? value : item);

        setLetters([
            ...newLetters
        ]);

        props.onUpdated({
            letters: newLetters,
            guess: guess
        });
    }

    function guessChanged(value: string) {
        setGuess(value);

        props.onUpdated({
            letters: letters,
            guess: value
        });
    }

    return (
        <div>
            {numbers.map((item, index) => {
                return <input type="text"
                    value={letters[index]}
                    key={index.toString()}
                    onChange={(event) => letterChanged(index, event.target.value)}
                    title={item.toString()}
                    className={'singleInput line' + item.toString()}
                    placeholder={item.toString()}></input>;
            })}
            <input type="text"
                value={guess ?? ''}
                onChange={(event) => guessChanged(event.target.value)}
                title="character"
                className="guesses"></input>
        </div>
    );
}

