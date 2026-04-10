const button = document.getElementById("btn");
const title = document.getElementById("title");
const divArea = document.querySelector("#colourDiv");
const counter = document.querySelector("#colourDiv p");

function DivColourChange() {
  console.log(Math.random() * 256);
  const r = Math.floor(Math.random() * 200);
  const g = Math.floor(Math.random() * 200);
  const b = Math.floor(Math.random() * 200);

  divArea.style.backgroundColor = `rgb(${r},${g},${b})`;
}

function DivCreateText() {
  counter.textContent = Number(counter.textContent) + 1;
}
button.addEventListener("click", (e) => {
  DivColourChange();
  DivCreateText();
});

let count = 0;

window.addEventListener("scroll", () => {
  console.log("scrolling:::===>");
  count = count + 1;
  console.log(count);
});
