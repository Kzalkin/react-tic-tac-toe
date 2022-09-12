import React from 'react'

function PlayStatus({winnerPlayer, player}) {
  return (
    <h1>
    {winnerPlayer ? `${winnerPlayer} WON!` : `Current Player: ${player}`}
  </h1>
  )
}

export default PlayStatus