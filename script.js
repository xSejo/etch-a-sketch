const container = document.getElementById("container");

createDivs();

function createDivs() {
  for (let i = 0; i < 256; i++) {
    const divs = document.createElement("div");
    container.append(divs);
  }
}
