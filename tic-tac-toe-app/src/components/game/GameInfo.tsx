import { GameHistory } from "./";
import { GameHistoryButtonList } from "./GameHitstoryButtonList";
import { calculateWinner } from "../../usecases/calculateWinner";

type GameInfoProps = {
  stepNumber: number;
  xIsNext: boolean;
  history: GameHistory[];
  onClick: (move: number) => void;
};

export const GameInfo = (props: GameInfoProps) => {
  const statusMessage = (
    history: GameHistory[],
    stepNumber: number,
    xIsNext: boolean
  ) => {
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);
    if (winner) {
      return "Winner: " + winner;
    } else {
      return "Next player: " + (xIsNext ? "X" : "O");
    }
  };

  return (
    <div className="game-info">
      <div>{statusMessage(props.history, props.stepNumber, props.xIsNext)}</div>
      <GameHistoryButtonList history={props.history} onClick={props.onClick} />
    </div>
  );
};
