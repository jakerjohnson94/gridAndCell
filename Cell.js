function Cell(rowIndex, columnIndex) {
  this.rowIndex = rowIndex
  this.columnIndex = columnIndex

  this.addElement()
}

Cell.prototype = {
  updateCellElementContent: function (content) {
    this.outputElement.textContent = this.content
  },

  addElement: function () {
    this.element = document.createElement("div")
    this.element.classList.add("cell")
    this.element.dataset.rowIndex = this.rowIndex
    this.element.dataset.columnIndex = this.columnIndex
    return this.element
  },
  setSize: function (height, width) {
    this.element.style.height = height
    this.element.style.width = width
  },
  addClass: function (newClass) {
    this.element.classList.add(newClass);
  },
  swapClasses: function (newClass, oldClass) {
    this.element.classList.remove(oldClass);
    this.element.classList.add(newClass);
  },
  addStyle: function (propertyName, value) {
    this.element.style[propertyName] = value
  },


  constructor: Cell,
}


const gameBoard = new Grid(3, 3)

gameBoard.findCell(0, 2).addStyle('background', 'black')
gameBoard.selectedCell.addClass('newClass')
gameBoard.findNeighbors(gameBoard.selectedCell)
console.log(gameBoard.selectedCell.neighborCellArray)
gameBoard.selectedCell.swapClasses('newerClass', 'newClass')