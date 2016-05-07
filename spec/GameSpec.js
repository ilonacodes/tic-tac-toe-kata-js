describe("Tic Tac Toe Game", function() {
  it("makes sure that player One starts", function() {
    var game = new Game()
    var playerOne = "X"
    var playerTwo = "O"

    var validTurn = game.put(playerOne)
    expect(validTurn).toEqual(true)

  })

  it("makes sure that player Two does not start", function() {
    var game = new Game()
    var playerOne = "X"
    var playerTwo = "O"

    var validTurn = game.put(playerTwo)
    expect(validTurn).toEqual(false)

  })

  it("makes sure that player Two makes second turn", function() {
    var game = new Game()
    var playerOne = "X"
    var playerTwo = "O"

    game.put(playerOne)

    validTurn = game.put(playerTwo)
    expect(validTurn).toEqual(true)
  })

  it("is possible to put a mark only in empty cell", function() {
    var game = new Game()
    var playerOne = "X"
    var playerTwo = "O"
    var cell = [3, 3]

    var validTurn = game.put(playerOne, cell)
    expect(validTurn).toEqual(true)

  })

  it("is not possible to put mark in occupied cell", function() {
    var game = new Game()
    var playerOne = "X"
    var playerTwo = "O"
    var cell = [3, 3]

    game.put(playerOne, cell)

    validTurn = game.put(playerTwo, cell)
    expect(validTurn).toEqual(false)
  })
})
