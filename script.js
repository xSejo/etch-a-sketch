const container = document.getElementById("container");

createDivs();

const divs = container.querySelectorAll("div");
for (const div of divs) {
  div.addEventListener("mouseenter", () => {
    div.style.backgroundColor = "blue";
  });

  div.addEventListener("mouseleave", () => {
    div.style.backgroundColor = "white";
  });
}

function createDivs() {
  for (let i = 0; i < 256; i++) {
    const divs = document.createElement("div");
    container.append(divs);
  }
}
