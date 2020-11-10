import React from 'react';

export const GameContext = React.createContext({
    players: 2,
    boardSize: 1,
    setPlayer: () => {},
    setBoardSize: () => {},
});
