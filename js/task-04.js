const addListenerDec = document.querySelector('[data-action="decrement"]');
const addListenerInc = document.querySelector('[data-action="increment"]');
const addListenerValue = document.querySelector("#value");
let counterValue = 0;
addListenerDec.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});
addListenerInc.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});
