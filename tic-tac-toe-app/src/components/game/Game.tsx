import { useCallback, useReducer } from "react";
import { Board } from "../board/Board";
import { Mark } from "../square/Square";
import { GameInfo } from "./GameInfo";
import { GameState, gameReducer } from "../../reducers/gameReducer";

export type GameHistory = {
  squares: Mark[];
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

  const rawSize = 3;
  const columnSize = 3;

  const handleClick = useCallback((squareIndex: number) => {
    dispatch({ type: "add_mark", squareIndex: squareIndex });
  }, []);

  const jumpTo = useCallback((step: number) => {
    dispatch({ type: "jump_to_history", step: step });
  }, []);

  const current = state.history[state.stepNumber];

  return (
    <div className="game">
      <div className="game-board">
        <Board
          rawSize={rawSize}
          columnSize={columnSize}
          squares={current.squares}
          onClick={(i) => handleClick(i)}
        />
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
