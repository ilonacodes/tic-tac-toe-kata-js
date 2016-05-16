describe("Cell", function() {
  it("has row", function() {
    var cell = new Cell(2, 3, Cell.notOccupied)
    expect(cell.row).toEqual(2)
  })

  it("has column", function() {
    var cell = new Cell(2, 3, Cell.notOccupied)
    expect(cell.column).toEqual(3)
  })

  it("is not occupied when created as not occupied", function() {
    var cell = new Cell(2, 3, Cell.notOccupied)
    expect(cell.isOccupied()).toEqual(false)
  })

  it("is occupied when created as occupied", function() {
    var cell = new Cell(2, 3, Cell.occupied)
    expect(cell.isOccupied()).toEqual(true)
  })

  it("is occupied when created as not occupied and occupied later", function() {
    var cell = new Cell(2, 3, Cell.notOccupied)
    cell.occupy()
    expect(cell.isOccupied()).toEqual(true)
  })

  it("is equal to another cell when same properties", function() {
    var firstCell = new Cell(2, 3, Cell.notOccupied)
    var secondCell = new Cell(2, 3, Cell.notOccupied)

    expect(firstCell.isEqual(secondCell)).toEqual(true)
  })

  it("is not equal to another cell with different row", function() {
    var firstCell = new Cell(1, 3, Cell.notOccupied)
    var secondCell = new Cell(3, 3, Cell.notOccupied)

    expect(firstCell.isEqual(secondCell)).toEqual(false)
  })

  it("is not equal to another cell with different column", function() {
    var firstCell = new Cell(2, 1, Cell.notOccupied)
    var secondCell = new Cell(2, 3, Cell.notOccupied)

    expect(firstCell.isEqual(secondCell)).toEqual(false)
  })

  it("is not equal to another cell with different occupied", function() {
    var firstCell = new Cell(2, 1, Cell.notOccupied)
    var secondCell = new Cell(2, 1, Cell.occupied)

    expect(firstCell.isEqual(secondCell)).toEqual(false)
  })
})
