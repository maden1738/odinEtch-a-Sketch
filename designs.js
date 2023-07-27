function etchAsketch() {
  console.log("HELLODARKNESS");
  document.getElementById("draw").style.backgroundColor = "black";
}

function gridGenerator(e) {
  console.log("hello world1");
  e.preventDefault();
  let column = document.createElement("div");
  let final = document.createElement("div");
  final.setAttribute("class", "container");
  let edge = 10;
  let gridLocation = document.getElementById("gridHere");
  for (let i = 0; i < edge; i++) {
    for (let j = 0; j < edge; j++) {
      let box = document.createElement("div");

      box.setAttribute("class", "box");
      box.setAttribute("id", "draw");

      box.setAttribute(
        `style`,
        `width: calc(600px/${edge}); height: calc(600px/${edge})`
      );
      box.addEventListener("mouseover", etchAsketch);

      // box.addEventListener("mouseover", (e) => {
      //   etchAsketch;
      // });

      column.appendChild(box);
    }
    final.appendChild(column);
    column = document.createElement("div");
  }
  gridLocation.appendChild(final);
}
