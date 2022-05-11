import { db } from "./app";
import { getProducts } from "./functions/products";


const productSection = document.getElementById("products");

const categoryFilter = document.getElementById("category");
const orderFilter = document.getElementById("order");
let products = []

async function loadProducts(){
    const firebaseProducts = await getProducts(db);
    productSection.innerHTML = "";  //indica que la página esta cargando
    firebaseProducts.forEach(product => {
        renderProduc(product);
       
    });

    products = firebaseProducts;
}

function renderProduc(item){
    const product = document.createElement("a");
    product.className = "product";

    product.setAttribute("href", `/product.html?id=dsfdgdgdg`)

    const coverImage = item.images ? item.images[0] : "https://cdn.dribbble.com/users/55871/screenshots/2158022/media/8f2a4a2c9126a9f265fb9e1023b1698a.jpg?compress=1&resize=400x300";

 product.innerHTML = `  <img src="${coverImage}" alt="" class="product__image">
 <div class="product__info">
 <p class="product__category>${item.category}</p>
     <h2 class="product__name">${item.name}</h2>
     <h3 class="product__price">$${item.price}</h3>
     <button class="product__cart">Añadir al carrito</button>

 </div>`;

 productSection.appendChild(product);
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
categoryFilter.addEventListener("change", e =>{
    filterBy();
});

orderFilter.addEventListener("change", e =>{
    filterBy();
});

loadProducts();