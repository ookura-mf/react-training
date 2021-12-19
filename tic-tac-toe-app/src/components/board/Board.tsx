import { Mark } from "../square/Square";
import { BoardRaw } from "./BoardRaw";

type BoardProps = {
  rawSize: number;
  columnSize: number;
  squares: Mark[];
  onClick: (i: number) => void;
};

export const Board = (props: BoardProps) => {
  return (
    <div>
      {[...Array(props.rawSize)].map((_, i) => {
        return (
          <BoardRaw
            key={i}
            rawIndex={i}
            columnSize={props.columnSize}
            squares={props.squares}
            onClick={props.onClick}
          />
        );
      })}
    </div>
  );
};
