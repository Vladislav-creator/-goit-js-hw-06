const a = document.querySelectorAll(".item");
const b = document.querySelectorAll(".item").length;
console.log(`Number of categories: ${b}`);
a.forEach((element) => {
  console.log(`Category: ${element.querySelector("h2").textContent}`);
  console.log(`Elements: ${element.querySelectorAll("li").length}`);
});
