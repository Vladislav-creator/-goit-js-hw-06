// document.getElementById("validation-input").onblur = function () {
//   console.log(this.value.length);
//   if (Number(this.getAttribute("data-length")) !== this.value.length) {
//     this.classList.remove("valid");
//     this.classList.add("invalid");
//   } else {
//     this.classList.remove("invalid");
//     this.classList.add("valid");
//   }
// };

//The second option
// const nameInput = document.querySelector("#validation-input");
// nameInput.onblur = function () {
//   if (
//     nameInput.value.length === Number(nameInput.getAttribute("data-length"))
//   ) {
//     nameInput.classList.add("valid");
//     nameInput.classList.remove("invalid");
//   } else if (nameInput.value.length >= 1) {
//     nameInput.classList.add("invalid");
//     nameInput.classList.remove("valid");
//   }
// };