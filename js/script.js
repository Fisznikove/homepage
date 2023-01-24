{
   const welcome = () => {
      console.log("Cześć");
   }
   const toggleBackground = () => {
      const changeColorButtonElement = document.querySelector(".button__changeColor");
      const body = document.querySelector(".body");
      body.classList.toggle("body--dark");
      if (body.classList.contains("body--dark")) {
         changeColorButtonElement.innerText = "jasne"
      } else {
         changeColorButtonElement.innerText = "ciemne"
      }
   }

   welcome();

   const init = () => {
      const button = document.querySelector(".button");
      button.addEventListener("click", toggleBackground
      );

   }
   init();






}