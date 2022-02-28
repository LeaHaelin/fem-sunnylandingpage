const hamburgerEl = document.getElementById("hamburger"); //id of a 
const menuEl = document.querySelector(".hero_mobile_menu"); 
const toggleEl = document.querySelector(".open_toggle");

console.log(hamburgerEl);
console.log(menuEl);

hamburgerEl.addEventListener("click" , ()=> {
    menuEl.classList.toggle("open_toggle")
})


