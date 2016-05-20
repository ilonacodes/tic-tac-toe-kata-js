describe("Tic Tac Toe Game", function() {
  var game

  beforeEach(function() {
    game = new Game()
  })

  it("makes sure that player One starts", function() {
    var validTurn = game.put(Game.playerOne, [2, 3])
    expect(validTurn).toEqual(true)
  })

  it("makes sure that player Two does not start", function() {
    var validTurn = game.put(Game.playerTwo, [2, 3])
    expect(validTurn).toEqual(false)
  })

  it("makes sure that player Two makes second turn", function() {
    game.put(Game.playerOne, [2, 3])

    var validTurn = game.put(Game.playerTwo, [2, 2])
    expect(validTurn).toEqual(true)
  })

  it("makes sure that player One makes third turn", function() {
    game.put(Game.playerOne, [2, 3])
    game.put(Game.playerTwo, [2, 2])

    var validTurn = game.put(Game.playerOne, [2, 1])
    expect(validTurn).toEqual(true)
  })

  it("makes sure that player Two makes fourth turn", function() {
    game.put(Game.playerOne, [2, 3])
    game.put(Game.playerTwo, [2, 2])
    game.put(Game.playerOne, [2, 1])

    var validTurn = game.put(Game.playerTwo, [1, 1])
    expect(validTurn).toEqual(true)
  })

  it("is possible to put a mark only in empty cell", function() {
    var validTurn = game.put(Game.playerOne, [3, 3])
    expect(validTurn).toEqual(true)
  })

  it("is not possible to put mark in occupied cell", function() {
    game.put(Game.playerOne, [3, 3])

    var validTurn = game.put(Game.playerTwo, [3, 3])
    expect(validTurn).toEqual(false)
  })

  it("is possible to put a mark in empty cell on subsequent turn", function() {
    game.put(Game.playerOne, [3, 3])

    var validTurn = game.put(Game.playerTwo, [3, 2])
    expect(validTurn).toEqual(true)
  })

  it("is not possible to put mark in occupied cell on subsequent turn", function() {
    game.put(Game.playerOne, [3, 2])
    game.put(Game.playerTwo, [3, 3])

    var validTurn = game.put(Game.playerOne, [3, 3])
    expect(validTurn).toEqual(false)
  })

  it("does not switch turn when mark is not from current player", function() {
    game.put(Game.playerTwo, [3, 2])

    var validTurn = game.put(Game.playerTwo, [3, 3])
    expect(validTurn).toEqual(false)
  })

  it("does not occupy cell when mark is not from current player", function() {
    game.put(Game.playerTwo, [3, 2])

    var validTurn = game.put(Game.playerOne, [3, 2])
    expect(validTurn).toEqual(true)
  })

  it("is not possible to put mark in cell occupied in one of the previous turns", function() {
    game.put(Game.playerOne, [3, 3])
    game.put(Game.playerTwo, [3, 2])

    var validTurn = game.put(Game.playerOne, [3, 3])
    expect(validTurn).toEqual(false)
  })

  it("is a tie when the board is full", function() {
    game.put(Game.playerOne, [1, 2])
    game.put(Game.playerTwo, [2, 2])
    game.put(Game.playerOne, [1, 3])
    game.put(Game.playerTwo, [1, 1])
    game.put(Game.playerOne, [3, 3])
    game.put(Game.playerTwo, [2, 3])
    game.put(Game.playerOne, [2, 1])
    game.put(Game.playerTwo, [3, 2])
    game.put(Game.playerOne, [3, 1])

    expect(game.isTie()).toEqual(true)
  })

  it("is not a tie when the board is empty", function() {
    expect(game.isTie()).toEqual(false)
  })

  it("is not a tie when the board is half-full", function() {
    game.put(Game.playerOne, [1, 2])

    expect(game.isTie()).toEqual(false)
  })
})
