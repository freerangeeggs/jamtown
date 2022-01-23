import React, { useState } from 'react';

type GuessLetterProps = {
    style: string,
    title: string,
    value: string,
    onValueChanged: any
}

export const GuessLetter = (props: GuessLetterProps) => {
    const [value, setValue] = useState(props.value);

    const OnChanged = (event: any) => {
        setValue(event.target.value);
        props.onValueChanged(event.target.title, event.target.value);
    }

    const className: string = `singleInput big ${props.style}`;

    return (
        <input type="text" title={props.title} value={value} onChange={OnChanged} className={className}></input>
    )
}

