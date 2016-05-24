describe("Cell", function() {
  it("has row", function() {
    var cell = new Cell(2, 3, null)
    expect(cell.row).toEqual(2)
  })

  it("has column", function() {
    var cell = new Cell(2, 3, null)
    expect(cell.column).toEqual(3)
  })

  it("is not occupied when created as not occupied", function() {
    var cell = new Cell(2, 3, null)
    expect(cell.isOccupied()).toEqual(false)
  })

  it("is occupied when created as occupied", function() {
    var cell = new Cell(2, 3, Game.playerOne)
    expect(cell.isOccupied()).toEqual(true)
  })

  it("is occupied when created as not occupied and occupied later", function() {
    var cell = new Cell(2, 3, null)
    cell.occupy(Game.playerOne)
    expect(cell.isOccupied()).toEqual(true)
  })

  it("is occupied by first player", function() {
    var cell = new Cell(2, 3, null)
    cell.occupy(Game.playerOne)
    expect(cell.occupiedBy()).toEqual(Game.playerOne)
  })

  it("is occupied by second player", function() {
    var cell = new Cell(2, 3, null)
    cell.occupy(Game.playerTwo)
    expect(cell.occupiedBy()).toEqual(Game.playerTwo)
  })

  it("is equal to another cell when same properties", function() {
    var firstCell = new Cell(2, 3, null)
    var secondCell = new Cell(2, 3, null)

    expect(firstCell.isEqual(secondCell)).toEqual(true)
  })

  it("is not equal to another cell with different row", function() {
    var firstCell = new Cell(1, 3, null)
    var secondCell = new Cell(3, 3, null)

    expect(firstCell.isEqual(secondCell)).toEqual(false)
  })

  it("is not equal to another cell with different column", function() {
    var firstCell = new Cell(2, 1, null)
    var secondCell = new Cell(2, 3, null)

    expect(firstCell.isEqual(secondCell)).toEqual(false)
  })

  it("is not equal to another cell with different occupied", function() {
    var firstCell = new Cell(2, 1, null)
    var secondCell = new Cell(2, 1, Game.playerTwo)

    expect(firstCell.isEqual(secondCell)).toEqual(false)
  })
})
