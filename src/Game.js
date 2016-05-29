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
Game.mainDiagonal = [[1, 1], [2, 2], [3, 3]]
Game.backDiagonal = [[1, 3], [2, 2], [3, 1]]

// functions
Game.prototype.put = function(mark, cell) {
  if (this.isOccupied(cell)) return false
  if (! this.isFromCurrentPlayer(mark)) return false
  if (this.isFinished()) return false

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
  return this.findWinnerBy(this.findOccupiedColumn) ||
         this.findWinnerBy(this.findOccupiedRow) ||
         this.findWinnerBy(this.isMainDiagonalOccupied) ||
         this.findWinnerBy(this.isBackDiagonalOccupied) ||
         Game.nobody
}

Game.prototype.isFinished = function() {
  return this.winner() != Game.nobody
}
// private functions

Game.prototype.findWinnerBy = function(predicate) {
  var that = this
  return Game.players.find(function(player) {
    return predicate.call(that, player)
  })
}

Game.prototype.isMainDiagonalOccupied = function(occupator) {
  var that = this
  return Game.mainDiagonal.every(function(cell) {
    return that.existCell(cell, occupator)
  })
}

Game.prototype.isBackDiagonalOccupied = function(occupator) {
  var that = this
  return Game.backDiagonal.every(function(cell) {
    return that.existCell(cell,occupator)
  })
}

Game.prototype.findOccupiedRow = function(occupator) {
  return this.findOccupiedCollection(
    Game.rows,
    this.isRowOccupied,
    occupator
  )
}

Game.prototype.findOccupiedColumn = function(occupator) {
  return this.findOccupiedCollection(
    Game.columns,
    this.isColumnOccupied,
    occupator
  )
}

Game.prototype.findOccupiedCollection = function(collection, predicate, occupator) {
  var that = this
  return collection.find(function(element) {
    return predicate.call(that, element, occupator)
  })
}

Game.prototype.isRowOccupied = function(row, occupator) {
  return this.isOccupiedCollection(
    Game.rows,
    function(row, column) { return [row, column] },
    row,
    occupator
  )
}

Game.prototype.isColumnOccupied = function(column, occupator) {
  return this.isOccupiedCollection(
    Game.columns,
    function(column, row) { return [row, column] },
    column,
    occupator
  )
}

Game.prototype.isOccupiedCollection = function(collection, coordinateBuilder, element, occupator) {
  var that = this
  return collection.every(function(otherElement) {
    return that.existCell(coordinateBuilder(element, otherElement), occupator)
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
