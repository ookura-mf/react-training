import { GameHistory } from "./Game";
import { GameHistoryButton } from "./GameHistoryButton";

type GameHistoryButtonListProps = {
  history: GameHistory[];
  onClick: (move: number) => void;
};

export const GameHistoryButtonList = (props: GameHistoryButtonListProps) => {
  return (
    <ol>
      {props.history.map((_, move) => {
        return (
          <li key={move}>
            <GameHistoryButton move={move} onClick={props.onClick} />
          </li>
        );
      })}
    </ol>
  );
};
