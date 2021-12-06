import { VFC } from "react";

export type SquareValue = "X" | "O" | null;
type SquareProps = {
  value: SquareValue;
  onClick: () => void;
};

export const Square: VFC<SquareProps> = (props: SquareProps) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};
