function Grid(rowCount, columnCount) {
  this.rowCount = rowCount
  this.columnCount = columnCount
  this.outputElement = document.getElementById('boardOut')

  this.offsets = {
    left: [0, -1],
    right: [0, 1],
    top: [-1, 0],
    bottom: [1, 0],
    topRight: [1, 1],
    topLeft: [-1, 1],
    bottomRight: [1, -1],
    bottomLeft: [-1, -1],
  }
  this.createCells()

}

Grid.prototype = {
  createCells: function (width, height) {
    this.cellArray = []
    for (let r = 0; r < this.rowCount; r++) {

      const rowElement = document.createElement('div')
      rowElement.classList.add('row')
      this.cellArray.push([])

      for (let c = 0; c < this.columnCount; c++) {

        const cell = new Cell(r, c)
        this.outputElement.appendChild(rowElement)
        rowElement.appendChild(cell.element)
        this.cellArray[r].push(cell)

      }
    }
  },

  findCell: function (rowIndex, columnIndex) {
    if (!this.cellArray[rowIndex][columnIndex]) return
    return this.selectedCell = this.cellArray[rowIndex][columnIndex]
  },

  findNeighbors: function (selectedCell) {
    selectedCell.neighborCellArray = []
    Object.values(this.offsets).forEach((offset) => {

      const [rowOffset, colOffset] = offset;
      const neighborRowIndex = Number(selectedCell.rowIndex) + rowOffset
      const neighborColumnIndex = Number(selectedCell.columnIndex) + colOffset
      console.log(neighborColumnIndex, neighborRowIndex)
      if (this.cellArray[neighborRowIndex] && this.cellArray[neighborRowIndex][neighborColumnIndex] !== undefined) {
        selectedCell.neighborCellArray.push(this.cellArray[neighborRowIndex][neighborColumnIndex])
      }
    })


  },

  constructor: Grid,
}