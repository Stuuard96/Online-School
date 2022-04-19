/*-------------------variables de clases--------------------*/
const bars__open = document.querySelector("#nav__open");
const menu = document.querySelector(".nav__menu--content");

/*------------Ejecución de las funciones---------------------*/
bars__open.addEventListener("click", toggleMenu);

/*--------------------Close Menu--------------------------*/
function toggleMenu(){
    menu.classList.toggle("toggle__menu");

    if(bars__open.classList.contains('fa-bars')){
        bars__open.classList.replace('fa-bars','fa-xmark');
    }else{
        bars__open.classList.replace('fa-xmark','fa-bars');
    }
}





