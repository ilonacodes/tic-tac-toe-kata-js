
for (var row = 1; row <= 3; row++) {
  for (var column = 1; column <= 3; column++) {
    new EasyUI.Rectangle({
      left: 50 * column, top: 50 * row,
      width: 50, height: 50,
      text: "",
      onclick: function(rectangle) {
        // handle click event for 'rectangle' here
      },
    })
  }
}
