function Game() {
  this.cell = null
  this.currentPlayer = "X"
}

Game.playerOne = "X"
Game.playerTwo = "O"

Game.prototype.put = function(mark, cell) {
  if (this.isOccupied(cell)) return false
  if (! this.isFromCurrentPlayer(mark)) return false

  this.occupy(cell)
  this.switchToCurrentPlayer()

  return true
}

Game.prototype.switchToCurrentPlayer = function() {
  if (this.currentPlayer == Game.playerOne) {
    this.currentPlayer = Game.playerTwo
  } else {
    this.currentPlayer = Game.playerOne
  }
}

Game.prototype.occupy = function(cell) {
  this.cell = cell
}

Game.prototype.isOccupied = function(cell) {
  return isSameCell(this.cell, cell)
}

Game.prototype.isFromCurrentPlayer = function(mark) {
  return mark == this.currentPlayer
}

function isSameCell(left, right) {
  return left != null &&
    left[0] == right[0] &&
    left[1] == right[1]
}
