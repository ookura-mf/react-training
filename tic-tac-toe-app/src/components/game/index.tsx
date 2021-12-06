import { useReducer, useState } from "react";
import { Board } from "../board";
import { SquareValue } from "../square";
import { GameInfo } from "./GameInfo";
import { calculateWinner } from "../../usecases/calculateWinner";
import {
  GameState,
  gameReducer,
  GameActionType,
} from "../../reducers/gameReducer";

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
  const handleClick = (i: number) => {
    dispatch({ type: GameActionType.GAME_ACTION_ADD, squareIndex: i });
  };

  const jumpTo = (step: number) => {
    dispatch({ type: GameActionType.GAME_ACTION_JUMP, step: step });
  };

  const current = state.history[state.stepNumber];
  const winner = calculateWinner(current.squares);

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <GameInfo
        history={state.history}
        winner={winner}
        xIsNext={state.xIsNext}
        onClick={jumpTo}
      />
    </div>
  );
};
