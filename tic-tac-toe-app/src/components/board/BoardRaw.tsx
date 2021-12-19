import { Square, SquareValue } from "../square/Square";

type BoardRawProps = {
  rawIndex: number;
  columnSize: number;
  squares: SquareValue[];
  onClick: (i: number) => void;
};

export const BoardRaw = (props: BoardRawProps) => {
  const start = props.rawIndex * props.columnSize;
  const end = start + props.columnSize;

  return (
    <div className="board-row">
      {props.squares.slice(start, end).map((value, index) => {
        return (
          <Square
            key={index}
            value={value}
            onClick={() => props.onClick(start + index)}
          />
        );
      })}
    </div>
  );
};
