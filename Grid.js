function Grid(rowCount, columnCount, cellHeight, cellWidth) {
  this.rowCount = rowCount
  this.columnCount = columnCount
  this.cellHeight = cellHeight
  this.cellWidth = cellWidth
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
  if (this.cellHeight && this.cellWidth) this.changeSizeOfAllCells(this.cellHeight, this.cellWidth)
  this.boundClickEvent = this.eventListeners.click.bind(this)
  this.addCellEventListeners()
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
  addCellEventListeners: function () {
    this.cellArray.forEach((arrayOfCells) => {
      for (let cell of arrayOfCells) {
        cell.element.addEventListener("click", this.boundClickEvent)
      }
    })
  },

  findCell: function (rowIndex, columnIndex) {
    if (!this.cellArray[rowIndex][columnIndex]) return
    return this.cellArray[rowIndex][columnIndex]
  },
  changeSizeOfAllCells: function (height, width) {
    for (let i in this.cellArray) {
      for (let cell of this.cellArray[i]) {
        cell.changeSize(height, width)
      }
    }
  },
  changeStyleOfAllCells: function (propertyName, value) {
    for (let i in this.cellArray) {
      for (let cell of this.cellArray[i]) {
        cell.addStyle(propertyName, value)
      }
    }
  },

  getCellsByFilter: function (callback) {
    this.filteredCellArray = []
    for (let i in this.cellArray) {
      if(this.cellArray[i].filter(callback).length){
      this.filteredCellArray.push(this.cellArray[i].filter(callback))
      }
    }
    return this.filteredCellArray
  },

  changeStyleOfCellsByFilter(styleName, value, callback) {
    if (callback) this.getCellsByFilter(callback)
    if (!this.filteredCellArray) return
    for (let i in this.filteredCellArray) {
      for (let cell of this.filteredCellArray[i]) {
        cell.element.style[styleName] = value
      }
    }
  },

  findValidNeighbors: function (selectedCell, callbackFunction) {
    if (!selectedCell) return
    selectedCell.neighborCellArray = []
    Object.values(this.offsets).forEach((offset) => {
      const [rowOffset, colOffset] = offset;
      const neighborRowIndex = Number(selectedCell.rowIndex) + rowOffset
      const neighborColumnIndex = Number(selectedCell.columnIndex) + colOffset
      if (this.cellArray[neighborRowIndex] && this.cellArray[neighborRowIndex][neighborColumnIndex] !== undefined) {
        selectedCell.neighborCellArray.push(this.cellArray[neighborRowIndex][neighborColumnIndex])
      }
    })
    if (callbackFunction) return selectedCell.validNeighborCellArray = selectedCell.neighborCellArray.filter(callbackFunction)
    else return selectedCell.neighborCellArray;
  },




  constructor: Grid,
  eventListeners: {
    click: function (event) {
      this.clickedCell = this.cellArray[event.currentTarget.dataset.rowIndex][event.currentTarget.dataset.columnIndex]
      console.log(this.clickedCell)
      
    },
  },
}