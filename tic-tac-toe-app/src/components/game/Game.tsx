import { useReducer } from "react";
import { Board } from "../board/Board";
import { SquareValue } from "../square/Square";
import { GameInfo } from "./GameInfo";
import { GameState, gameReducer } from "../../reducers/gameReducer";

export type GameHistory = {
  squares: SquareValue[];
};

const initialHistory: GameHistory[] = [
  {
    squares: Array(9).fill(null),
  },
];
const initialState: GameState = {
  history: initialHistory,
  stepNumber: 0,
  xIsNext: true,
};

export const Game = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const handleClick = (squareIndex: number) => {
    dispatch({ type: "add_value", squareIndex: squareIndex });
  };

  const jumpTo = (step: number) => {
    dispatch({ type: "jump_to_history", step: step });
  };

  const current = state.history[state.stepNumber];

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <GameInfo
        history={state.history}
        stepNumber={state.stepNumber}
        xIsNext={state.xIsNext}
        onClick={jumpTo}
      />
    </div>
  );
};
