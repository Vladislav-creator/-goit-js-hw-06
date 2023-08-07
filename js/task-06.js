document.getElementById("validation-input").onblur = function () {
  console.log(this.value.length);
  if (Number(this.getAttribute("data-length")) !== this.value.length) {
    this.classList.remove("valid");
    this.classList.add("invalid");
  } else {
    this.classList.remove("invalid");
    this.classList.add("valid");
  }
};

// const nameInput = document.querySelector("#validation-input");
// console.log(nameInput);
// nameInput.addEventListener("input", onInput);
// function onInput(evt) {
//   console.log(evt.currentTarget.value);
//   if (evt.currentTarget.value.length === 6) {
//     nameInput.classList.add("invalid");
//     console.log("yes");
//   } else {
//     console.log("no");
//   }
// }
// console.log(document.querySelector("style"));
