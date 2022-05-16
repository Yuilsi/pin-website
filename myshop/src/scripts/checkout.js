import { auth, db } from "./app";
import { onAuthStateChanged } from "firebase/auth";
import { getFirebaseCart } from "./functions/cart";
import { getMyLocalCart, currencyFormat } from "../utils/index";
import { addOrder } from "./functions/checkout";

const checkoutForm = document.getElementById("checkoutForm");
const orderSection = document.getElementById("checkoutOrder");
const checkoutTotal = document.getElementById("checkoutTotal");
let cart = [];
let total= 0;

function loadCart(cart) {
    total =0;
    cart.forEach(product => {
        const { name, price } = product;
        const orderProduct = {
            name,
            price
        }


        //Add total of products
        total += parseInt(product.price)*product.counter;

        renderProduct(product);
        checkoutTotal.innerText = currencyFormat(total);
    });
};
console.log ("estoy aqui");

function renderProduct(product) {
    const orderProduct = document.createElement("div");
    orderProduct.className = "order";

    orderProduct.innerHTML = `
        <img src="${product.images[0]}" alt="" class="order__img">
        <div class="order__infosection">
            <h3 class="order__name">${product.name}</h3>
            <p class="order__info">${currencyFormat(product.price)}</p>
        </div>`;

    orderSection.appendChild(orderProduct);
}

checkoutForm.addEventListener("change", e => {
    finalTotal = total;

    finalTotal = total+shippingPrice;
    shippingText.innerHTML = "Shipping price: " + currencyFormat(shippingPrice);
    checkoutTotal.innerText = finalTotal;
});

checkoutForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("clicked");

    const city = checkoutForm.city.value;
    const cellphone = checkoutForm.cell.value;
    
    const orderComplete = {
        email,
        city, 
        cellphone,
         paymentInfo,
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
    } else {
        cart = getMyLocalCart();
      // User is signed out
      // ...
    }

    loadCart(cart);

  });


 
 /*  emailjs.sendForm(service_id, template_id, myform[0])
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


