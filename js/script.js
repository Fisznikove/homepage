console.log("Cześć");

let button = document.querySelector(".button");
let changeColorButtonElement = document.querySelector(".button__changeColor");
let body = document.querySelector(".body");



button.addEventListener("click", () => {
   body.classList.toggle("body--dark");
   if (body.classList.contains("body--dark")) {
      changeColorButtonElement.innerText = "jasne"
   } else {
      changeColorButtonElement.innerText = "ciemne"
   }
})
