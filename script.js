function createDivs() {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-cell");
    fragment.append(div);
  }
  container.append(fragment);
}

const container = document.getElementById("container");
const btn = document.getElementById("edit-button");
createDivs();

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
    alert("Passed! Grid has been changed");
  }

  // TODO - reset canvas
  // TODO - redraw grid
});
