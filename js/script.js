/*variables de clases*/
const bars_menu = document.querySelector(".nav__bar");
const menu = document.querySelector(".nav__menu");
const cursor = document.querySelectorAll(".nav__menu--a");
const span__bars = document.querySelectorAll(".nav__bar span");


/*Ejecución de las funciones*/
bars_menu.addEventListener("click", animateBars);
bars_menu.addEventListener("click", toggleMenu);
bars_menu.addEventListener("click", cursorStyle);

/*-------------------------Close Hamburguesa-----------------*/
function animateBars(){
    span__bars.forEach( (i, index)=>{
        i.classList.toggle("nav__bar--active"+index)
    });
}

/*--------------------Close Menu--------------------------*/
function toggleMenu(event){
    menu.classList.toggle("toggle__menu");  
}

/*--------------Quitar estilo del Cursor-------------------*/
function cursorStyle(){
    cursor.forEach(i=>i.style.setProperty('cursor', 'pointer'));
}
 