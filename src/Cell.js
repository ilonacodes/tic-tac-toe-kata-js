function Cell(row, column, occupator) {
  // properties
  this.row = row
  this.column = column
  this.occupator = occupator
}

// functions
Cell.prototype.isOccupied = function() {
  return this.occupator != null
}

Cell.prototype.occupy = function(occupator) {
  this.occupator = occupator
}

Cell.prototype.occupiedBy = function() {
  return this.occupator
}

Cell.prototype.isEqual = function(other) {
  return this.row == other.row &&
    this.column == other.column &&
    this.occupator == other.occupator
}

Cell.None = function() {
  return new Cell(null, null, null)
}
