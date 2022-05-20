import { auth, db } from "./app";
import { onAuthStateChanged } from "firebase/auth";
import { getFirebaseCart, createFirebaseCart } from "./functions/cart";
import { addProductToCart } from "../utils";
import { getMyLocalCart, currencyFormat } from "../utils/index";

const cartSection = document.getElementById("cart");
const totalSection = document.getElementById("totalSection");
const checkoutBtn = document.getElementById("checkoutBtn");
/* const deleteAll = document.getElementById("product__delete"); */

let cart = [];
let userLogged = undefined;

function loadCart(cart) {
    let total = 0;
    cart.forEach(product => {
        renderProduct(product);
        total += parseInt(product.price)*product.counter
        //total += parseInt(product.price);
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

/*  async function removeOneProduct(productId) {
   const reducedCounter = cart.map(product => {
       return {
           ...product,
           counter:product.id === productId ? product.counter - 1 : product.counter
       };
   });
   const newCart= reducedCounter.filter(product => product.counter > 0);
    
    cart = newCart;

    if (userLogged) {
        await createFirebaseCart(db, userLogged.uid, newCart);
    }

    addProductToCart(newCart);

    cartSection.innerHTML = "";

    loadCart(newCart);

} */
 
function renderProduct(product) {
    const productCart = document.createElement("li");
    productCart.className = "product";
    productCart.innerHTML = `
    <img src="${product.images[0]}" class="product__image">
   
    <h2 class="product__name">${product.name}</h2>
    <h3 class="product__price">${currencyFormat(product.price)}</h3>
    
    <h3 class="cart__info"> ${product.counter}</h3>
    <div>
    
    <button class="product__delete">Eliminar</button>
 </div>
    `
    ;

    //dlete product
   
    cartSection.appendChild(productCart);

    productCart.addEventListener("click", e => {
         if (e.target.tagName === "BUTTON") {
             console.log("remove it!");
             removeProduct(product.id);
             /* removeOneProduct(product.id) */
         }
    })


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