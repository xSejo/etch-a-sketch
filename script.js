function drawGrid(number) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < number * number; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-cell");
    fragment.append(div);
  }
  container.append(fragment);
}

function deleteGrid() {
  container.replaceChildren();
}

const container = document.getElementById("container");
const btn = document.getElementById("edit-button");
let initial = 16;
drawGrid(initial);

container.addEventListener("mouseover", (e) => {
  const div = e.target;
  if (!div.classList.contains("grid-cell")) return;
  div.style.backgroundColor = "blue";
});

btn.addEventListener("click", () => {
  const LIMIT = 100;
  let input;

  do {
    let response = prompt("Enter number of squares (MAXIMUM 100)");
    if (response === null) return;

    input = Number(response);
  } while (isNaN(input) || input > 100);
  {
    alert("Passed! Grid size has been changed");
    deleteGrid();
    drawGrid(input);
  }
});
