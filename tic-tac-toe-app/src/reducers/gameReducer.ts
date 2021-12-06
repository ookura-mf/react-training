import React from "react";
import { GameHistory } from "../components/game";
import { calculateWinner } from "../usecases/calculateWinner";

export type GameState = {
  history: GameHistory[];
  stepNumber: number;
  xIsNext: boolean;
};
export type GameAction =
  | { type: GameActionType.GAME_ACTION_ADD; squareIndex: number }
  | { type: GameActionType.GAME_ACTION_JUMP; step: number };

export enum GameActionType {
  GAME_ACTION_ADD = "GAME_ACTION_ADD",
  GAME_ACTION_JUMP = "GAME_ACTION_JUMP",
}

export const gameReducer: React.Reducer<GameState, GameAction> = (
  state: GameState,
  action: GameAction
) => {
  switch (action.type) {
    case GameActionType.GAME_ACTION_ADD: {
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
    case GameActionType.GAME_ACTION_JUMP:
      return {
        ...state,
        stepNumber: action.step,
        xIsNext: action.step % 2 === 0,
      };
    default:
      return state;
  }
};
