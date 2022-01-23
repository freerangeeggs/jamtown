const MAX_ROUND_LINES: number = 10;
const MAX_WORD_LENGTH: number = 7;

export type GameSheetV1 = {
    lines: Array<RoundLine>;
    derivedLetters: Array<string>;
    guessLetters: Array<string>;
};

export type RoundLine = {
    letters: Array<string>;
    guess: string;
}

function buildBlankSheetV1(): GameSheetV1 {
    let sheet: GameSheetV1 = {
        lines: new Array<RoundLine>(MAX_ROUND_LINES).fill({
            letters: [],
            guess: ''
        }),
        derivedLetters: new Array<string>(MAX_WORD_LENGTH).fill(''),
        guessLetters: new Array<string>(MAX_WORD_LENGTH).fill('')
    }

    return sheet;
}

export const blankSheet: GameSheetV1 = buildBlankSheetV1();
