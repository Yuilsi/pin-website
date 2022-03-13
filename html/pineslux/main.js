window.addEventListener('load', function(){       /*indica que cuando la pagina cargue va a realizar una funcion*/
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