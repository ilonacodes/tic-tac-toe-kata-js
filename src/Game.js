function Game() {
  // properties
  this.cells = [
    new Cell(1, 1, null),
    new Cell(1, 2, null),
    new Cell(1, 3, null),

    new Cell(2, 1, null),
    new Cell(2, 2, null),
    new Cell(2, 3, null),

    new Cell(3, 1, null),
    new Cell(3, 2, null),
    new Cell(3, 3, null),
  ]

  this.currentPlayer = Game.playerOne
}

// constants
Game.playerOne = "X"
Game.playerTwo = "O"
Game.nobody = "nobody"
Game.tie = "tie"

Game.players = [Game.playerOne, Game.playerTwo]

Game.rows = [1, 2, 3]
Game.columns = [1, 2, 3]

// functions
Game.prototype.put = function(mark, cell) {
  if (this.isOccupied(cell)) return false
  if (! this.isFromCurrentPlayer(mark)) return false

  this.occupy(cell, mark)
  this.switchToNextPlayer()

  return true
}

Game.prototype.isTie = function() {
  return this.cells.every(function(cell) {
    return cell.isOccupied()
  })
}

Game.prototype.winner = function() {
  if (this.isTie()) return Game.tie
  return this.findWinnerByColumn() || Game.nobody
}

// private functions

Game.prototype.findWinnerByColumn = function() {
  var that = this
  return Game.players.find(function(player) {
    return that.findOccupiedColumn(player)
  })
}

Game.prototype.findOccupiedColumn = function(occupator) {
  var that = this
  return Game.columns.find(function(column) {
    return that.isColumnOccupied(column, occupator)
  })
}

Game.prototype.isColumnOccupied = function(column, occupator) {
  var that = this
  return Game.rows.every(function(row) {
    return that.existCell([row, column], occupator)
  })
}

Game.prototype.existCell = function(cell, occupator) {
  return !this.findCell(cell, occupator).isEqual(Cell.None())
}

Game.prototype.switchToNextPlayer = function() {
  if (this.currentPlayer == Game.playerOne) {
    this.currentPlayer = Game.playerTwo
  } else {
    this.currentPlayer = Game.playerOne
  }
}

Game.prototype.occupy = function(cell, mark) {
  this.findCell(cell, null).occupy(mark)
}

Game.prototype.isOccupied = function(cell) {
  return this.findCell(cell, Game.playerOne).isOccupied() ||
    this.findCell(cell, Game.playerTwo).isOccupied()
}

Game.prototype.findCell = function(cell, occupator) {
  var boardCell = new Cell(cell[0], cell[1], occupator)

  var found = this.cells.find(function(cell) {
    return cell.isEqual(boardCell)
  })

  return found || Cell.None()
}

Game.prototype.isFromCurrentPlayer = function(mark) {
  return mark == this.currentPlayer
}
