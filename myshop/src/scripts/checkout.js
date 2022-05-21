import { auth, db } from "./app";
import { onAuthStateChanged } from "firebase/auth";
import { getFirebaseCart } from "./functions/cart";
import { currencyFormat } from "../utils/index";
import { addOrder } from "./functions/checkout";

const dataForm = document.getElementById("data");
const finalOrder = document.getElementById("finalOrder");
const checkoutTotal = document.getElementById("checkoutTotal");

let cart = [];

let userLogged = undefined;
let total= 0;
let order = [];

function loadCart(cart) {
    total =0;
    cart.forEach(product => {
        const { name, price } = product;
        const orderProduct = {
            name,
            price
        } 
        order.push(orderProduct);

        
        total += parseInt(product.price)*product.counter;

        renderProduct(product);
        checkoutTotal.innerText = currencyFormat(total);
    });
};


function renderProduct(product) {
    const orderProduct = document.createElement("div");
    orderProduct.className = "shopping";

    orderProduct.innerHTML = `
        <img src="${product.images[0]}" alt="" class="shopping__image">
        
            <h3 class="shopping__name">${product.name}</h3>
            <h3 class="shopping__counter"> ${product.counter}</h3>
            <h3 class="shopping__info">${currencyFormat(product.price)}</h3>
            <div>
    
            <button class="shopping__delete">Eliminar</button>
         </div>
        `;

    finalOrder.appendChild(orderProduct);
}

dataForm.addEventListener("change", e => {
   
    checkoutTotal.innerText = total;
});

dataForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("clicked");

    const city = dataForm.city.value;
    const cellphone = dataForm.cell.value;
    const email= dataForm.email.value;
    const orderComplete = {
        email,
        city, 
        cellphone,  
        order,
        finalTotal
    }

    await addOrder(db, orderComplete, userLogged.uid);

});



onAuthStateChanged(auth, async (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      userLogged = user;
      cart = await getFirebaseCart(db, userLogged.uid);
    } 

     loadCart(cart); 

  });

 
 /*  email.sendForm(service_id, template_id, myform[0])
  .then(() => {
      
      document.querySelector('#loaders').appendChild(check);

      setTimeout(() => {
          cart.vaciarLocalStorage();
          check.remove();
          window.location = "index.html";
      }, 2000);


  }, (err) => {
      alert("Error al enviar el email\r\n Response:\n " + JSON.stringify(err));
      // myform.find("button").text("Send");
  });
 */


