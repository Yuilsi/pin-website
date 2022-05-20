

window.addEventListener('load', function(){       //indica que cuando la pagina cargue va a realizar una funcion
	 new Glider(document.querySelector('.carousel__list'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable:true,
		dots: '.carousel__arrows',
		arrows: {
			prev: '.carousel__prev',
			next: '.carousel__next'
		},
		responsive: [
			{
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // en tamaños mayores o iguales a 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 5,
				slidesToScroll: 5
			  }
			}
		]
	});
});


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


/*


console.log("hola")

document.body.addEventListener('click', (e) => {

	if (modal_container.classList.contains("show")) {
		modal_container.classList.remove('show');  
	}
  });*/

  // Agregar la clase .open para mostrar el modal
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






  