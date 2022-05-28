/* INTERACTION HEADER */
window.addEventListener("scroll", function(){
	var header = document.querySelector("header");
	header.classList.toggle("abajo",window.scrollY>0);
})

/* MODAL LOGIN AND REGISTER */
const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const modalInfo = document.getElementById('windous');
const signUp = document.getElementById('signup');
const login = document.getElementById('logIn');

login.addEventListener('click', () => {
	localStorage.setItem("loginAction", "login");
});

signUp.addEventListener('click', () => {
  localStorage.setItem("loginAction", "register");
});


open.addEventListener("click", e => {
	modal_container.classList.add("open");

});

signUp.addEventListener('click',(e)=>{
	localStorage.setItem('registro',true);
	window.location.href = './login.html'
});

document.addEventListener('click', (event) => {
		// Validamos si clickeamos dentro del botón o de los inputs del modal
    const isClickInsideModal = modalInfo.contains(event.target);
    const isClickInsideButton = open.contains(event.target);
    
    // Si el click no fue dentro de esos 2 elementos, procedemos a remover la clase
    if (!isClickInsideModal && !isClickInsideButton) {
    	modal_container.classList.remove("open");
    }
});


/* MENU HAMBURGER */

document.getElementById("btn_menu").addEventListener("click", mostrar_menu);
document.getElementById("back_menu").addEventListener("click", ocultar_menu);
nav = document.getElementById("nav");
background_menu = document.getElementById("back_menu");

function mostrar_menu(){
    nav.style.right = "0px";
    background_menu.style.display = "block";
}

function ocultar_menu(){
    nav.style.right = "-250px";
    background_menu.style.display = "none";
}





/* GRID OF IMAGES */
var elem = document.querySelector('.grid-container');
imagesLoaded(elem, () => {   
	var msnry = new Masonry( elem, {
		  // options
		  itemSelector: '.grid-item',
		  columnWidth: 230, gutter:20, isFitWidth: true
		});
})








  