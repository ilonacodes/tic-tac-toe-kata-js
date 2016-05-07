describe("Tic Tac Toe Game", function() {
  var playerOne = "X"
  var playerTwo = "O"

  var game

  beforeEach(function() {
    game = new Game()
  })

  it("makes sure that player One starts", function() {
    var validTurn = game.put(playerOne)
    expect(validTurn).toEqual(true)
  })

  it("makes sure that player Two does not start", function() {
    var validTurn = game.put(playerTwo)
    expect(validTurn).toEqual(false)
  })

  it("makes sure that player Two makes second turn", function() {
    game.put(playerOne)

    validTurn = game.put(playerTwo)
    expect(validTurn).toEqual(true)
  })

  it("is possible to put a mark only in empty cell", function() {
    var validTurn = game.put(playerOne, [3, 3])
    expect(validTurn).toEqual(true)
  })

  it("is not possible to put mark in occupied cell", function() {
    game.put(playerOne, [3, 3])

    validTurn = game.put(playerTwo, [3, 3])
    expect(validTurn).toEqual(false)
  })
})
