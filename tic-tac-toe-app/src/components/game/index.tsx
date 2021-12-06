import { useState } from "react";
import { Board } from "../board";
import { SquareValue } from "../square";
import { GameInfo } from "./GameInfo";

export type GameHistory = {
  squares: SquareValue[];
};

const initialHistory: GameHistory[] = [
  {
    squares: Array(9).fill(null),
  },
];

const calculateWinner = (squares: Array<SquareValue>) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export const Game = () => {
  const [history, setHistory] = useState(initialHistory);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i: number) => {
    const updatedHistory = history.slice(0, stepNumber + 1);
    const current = updatedHistory[stepNumber];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";

    setHistory(
      updatedHistory.concat([
        {
          squares: squares,
        },
      ])
    );
    setStepNumber(updatedHistory.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <GameInfo
        history={history}
        winner={winner}
        xIsNext={xIsNext}
        onClick={jumpTo}
      />
    </div>
  );
};
