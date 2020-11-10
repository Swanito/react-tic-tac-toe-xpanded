import React, { useContext, useState } from 'react';
import { GameContext } from '../context/GameContext';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '20em',
  margin: '0 auto',
};

export default function Settings() {
  const { boardSize, setBoardSize } = useContext(GameContext);

  const [selectedSize, setSelectedSize] = useState(boardSize);

  const availableBoardSizes = [
    { label: '3*3', size: 3 },
    { label: '6*6', size: 6 },
    { label: '9*9', size: 9 },
  ];

  const handleSubmit = (e) => {
    setBoardSize(Number(selectedSize));
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  }

  return (
    <GameContext.Consumer>
      {({ boardSize, players, currentTurnPlayer, winner }) => {
        return (
          <div style={styles}>
            <div>
              PLAYERS: {players} - BOARD SIZE: {boardSize}*{boardSize}
            </div>
            <br />
            <div>IT'S YOUR TURN {currentTurnPlayer}</div>
            <br />
            <div>
              <form onSubmit={handleSubmit}>
                <label htmlFor="board-size-select">Change board Size</label>
                <select value={selectedSize} onChange={handleSizeChange}>
                  {availableBoardSizes.map((option) => (
                    <option value={option.size} key={option.size}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <button type="submit">{winner ? 'Restart' : 'Save'}</button>
              </form>
            </div>
          </div>
        );
      }}
    </GameContext.Consumer>
  );
}
