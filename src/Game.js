import Board from './components/Board';
import Settings from './components/Settings';
import Title from './components/Title';
import React, { useEffect, useState } from 'react';
import { GameContext } from './context/GameContext';

function Game() {
  const currentBoardSize = window.localStorage.getItem('boardSize') || 3;
  const currentPlayers = window.localStorage.getItem('players') || 2;

  const [currentTurnPlayer, setCurrentTurnPlayer] = useState('X');
  const [boardSize, setBoardSize] = useState(currentBoardSize);
  const [players, setPlayers] = useState(currentPlayers);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    window.localStorage.setItem('boardSize', boardSize);
    window.localStorage.setItem('players', players);
  }, [boardSize, players]);

  const settings = {
    boardSize,
    players,
    currentTurnPlayer,
    winner,
    setWinner,
    setCurrentTurnPlayer,
    setBoardSize,
    setPlayers,
  };

  return (
      <GameContext.Provider value={settings}>
        <Title />
        <Board />
        <Settings />
      </GameContext.Provider>
  );
}

export default Game;
