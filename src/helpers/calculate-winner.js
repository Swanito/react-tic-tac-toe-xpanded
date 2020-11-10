export function calculateWinner(owners, boardSize, currentTurnPlayer) {
  let isWinner = false;
  // dividir array de owners en trozos del tamaño de boardsize
  const linesArray = transformOwnersInGrid(owners, boardSize);

  // comprobar si hay linea
  isWinner = checkLines(linesArray, currentTurnPlayer);
  if (isWinner) return true;

  // comprobar si las mismas de posiciones de cada linea es el mismo owner (columnas)
  const transposedArray = transposeArray(linesArray);
  const transposedArrayLines = transformOwnersInGrid(
    transposedArray,
    boardSize,
  );
  isWinner = checkLines(transposedArrayLines, currentTurnPlayer);
  if (isWinner) return true;

  // comprobar si las diagonales son el mismo owner n == n+1 == n+2 == n+3 == n+i
  isWinner = checkSlash(linesArray, currentTurnPlayer);
  if (isWinner) return true;
  isWinner = checkInvertedSlash(linesArray, currentTurnPlayer);
  if (isWinner) return true;

  return isWinner;
}

const transformOwnersInGrid = (owners, boardSize) => {
  if (owners === undefined) return;

  let linesArray = [];
  boardSize = Number(boardSize);
  for (var i = 0; i < owners.length; i += boardSize) {
    linesArray.push(owners.slice(i, i + boardSize));
  }
  return linesArray;
};

const checkLines = (linesArray, currentTurnPlayer) => {
    let playerWon = false;
  if (linesArray === undefined) return playerWon;
  linesArray.map((line) => {
    let unique = [...new Set(line)];
    if (unique.length === 1 && unique.includes(currentTurnPlayer)) playerWon = true;
  });
  return playerWon
};

const checkSlash = (linesArray, currentTurnPlayer) => {
    let playerWon = false;
    if (linesArray === undefined) return playerWon;
  let slash = [];
  for (let i = 0; i < linesArray.length; i++) {
    slash.push(linesArray[i][i]);
  }
  let unique = [...new Set(slash)];
  if (unique.length === 1 && unique.includes(currentTurnPlayer)) playerWon = true;
  return playerWon
};

const checkInvertedSlash = (linesArray, currentTurnPlayer) => {
    let playerWon = false;
    if (linesArray === undefined) return playerWon;
  let slash = [];
  for (let i = 0; i < linesArray.length; i++) {
    slash.push(linesArray[i][linesArray.length-i-1]);
  }
  let unique = [...new Set(slash)];
  if (unique.length === 1 && unique.includes(currentTurnPlayer)) playerWon = true;
  return playerWon
};

const transposeArray = (linesArray) => {
  if (linesArray === undefined) return;

  let transposedArray = [];
  linesArray[0].map((_, colIndex) =>
    linesArray.map((line) => transposedArray.push(line[colIndex])),
  );
  return transposedArray;
};
