import { useState, useEffect } from "react";
import PlayStatus from "./PlayStatus";
import Scores from "./Scores";
import Square from "./Square";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const [winnerPlayer, setWinnerPlayer] = useState("");
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);
  const player = isX ? "X" : "O";

  const checkWinner = () => {
    const WINNING_PATTERNS = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    const winner = WINNING_PATTERNS.some((pattern) =>
      pattern.every((index) => squares[index] === player)
    );
    if (winner) {
      setWinnerPlayer(player);
      return true;
    }
  };

  useEffect(() => {
    if (winnerPlayer) {
      isX ? setXScore((x) => x + 1) : setOScore((o) => o + 1);
    }
  }, [winnerPlayer, isX]);

  const handleClick = (i) => {
    if (winnerPlayer || squares[i]) {
      return;
    }

    squares[i] = isX ? "X" : "O";
    setSquares(squares);

    if (checkWinner()) {
      return;
    } else {
      setIsX(!isX);
    }
  };

  const handleReset = () => {
    setIsX(true);
    setSquares(Array(9).fill(null));
    setWinnerPlayer("");
  };

  const handleScoreReset= () => {
    setOScore(0);
    setXScore(0);
  }

  return (
    <div className="board-wrapper">
      <PlayStatus winnerPlayer={winnerPlayer} player={player} />
      <div className="board">
        {squares.map((value, index) => {
          return (
            <Square
              key={index + value}
              onSquareClick={() => {
                handleClick(index);
              }}
              value={value}
            />
          );
        })}
      </div>
      <button className="reset" onClick={handleReset}>
        Restart
      </button>
      <Scores onResetScore={handleScoreReset} xScore={xScore} oScore={oScore} />
    </div>
  );
}

export default Board;
