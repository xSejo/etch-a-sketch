const container = document.getElementById("container");

createDivs();

container.addEventListener("mouseover", (e) => {
  const div = e.target;
  if (!div.classList.contains("grid-cell")) return;
  div.style.backgroundColor = "blue";
});

container.addEventListener("mouseout", (e) => {
  const div = e.target;
  if (!div.classList.contains("grid-cell")) return;
  div.style.backgroundColor = "white";
});

function createDivs() {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-cell");
    fragment.append(div);
  }
  container.append(fragment);
}
