const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');

const close = document.getElementById('close');

open.addEventListener(click,function(e){
  modal_container.style.opacity= "1"
  modal_container.style.visibility= "visiable";
});



