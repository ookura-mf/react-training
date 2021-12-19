import { Square, Mark } from "../square/Square";

type BoardRawProps = {
  rawIndex: number;
  columnSize: number;
  squares: Mark[];
  onClick: (i: number) => void;
};

export const BoardRaw = (props: BoardRawProps) => {
  const start = props.rawIndex * props.columnSize;
  const end = start + props.columnSize;

  return (
    <div className="board-row">
      {props.squares.slice(start, end).map((mark, index) => {
        return (
          <Square
            key={index}
            mark={mark}
            onClick={() => props.onClick(start + index)}
          />
        );
      })}
    </div>
  );
};
