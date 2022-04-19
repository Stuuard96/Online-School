/*-------------------variables de clases--------------------*/
const bars__open = document.querySelector("#nav__open");
const bars__close = document.querySelector("#nav__close");
const menu = document.querySelector(".nav__menu--content");
/* const cursor = document.querySelectorAll(".nav__menu--a");
const span__bars = document.querySelectorAll(".nav__bar span"); */


/*------------Ejecución de las funciones---------------------*/
bars__open.addEventListener("click", toggleMenu);
bars__close.addEventListener("click", closeMenu);

/*--------------------Close Menu--------------------------*/
function toggleMenu(){
    menu.classList.toggle("toggle__menu");
    bars__open.style.display='none';
    bars__close.style.display='block';
}

function closeMenu(){
    menu.classList.remove("toggle__menu");
    bars__open.style.display='block'
    bars__close.style.display='none';
}



