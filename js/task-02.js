const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const vegts = document.querySelector("#ingredients");
const vegtsArr = ingredients.map((item) => {
  const vegtNames = document.createElement("li");
  vegtNames.textContent = item;
  vegtNames.classList.add("item");
  return vegtNames;
});
vegts.append(...vegtsArr);
console.log(vegts);
// const ingredientsList = document.querySelector("#ingredients");

// const items = ingredients.map(ingredient => {
//   let item = document.createElement("li");
//   item.innerText = ingredient;
//   item.className = "item";
//   return item;
// });

// ingredientsList.append(...items);
