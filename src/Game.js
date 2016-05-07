function Game() {
  this.isTheFirstTurnNow = true
  this.cell = null
}

Game.prototype.put = function(mark, cell) {
  if (this.isTheFirstTurnNow) {
    this.isTheFirstTurnNow = false
    this.cell = cell
    return mark == "X"
  } else {
    if (cell != null) {
      return false
    }
    return mark == "O"
  }
}
