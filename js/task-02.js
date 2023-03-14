const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const vegtEl = document.querySelector("ul");
ingredients.map((item) => {
  const vegtNameEl = document.createElement("li");
  vegtNameEl.textContent = item;
  vegtNameEl.classList.add("item");
  vegtEl.append(vegtNameEl);
  return vegtNameEl;
});
console.log(vegtEl);
