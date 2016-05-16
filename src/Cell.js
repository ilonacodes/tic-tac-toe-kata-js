function Cell(row, column, occupied) {
  // properties
  this.row = row
  this.column = column
  this.occupied = occupied
}

// constants
Cell.occupied = true
Cell.notOccupied = false

// functions
Cell.prototype.isOccupied = function() {
  return this.occupied == Cell.occupied
}

Cell.prototype.occupy = function() {
  this.occupied = Cell.occupied
}

Cell.prototype.isEqual = function(other) {
  var result = this.row == other.row &&
    this.column == other.column &&
    this.occupied == other.occupied

  console.log(this, "isEqual", other, "==", result)
  return result
}

Cell.None = function() {
  return new Cell(null, null, Cell.notOccupied)
}
