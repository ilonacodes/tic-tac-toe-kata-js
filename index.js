var cellSize = 50
var game = new Game

var gameStatus = new EasyUI.Rectangle({
  left: 250, top: 50,
  width: 150, height: 50,
  text: "winner: " + game.winner(),
})

var currentPlayerStatus = new EasyUI.Rectangle({
  left: 250, top: 100,
  width: 150, height: 50,
  text: "player: " + game.currentPlayer,
})

function defineGameCell(row, column) {
  new EasyUI.Rectangle({
    left: cellSize * column, top: cellSize * row,
    width: cellSize, height: cellSize,
    text: "",
    onclick: function(rectangle) {
      var memoryPlayer = game.currentPlayer

      if (game.put(memoryPlayer, [row, column])) {
        rectangle.setText(memoryPlayer)
        gameStatus.setText("winner: " + game.winner())
      } else {
        gameStatus.setText("invalid move!")
      }

      currentPlayerStatus.setText("player: " + game.currentPlayer)
    },
  })
}

for (var row = 1; row <= 3; row++) {
  for (var column = 1; column <= 3; column++) {
    defineGameCell(row, column)
  }
}
