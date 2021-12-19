export type Mark = "X" | "O" | null;
type SquareProps = {
  mark: Mark;
  onClick: () => void;
};

export const Square = (props: SquareProps) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.mark}
    </button>
  );
};
