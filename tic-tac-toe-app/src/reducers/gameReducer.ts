import React from "react";
import { GameHistory } from "../components/game/Game";
import { calculateWinner } from "../usecases/calculateWinner";

export type GameState = {
  history: GameHistory[];
  stepNumber: number;
  xIsNext: boolean;
};
export type GameAction =
  | AddValueAction 
  | JumpHistoryAction

type AddValueAction = {
  type: "add_value"; 
  squareIndex: number; 
}

type JumpHistoryAction = {
  type: "jump_to_history";
  step: number; 
}

export const gameReducer: React.Reducer<GameState, GameAction> = (
  state: GameState,
  action: GameAction
) => {
  switch (action.type) {
    case "add_value": {
      const updatedHistory = state.history.slice(0, state.stepNumber + 1);
      const current = updatedHistory[state.stepNumber];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[action.squareIndex]) {
        return { ...state };
      }
      squares[action.squareIndex] = state.xIsNext ? "X" : "O";

      return {
        history: updatedHistory.concat([{ squares: squares }]),
        stepNumber: updatedHistory.length,
        xIsNext: !state.xIsNext,
      };
    }
    case "jump_to_history":
      return {
        ...state,
        stepNumber: action.step,
        xIsNext: action.step % 2 === 0,
      };
    default:
      return state;
  }
};
