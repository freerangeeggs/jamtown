import React from "react";
import { RoundLine } from "../GameSheet";
import { WordLine } from "./WordLine";

type WordSectionProps = {
  lines: Array<RoundLine>;
  onUpdated: (lines: Array<RoundLine>) => void;
};

export const WordSection = (props: WordSectionProps) => {
  const lines: Array<RoundLine> = props.lines;

  function wordLineCallback(line: RoundLine, index: number): void {
    lines[index] = line;
    console.log(line);
    console.log(lines);
    props.onUpdated(lines);
  }

  return (
    <div id="wordSection">
      <div className="wordChunk">
        {lines.map((line, index) => (
          <WordLine
            key={index.toString()}
            line={line}
            onUpdated={(response: RoundLine) =>
              wordLineCallback(response, index)
            }
          ></WordLine>
        ))}
      </div>
    </div>
  );
};
