type GameHistoryButtonProps = {
  move: number;
  onClick: (move: number) => void;
};

export const GameHistoryButton = (props: GameHistoryButtonProps) => {
  const desc = props.move ? "Go to move #" + props.move : "Go to game start";

  return <button onClick={() => props.onClick(props.move)}>{desc}</button>;
};
