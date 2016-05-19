function Game() {
  // properties
  this.cells = [
    new Cell(1, 1, Cell.notOccupied),
    new Cell(1, 2, Cell.notOccupied),
    new Cell(1, 3, Cell.notOccupied),

    new Cell(2, 1, Cell.notOccupied),
    new Cell(2, 2, Cell.notOccupied),
    new Cell(2, 3, Cell.notOccupied),

    new Cell(3, 1, Cell.notOccupied),
    new Cell(3, 2, Cell.notOccupied),
    new Cell(3, 3, Cell.notOccupied),
  ]

  this.currentPlayer = Game.playerOne
}

// constants
Game.playerOne = "X"
Game.playerTwo = "O"

// functions
Game.prototype.put = function(mark, cell) {
  if (this.isOccupied(cell)) return false
  if (! this.isFromCurrentPlayer(mark)) return false

  this.occupy(cell)
  this.switchToCurrentPlayer()

  return true
}

Game.prototype.isTie = function() {
  for (var index = 0; index < this.cells.length; index++) {
    var cell = this.cells[index]
    if (cell.isOccupied()) {
      return true
    }
  }

  return false
}

// private functions

Game.prototype.switchToCurrentPlayer = function() {
  if (this.currentPlayer == Game.playerOne) {
    this.currentPlayer = Game.playerTwo
  } else {
    this.currentPlayer = Game.playerOne
  }
}

Game.prototype.occupy = function(cell) {
  this.findCell(cell, Cell.notOccupied).occupy()
}

Game.prototype.isOccupied = function(cell) {
  return this.findCell(cell, Cell.occupied).isOccupied()
}

Game.prototype.findCell = function(cell, occupied) {
  var boardCell = new Cell(cell[0], cell[1], occupied)
  var index = indexOfCell(this.cells, boardCell)
  return this.cells[index] || Cell.None()
}

Game.prototype.isFromCurrentPlayer = function(mark) {
  return mark == this.currentPlayer
}

function indexOfCell(cells, cell) {
  for (var index = 0; index < cells.length; index++) {
    if (cells[index].isEqual(cell)) {
      return index
    }
  }

  return -1
}
