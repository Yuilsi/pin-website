import { db, auth } from "./app";
import { onAuthStateChanged } from "firebase/auth";
import { getProducts } from "./functions/products";
import { createFirebaseCart, getFirebaseCart  } from "./functions/cart";
import { addProductToCart,subtractProductToCart, getMyLocalCart, currencyFormat } from "../utils";

const productSection = document.getElementById("products");
const categoryFilter = document.getElementById("category");
const orderFilter = document.getElementById("order");

let userLogged = undefined;
let products = [];
let cart = [];

async function loadProducts() {
    const firebaseProducts = await getProducts(db);
    productSection.innerHTML = "";
    firebaseProducts.forEach(product => {
        renderProduct(product);
    });

    products = firebaseProducts;
}

function renderProduct(item) {
    const product = document.createElement("a");
    product.className = "product";

    product.setAttribute("href", `./product.html?id=${item.id}`);

    const coverImage = item.images ? item.images[0] : "https://cdn1.iconfinder.com/data/icons/business-company-1/500/image-512.png";

    const isProductAddedToCart = cart.some((productCart) => productCart.id === item.id);



    product.innerHTML = `
   
    <img src="${coverImage}" alt="" class="product__image">
  
    <div class="product__info">
        <p class="product__category">${item.category}</p> 
        <h2 class="product__name">${item.name}</h2>
        <h3 class="product__price">${currencyFormat(item.price)}</h3>
        <button class="product__cart">Agregar al carrito</button>
        </div>
     
    
   
    `;

    productSection.appendChild(product);

    const productCartButton = product.querySelector(".product__cart");
 
    productCartButton.addEventListener("click", async (e) => {
        e.preventDefault(); // evitar que al dar click en el boton, funcione el enlace del padre.
        const currentProductIsAdded = cart.find(product => product.id === item.id);

        const productToAdd = {
            ...item,
            counter: (currentProductIsAdded) ? currentProductIsAdded.counter + 1 : 1,
        }

        if (currentProductIsAdded) {
            const indexElement = cart.findIndex(product => product.id === item.id);
            cart[indexElement] = productToAdd;
        } else {
            cart.push(productToAdd);
        }

        addProductToCart(cart);

        if (userLogged) {
           productCartButton.innerHTML = "producto Añadido";
           productCartButton.disabled = true ;
           setTimeout(()=> {
               productCartButton.innerHTML= "Agregar al carrito";
               productCartButton.disabled =false;
           }, 100);

            await createFirebaseCart(db, userLogged.uid, cart);
        }

     //   productCartButton.setAttribute("disabled", true);
      //  productCartButton.innerText = "Producto añadido";

    });



}

     
     

function filterBy(){
    const newCategory = categoryFilter.value;
    const newOrder = orderFilter.value;

    let filteredProducts = [];

    if (newCategory !== "") {
        filteredProducts = products.filter((product) => product.category === newCategory);
    } else {
        filteredProducts = products;
    }

    if (newOrder === "asc") {
        filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
    }

    if (newOrder === "desc") {
        filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
    }
    
    productSection.innerHTML = "";
    filteredProducts.forEach(product => {
        renderProduct(product);
    });

}

categoryFilter.addEventListener("change", e => {
    filterBy();
});

orderFilter.addEventListener("change", e => {
    filterBy();
});

onAuthStateChanged(auth, async (user) => {
    if (user) {
      
      userLogged = user;
      cart = await getFirebaseCart(db, userLogged.uid);
     
    } else {
        cart = getMyLocalCart();
     
    }

    loadProducts();

  });