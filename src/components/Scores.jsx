import React from "react";

function Scores({ onResetScore, xScore, oScore }) {
  return (
    <>
      <div className="scores">
        <span>X:{xScore}</span>
        <span>O:{oScore}</span>
      </div>
      <button className="reset" onClick={onResetScore}>
        Reset Scores
      </button>
    </>
  );
}

export default Scores;
