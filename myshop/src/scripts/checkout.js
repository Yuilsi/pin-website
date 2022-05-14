import { auth, db } from "./app";
import { onAuthStateChanged } from "firebase/auth";
import { getFirebaseCart } from "./functions/cart";
import { getMyLocalCart, currencyFormat } from "../utils/index";
import { addOrder } from "./functions/checkout";

const checkoutForm = document.getElementById("checkoutForm");
const orderSection = document.getElementById("checkoutOrder");
const checkoutTotal = document.getElementById("checkoutTotal");
let cart = [];

function loadCart(cart) {
    cart.forEach(product => {
        const { name, price } = product;
        const orderProduct = {
            name,
            price
        }

        //Add products in bag to order and push to array
        order.push(orderProduct);

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
            <p class="order__info">${product.color.name.toUpperCase()}</p>
            <p class="order__info">${currencyFormat(product.price)}</p>
        </div>`;

    orderSection.appendChild(orderProduct);
}

checkoutForm.addEventListener("change", e => {
    finalTotal = total;


    //Final order total based on shipping
    finalTotal = total+shippingPrice;
    shippingText.innerHTML = "Shipping price: " + currencyFormat(shippingPrice);
    checkoutTotal.innerText = finalTotal;
});

checkoutForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("clicked");

    //All the checkout inputs
    const firstname = checkoutForm.firstname.value;
    const lastname = checkoutForm.lastname.value;
    const address = checkoutForm.address.value;
    const city = checkoutForm.city.value;
    const cellphone = checkoutForm.cell.value;
    const shipping = checkoutForm.shipping.value;
    const expiration = checkoutForm.expiration.value;
    const code = checkoutForm.code.value;

    //Create user array
    const userInfo = {
       firstname,
       lastname,
       address,
       city, 
       cellphone 
    }

    //Create payment array
    const paymentInfo = {
        shipping, 
        expiration,
        code
    }

    //Create order object
    const orderComplete = {
        userInfo,
        paymentInfo,
        order,
        finalTotal
    }

    //Add order to firestore database
    await addOrder(db, orderComplete, userLogged.uid);

    //Show popup
    popup.classList.add('popup--open');
    //Delete bag from firestore and local storage
    deleteFromBag(db, userLogged.uid);
    deleteMyLocalBag();

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


 




