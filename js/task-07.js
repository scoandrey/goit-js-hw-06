const spanTextEl = document.querySelector("#text");
const fontSizeControlEl = document.querySelector("#font-size-control");

fontSizeControlEl.addEventListener("input", () => {
  spanTextEl.style.fontSize = `${fontSizeControlEl.value}px`;
});
