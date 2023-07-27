function gridGenerator(e) {
  e.preventDefault();
  let input = prompt("ENTER THE NO OF SQUARES PER SIDE ");

  if (input > 100) {
    input = prompt("Enter a number below 100");
  } else if (input == "") {
    input = prompt("enter a valid number");
  }
  let column = document.createElement("div");
  let final = document.createElement("div");
  final.setAttribute("class", "grid");

  let gridLocation = document.getElementById("gridHere");
  for (let i = 0; i < input; i++) {
    for (let j = 0; j < input; j++) {
      let box = document.createElement("div");

      box.setAttribute("class", "box");
      box.setAttribute("id", "draw");

      box.setAttribute(
        `style`,
        `width: calc(600px/${input}); height: calc(600px/${input})`
      );
      box.addEventListener("mouseover", function () {
        box.style.backgroundColor = "black";
      });

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
