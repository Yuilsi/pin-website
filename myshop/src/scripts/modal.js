const open = document.getElementById('cta');
const modal_container = document.getElementById('modal_container');

const close = document.getElementById('close');

open.addEventListener(click,function(e){
  modal_container.style.opacity= "1"
  modal_container.style.visibility= "visiable";
});

/*open.addEventListener('click', () => {
  modal_container.classList.add('show');  
});

open.addEventListener('mouseenter', () => {
    modal_container.classList.add('show');
  });

close.addEventListener('mouseleave', () => {
    modal_container.classList.remove('show');
  });
close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});
*/

