import { auth, db } from "./app";
import { onAuthStateChanged } from "firebase/auth";
import { getFirebaseCart, createFirebaseCart } from "./functions/cart";
import { addProductToCart } from "../utils";
import { getMyLocalCart, currencyFormat } from "../utils/index";

const cartSection = document.getElementById("cart");
const totalSection = document.getElementById("total");
const checkoutBtn = document.getElementById("checkoutBtn");
let cart = [];

function loadCart(cart) {
    let total = 0;
    cart.forEach(product => {
        renderProduct(product);
        total += parseInt(product.price)*product.counter
    });
    totalSection.innerText = currencyFormat(total);
};
console.log ("estoy")
async function removeProduct(productId) {
    const newCart = cart.filter(product => product.id !== productId);
    
    cart = newCart;

    if (userLogged) {
        await createFirebaseCart(db, userLogged.uid, newCart);
    }

    addProductToCart(newCart);

    cartSection.innerHTML = "";

    loadCart(newCart);

}
function renderProduct(product) {
    const productCart = document.createElement("li");
    productCart.className = "product";
    productCart.innerHTML = `
    <img src="${product.images[0]}" class="product__image">
    <h2 class="product__name">${product.name}</h2>
    <h3 class="product__price">${currencyFormat(product.price)}</h3>
    <button class="product__delete">Eliminar producto</button>
   
    `;

    //dlete product
    cartSection.appendChild(productCart);
    productCart.addEventListener("click", e => {
         if (e.target.tagName === "BUTTON") {
             console.log("remove it!");
             removeProduct(product.id);
         }
    })

    //buy product
   

   
};

checkoutBtn.addEventListener("click", e => {
    e.preventDefault();
    
    //Check if a user is logged before switching pages
    if (userLogged == undefined) {
        alert("Login to continue to checkout");
    } else {
        //If logged in, go to checkout
        window.location.href = "./checkout.html";
    }
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