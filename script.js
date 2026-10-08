function drawGrid(number) {
  const fragment = document.createDocumentFragment();
  let flexBasis = 100 / number;

  for (let i = 0; i < number * number; i++) {
    const div = document.createElement("div");
    div.style.flex = `0 0 ${flexBasis}%`;
    div.style.height = `${flexBasis}%`;
    div.classList.add("grid-cell");
    fragment.append(div);
  }
  container.append(fragment);
}

function deleteGrid() {
  container.replaceChildren();
}

function randomizeRGB() {
  return [
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
  ];
}

const container = document.getElementById("container");
const btn = document.getElementById("edit-button");
let initial = 16;
drawGrid(initial);

container.addEventListener("mouseover", (e) => {
  const div = e.target;
  if (!div.classList.contains("grid-cell")) return;

  let [r, g, b] = randomizeRGB();
  let opacity = Number(div.dataset.opacity || 0);

  if (opacity < 1) {
    opacity += 0.1;
    div.dataset.opacity = opacity;
  }

  div.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
});

btn.addEventListener("click", () => {
  const LIMIT = 100;
  let input;

  do {
    let response = prompt("Enter number of squares (MAXIMUM 100)");
    if (response === null) return;

    input = Number(response);
  } while (isNaN(input) || input > 100 || input < 1);
  {
    alert("Passed! Grid size has been changed");
    deleteGrid();
    drawGrid(input);
  }
});
