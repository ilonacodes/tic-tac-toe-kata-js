describe("Tic Tac Toe Game", function() {
  var game

  beforeEach(function() {
    game = new Game()
  })

  it("makes sure that player One starts", function() {
    var validTurn = game.put(Game.playerOne)
    expect(validTurn).toEqual(true)
  })

  it("makes sure that player Two does not start", function() {
    var validTurn = game.put(Game.playerTwo)
    expect(validTurn).toEqual(false)
  })

  it("makes sure that player Two makes second turn", function() {
    game.put(Game.playerOne)

    var validTurn = game.put(Game.playerTwo)
    expect(validTurn).toEqual(true)
  })

  it("makes sure that player One makes third turn", function() {
    game.put(Game.playerOne)
    game.put(Game.playerTwo)

    var validTurn = game.put(Game.playerOne)
    expect(validTurn).toEqual(true)
  })

  it("makes sure that player Two makes fourth turn", function() {
    game.put(Game.playerOne)
    game.put(Game.playerTwo)
    game.put(Game.playerOne)

    var validTurn = game.put(Game.playerTwo)
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
})
