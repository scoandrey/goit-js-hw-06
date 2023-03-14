const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");
nameInputEl.addEventListener("input", (event) => {
  nameOutputEl.textContent = event.currentTarget.value;
});
