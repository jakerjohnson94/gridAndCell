
const gameBoard = new Grid(16, 16, '50px', '50px');
gameBoard.changeStyleOfAllCells('background', 'black');
gameBoard.changeStyleOfCellsByFilter('background', 'white', (cellElement) =>
  (cellElement.columnIndex % 2 === 0 && cellElement.rowIndex % 2 !== 0) ||
  (cellElement.columnIndex % 2 !== 0 && cellElement.rowIndex % 2 === 0)
);

