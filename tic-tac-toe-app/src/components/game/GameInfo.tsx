import { GameHistory } from "./";
import { GameHistoryButtonList } from "./GameHitstoryButtonList";

type GameInfoProps = {
  winner: string | null;
  xIsNext: boolean;
  history: GameHistory[];
  onClick: (move: number) => void;
};

export const GameInfo = (props: GameInfoProps) => {
  const statusMessage = (winner: string | null, xIsNext: boolean) => {
    if (props.winner) {
      return "Winner: " + winner;
    } else {
      return "Next player: " + (xIsNext ? "X" : "O");
    }
  };

  return (
    <div className="game-info">
      <div>{statusMessage(props.winner, props.xIsNext)}</div>
      <GameHistoryButtonList history={props.history} onClick={props.onClick} />
    </div>
  );
};
