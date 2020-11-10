import React, { useEffect, useState, useContext } from 'react';
import { GameContext } from '../context/GameContext';
import { calculateWinner as isPlayerWinner } from '../helpers/calculate-winner';
import Square from '../components/Square';
import './Square.css';

export default function Board() {
  const {
    boardSize,
    currentTurnPlayer,
    setCurrentTurnPlayer,
    winner,
    setWinner,
  } = useContext(GameContext);
  const prevPlayer = currentTurnPlayer === 'X' ? 'O' : 'X';

  const [owners, setOwners] = useState(
    Array.apply(null, Array(Number(boardSize * boardSize))),
  );

  const styles = {
    display: 'grid',
    gridTemplateColumns: `repeat(${boardSize}, minmax(6em, 6em))`,
    justifyContent: 'center',
    width: '20em',
    margin: '0 auto',
    pointerEvents: winner ? 'none' : 'auto',
  };

  const winnerStyle = {
      textAlign: 'center',
      margin: '1em'
  }

  function selectSquare(index) {
    if (owners[index]) return;
    const ownersCopy = [...owners];
    ownersCopy[index] = currentTurnPlayer;
    setOwners(ownersCopy);
    setCurrentTurnPlayer(currentTurnPlayer === 'X' ? 'O' : 'X');
  }

  useEffect(() => {
    if (isPlayerWinner(owners, boardSize, prevPlayer)) {
      setWinner(prevPlayer);
    }
  });

  return (
    <>
      <div style={winnerStyle}>{winner ? `THE WINNER IS ${winner}!` : ''}</div>
      <div style={styles}>
        {owners.map((_, i) => (
          <div className="square" onClick={() => selectSquare(i)} key={i}>
            {' '}
            {owners[i] === 'X' ? (
              <Square value={owners[i] ? owners[i] : ''} color="red" />
            ) : (
              <Square value={owners[i] ? owners[i] : ''} color="green" />
            )}{' '}
          </div>
        ))}
      </div>
    </>
  );
}
