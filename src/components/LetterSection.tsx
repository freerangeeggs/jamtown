import React, { useState } from 'react';
import { GuessLetter } from './GuessLetter';

export enum LetterSectionType {
    DerivedLetters,
    GuessLetters
}

type LetterSectionProps = {
    type: LetterSectionType,
    letters: Array<string>,
    callback: ((letters: Array<string>) => void)
}

export const LetterSection = (props: LetterSectionProps) => {
    const [letters, setLetters] = useState(props.letters);

    function letterUpdated(index: number, value: string): void {
        const newLetters: Array<string> = letters.map((item, letterIndex) => (letterIndex === index) ? value : item);
        setLetters(newLetters);

        props.callback(newLetters);
    }

    const className = props.type === LetterSectionType.DerivedLetters ? '' : 'darkBg';

    return (
        <div>
            {letters.map((value, index) => <GuessLetter style={className} key={value[0]} title={index.toString()} value={value} onValueChanged={letterUpdated} />)}
        </div>
    );
}