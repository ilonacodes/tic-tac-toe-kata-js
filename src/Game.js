function Game() {
  this.cells = [
    [1, 1, Game.notOccupied],
    [1, 2, Game.notOccupied],
    [1, 3, Game.notOccupied],

    [2, 1, Game.notOccupied],
    [2, 2, Game.notOccupied],
    [2, 3, Game.notOccupied],

    [3, 1, Game.notOccupied],
    [3, 2, Game.notOccupied],
    [3, 3, Game.notOccupied],
  ]

  this.currentPlayer = Game.playerOne
}

Game.playerOne = "X"
Game.playerTwo = "O"

Game.occupied = true
Game.notOccupied = false
Game.notFound = undefined

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
  this.findCell(cell, Game.notOccupied)[2] = Game.occupied
}

Game.prototype.isOccupied = function(cell) {
  return this.findCell(cell, Game.occupied) != Game.notFound
}

Game.prototype.findCell = function(cell, occupied) {
  var boardCell = cell.concat(occupied)
  var index = indexOfCell(this.cells, boardCell)
  return this.cells[index]
}

Game.prototype.isFromCurrentPlayer = function(mark) {
  return mark == this.currentPlayer
}

function indexOfCell(cells, cell) {
  for (var index = 0; index < cells.length; index++) {
    if (isSameCell(cells[index], cell)) {
      return index
    }
  }

  return -1
}

function isSameCell(left, right) {
  return left != null &&
    left[0] == right[0] &&
    left[1] == right[1] &&
    left[2] == right[2]
}
