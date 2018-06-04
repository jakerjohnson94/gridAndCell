const gameBoard = new Grid(8, 8, 'calc(100vh/12)', 'calc(100vh/12)');
gameBoard.changeStyleOfAllCells('background', 'yellow');
gameBoard.changeStyleOfCellsByFilter('background', 'cyan', (cellElement) =>
  (cellElement.columnIndex % 2 === 0 && cellElement.rowIndex % 2 !== 0) ||
  (cellElement.columnIndex % 2 !== 0 && cellElement.rowIndex % 2 === 0)
);


// gameBoard.getCellsByFilter((cellElement) => cellElement.rowIndex === 6 || cellElement.rowIndex === 7)
// for (let i in gameBoard.filteredCellArray) {
//   for (let cell of gameBoard.filteredCellArray[i]) {
//     cell.appendCellChild(new CheckerPiece('black', [[cell.rowIndex][cell.columnIndex]]).element)
//   }
// }
// gameBoard.getCellsByFilter((cellElement) => cellElement.rowIndex === 0 || cellElement.rowIndex === 1)
// for (let i in gameBoard.filteredCellArray) {
//   for (let cell of gameBoard.filteredCellArray[i]) {
//     cell.appendCellChild(new CheckerPiece('red', cell.rowIndex,cell.columnIndex).element)
//   }
// }
