{
   const welcome = () => {
      console.log("Cześć");
   }
   
   const toggleBackground = () => {
      const changeColorButtonElement = document.querySelector(".button__changeColor");
      const body = document.querySelector(".body");
      body.classList.toggle("body--dark");
      changeColorButtonElement.innerText = body.classList.contains("body--dark") ? "jasne" : "ciemne" ;   
   }
   const init = () => {
      const button = document.querySelector(".button");
      button.addEventListener("click", toggleBackground);
      welcome();
   }
   init();
}