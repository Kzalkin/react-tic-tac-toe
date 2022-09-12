import {useState} from 'react'

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isX, setIsX] = useState(true);
    const [winnerPlayer, setWinnerPlayer] = useState("");
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
  
    return (
      <div className="board-wrapper">
        <h1>
          {winnerPlayer ? `${winnerPlayer} WON!` : `Current Player: ${player}`}
        </h1>
        <div className="board">
          {squares.map((value, index) => {
            return (
                <button className='square' onClick={() => { handleClick(index)}}>{value}</button>
            );
          })}
        </div>
        <button className="reset" onClick={handleReset}>
          Restart
        </button>
      </div>
    );
  }

export default Board