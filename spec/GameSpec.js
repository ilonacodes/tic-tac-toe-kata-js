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

  describe("winner", function() {
    it("is nobody when the board is empty", function() {
      expect(game.winner()).toEqual(Game.nobody)
    })

    it("is a tie when board is full and nobody won", function() {
      game.put(Game.playerOne, [1, 2])
      game.put(Game.playerTwo, [2, 2])
      game.put(Game.playerOne, [1, 3])
      game.put(Game.playerTwo, [1, 1])
      game.put(Game.playerOne, [3, 3])
      game.put(Game.playerTwo, [2, 3])
      game.put(Game.playerOne, [2, 1])
      game.put(Game.playerTwo, [3, 2])
      game.put(Game.playerOne, [3, 1])

      expect(game.winner()).toEqual(Game.tie)
    })

    it("is a first Player when his symbol is the only one in column", function() {
      game.put(Game.playerOne, [1, 1])
      game.put(Game.playerTwo, [1, 3])
      game.put(Game.playerOne, [2, 1])
      game.put(Game.playerTwo, [2, 2])
      game.put(Game.playerOne, [3, 1])

      expect(game.winner()).toEqual(Game.playerOne)
    })

    it("is not a first Player when second cell is not own", function() {
      game.put(Game.playerOne, [1, 1])
      game.put(Game.playerTwo, [1, 3])
      game.put(Game.playerOne, [2, 2])
      game.put(Game.playerTwo, [2, 1])
      game.put(Game.playerOne, [3, 1])

      expect(game.winner()).not.toEqual(Game.playerOne)
    })

    it("is not a first Player when third cell is not own", function() {
      game.put(Game.playerOne, [1, 1])
      game.put(Game.playerTwo, [1, 3])
      game.put(Game.playerOne, [2, 1])
      game.put(Game.playerTwo, [3, 1])
      game.put(Game.playerOne, [2, 2])

      expect(game.winner()).not.toEqual(Game.playerOne)
    })

    it("is a first Player when his symbol is the only one in second column", function() {
      game.put(Game.playerOne, [1, 2])
      game.put(Game.playerTwo, [1, 1])
      game.put(Game.playerOne, [2, 2])
      game.put(Game.playerTwo, [2, 1])
      game.put(Game.playerOne, [3, 2])

      expect(game.winner()).toEqual(Game.playerOne)
    })

    it("is a first Player when his symbol is the only one in third column", function() {
      game.put(Game.playerOne, [1, 3])
      game.put(Game.playerTwo, [1, 2])
      game.put(Game.playerOne, [2, 3])
      game.put(Game.playerTwo, [2, 2])
      game.put(Game.playerOne, [3, 3])

      expect(game.winner()).toEqual(Game.playerOne)
    })

    it("is a second Player when his symbol is the only one in second column", function() {
      game.put(Game.playerOne, [1, 1])
      game.put(Game.playerTwo, [1, 2])
      game.put(Game.playerOne, [1, 3])
      game.put(Game.playerTwo, [2, 2])
      game.put(Game.playerOne, [2, 3])
      game.put(Game.playerTwo, [3, 2])

      expect(game.winner()).toEqual(Game.playerTwo)
    })

    it("is a winner when his symbol is the only one in the first row", function() {
      game.put(Game.playerOne, [1, 1])
      game.put(Game.playerTwo, [2, 1])
      game.put(Game.playerOne, [1, 2])
      game.put(Game.playerTwo, [2, 2])
      game.put(Game.playerOne, [1, 3])

      expect(game.winner()).toEqual(Game.playerOne)
    })

    it("is a winner when his symbol is the only one in the main diagonal", function() {
      game.put(Game.playerOne, [1, 1])
      game.put(Game.playerTwo, [1, 2])
      game.put(Game.playerOne, [2, 2])
      game.put(Game.playerTwo, [3, 1])
      game.put(Game.playerOne, [3, 3])

      expect(game.winner()).toEqual(Game.playerOne)
    })

    it("is a winner when his symbol is the only one in the back diagonal", function() {
      game.put(Game.playerOne, [1, 3])
      game.put(Game.playerTwo, [1, 2])
      game.put(Game.playerOne, [2, 2])
      game.put(Game.playerTwo, [1, 1])
      game.put(Game.playerOne, [3, 1])

      expect(game.winner()).toEqual(Game.playerOne)
    })

    it("is nobody when someone`s symbol at the start of the main diagonal", function() {
      game.put(Game.playerOne, [1, 1])
      game.put(Game.playerTwo, [1, 2])
      game.put(Game.playerOne, [3, 3])

      expect(game.winner()).toEqual(Game.nobody)
    })

    it("is nobody when someone`s symbol at the start of the back diagonal", function() {
      game.put(Game.playerOne, [1, 3])
      game.put(Game.playerTwo, [1, 2])
      game.put(Game.playerOne, [2, 2])

      expect(game.winner()).toEqual(Game.nobody)
    })

    it("is playerOne when full board and playerOne occupies column", function() {
      game.put(Game.playerOne, [1, 1])
      game.put(Game.playerTwo, [1, 3])
      game.put(Game.playerOne, [2, 1])
      game.put(Game.playerTwo, [2, 2])
      game.put(Game.playerOne, [3, 2])
      game.put(Game.playerTwo, [1, 2])
      game.put(Game.playerOne, [2, 3])
      game.put(Game.playerTwo, [3, 3])
      game.put(Game.playerOne, [3, 1])

      expect(game.winner()).toEqual(Game.playerOne)
    })
  })

  it("is impossible to put a mark when we have a winner", function() {
    game.put(Game.playerOne, [1, 3])
    game.put(Game.playerTwo, [2, 3])
    game.put(Game.playerOne, [2, 2])
    game.put(Game.playerTwo, [3, 2])
    game.put(Game.playerOne, [3, 1])

    var validTurn = game.put(Game.playerTwo, [1, 1])
    expect(validTurn).toEqual(false)
  })

  it("is not finished when it is a new game", function() {
    expect(game.isFinished()).toEqual(false)
  })

  it("is finished when there is a winner", function() {
    game.put(Game.playerOne, [1, 3])
    game.put(Game.playerTwo, [2, 3])
    game.put(Game.playerOne, [2, 2])
    game.put(Game.playerTwo, [3, 2])
    game.put(Game.playerOne, [3, 1])

    expect(game.isFinished()).toEqual(true)
  })
})
