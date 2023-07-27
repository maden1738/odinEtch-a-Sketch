function gridGenerator(e) {
  e.preventDefault();
  let column = document.createElement("div");
  let final = document.createElement("div");
  final.setAttribute("class", "container");

  let gridLocation = document.getElementById("gridHere");
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      let box = document.createElement("div");

      box.setAttribute("class", "box");
      column.appendChild(box);
    }
    final.appendChild(column);
    column = document.createElement("div");
  }
  gridLocation.appendChild(final);
}
