import { db, auth } from "./app";
import { onAuthStateChanged } from "firebase/auth";
import { getProduct } from "./functions/getProduct";
import { getFirebaseCart, createFirebaseCart } from "./functions/cart";
import { getMyLocalCart, addProductToCart, currencyFormat } from "../utils";

const productInfoSection = document.getElementById("productInfo");
const productAssetsSection = document.getElementById("productAssets");

let userLogged = undefined;
let cart = [];

function getParam(param) {
    const url = window.location.search;
    const searchParams = new URLSearchParams(url);
    const productId = searchParams.get(param);
    return productId;
}

async function loadProduct() {
    const productId = getParam("id"); // http://localhost:1234/product.html?id=TXQ9Wf1GIoAOJLkIEMYo&age=20
    const data = await getProduct(productId);
    const product = {
        ...data,
        id: productId, // docSnap.id,
    }
    
    renderProduct(product);
}

function renderProduct(product) {
    productAssetsSection.innerHTML = `
    <img class="product__mainImage" id="mainImage" src="${product.images[0]}">`;

    const isProductAddedToCart = cart.some((productCart) => productCart.id === product.id);

    const productButtonCart = isProductAddedToCart ?
    '<button class="product__cart" disabled>Producto añadido</button>' :
    '<button class="product__cart">Añadir al carrito</button>';

    productInfoSection.innerHTML = `
    <h1 class="product__name">${product.name}</h1>
    <p class="product__description">${product.description}</p>
    <h3 class="product__price">${currencyFormat(product.price)}</h3>
    ${productButtonCart}
    <p class="bag__info">Cantidad: ${product.counter}</p>`;

    if (product.images.length > 1) {
        createGallery(product.images);
    }

    const productCartButton = document.querySelector(".product__cart");

    let counter = 0;
    
    /* productCartButton.addEventListener("click", e => {
        cart.push(product);

        addProductToCart(cart);

        if (userLogged) {
            createFirebaseCart(db, userLogged.uid, cart);
        }

        productCartButton.setAttribute("disabled", true);
        productCartButton.innerText = "Producto añadido";
    });
}
 */

productCartButton.addEventListener("click", async (e) => {
    const currentProductIsAdded = bag.find(productArray => productArray.id === product.id);

    const productToAdd = {
        ...product,
        counter: (currentProductIsAdded) ? currentProductIsAdded.counter + 1 : 1,
    }

    if (currentProductIsAdded) {
        const indexElement = bag.findIndex(product => product.id === product.id);
        bag[indexElement] = productToAdd;
    } else {
        cart.push(productToAdd);
    }

    addProductToCart(cart);

    if (userLogged) {
        await createFirebaseCart(db, userLogged.uid, bag);
    }
});

}


function createGallery(images) {
    const mainImage = document.getElementById("mainImage");

    const gallery = document.createElement("div");
    gallery.className = "product__gallery";

    images.forEach(image => {
        gallery.innerHTML += `<img src="${image}">`;
    });

    productAssetsSection.appendChild(gallery);

    const galleryImages = document.querySelector(".product__gallery");

    galleryImages.addEventListener("click", e => {
        if (e.target.tagName === "IMG") {
            mainImage.setAttribute("src", e.target.currentSrc);
        }
    });
}

onAuthStateChanged(auth, async (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      userLogged = user;
      cart = await getFirebaseCart(db, userLogged.uid);
      console.log(cart);
      // ...
    } else {
        cart = getMyLocalCart();
      // User is signed out
      // ...
    }

    loadProduct();

    console.log(loadProduct)
  });

  