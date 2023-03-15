const changeColorEl = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");

changeColorEl.addEventListener("click", () => {
  colorEl.textContent = getRandomHexColor();
  bodyEl.style.background = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
