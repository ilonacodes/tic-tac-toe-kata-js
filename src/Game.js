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
  return this.cells.every(function(cell) {
    return cell.isOccupied()
  })
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

  var found = this.cells.find(function(cell) {
    return cell.isEqual(boardCell)
  })

  return found || Cell.None()
}

Game.prototype.isFromCurrentPlayer = function(mark) {
  return mark == this.currentPlayer
}
