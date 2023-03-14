const CategoriesEl = document.querySelectorAll(".item");
console.log(`Number of catogpries: ${CategoriesEl.length}`);

CategoriesEl.forEach((item) => {
  const CategoryEl = item.querySelector("h2").textContent;
  console.log(`Category: ${CategoryEl}`);
  const CategorySumEl = item.querySelectorAll("li").length;
  console.log(`Elements: ${CategorySumEl}`);
});
