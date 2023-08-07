const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const a = document.querySelector("#ingredients");
ingredients.forEach((el) => {
  const heading = document.createElement("li");
  heading.className = "item";
  heading.textContent = el;
  a.append(heading);
});
console.log(a);
