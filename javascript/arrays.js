const objects = [
    {
         images: "../img/products/1.png",
         name: "corgi",
         price:5500,
         kind:"gothic",
         description:"Pin de corgi ",
         material: "metalico",
         stock:false
   },
    {
        images: "../img/products/2.png",
        name: "gato",
        price:5500,
        kind:"anime character",
        description:"es un pin xxx",
        material: "metalico",
        stock:true
    },
    {
        images: "../img/products/3.png",
        name: "conejo",
        price:7500,
        kind:"dog",
        description:"es un pin xxx",
        material: "metalico",
        stock:true
    },
    {
        images: "../img/products/4.png",
        name: "anime",
        price: 5500,
        kind:"cat",
        description:"es un pin xxx",
        material: "metalico",
        stock:false
       
    }, 
    {
        images: "../img/products/5.png",
        name: "anime",
        price: 5500,
        kind:"cat",
        description:"es un pin xxx",
        material: "metalico",
        stock:false
       
    }, 
    {
        images: "../img/products/6.png",
        name: "anime",
        price: 5500,
        kind:"cat",
        description:"es un pin xxx",
        material: "metalico",
        stock:false
       
    }, 
    {
        images: "../img/products/7.png",
        name: "anime",
        price: 5500,
        kind:"cat",
        description:"es un pin xxx",
        material: "metalico",
        stock:false
       
    }, 
    {
        images: "../img/products/8.png",
        name: "anime",
        price: 5500,
        kind:"cat",
        description:"es un pin xxx",
        material: "metalico",
        stock:false
       
    }, 
    {
        images: "../img/products/9.png",
        name: "anime",
        price: 5500,
        kind:"cat",
        description:"es un pin xxx",
        material: "metalico",
        stock:false
       
    }, 
    {
        images: "../img/products/10.png",
        name: "anime",
        price: 5500,
        kind:"cat",
        description:"es un pin xxx",
        material: "metalico",
        stock:false
       
    }, 
   ];

   const divobjects= document.getElementById("objects");

   objects.forEach(product => {
       const {images,name,price,kind,description,material,stock}=product;
      if(price > 6000 || stock){
       console.log(product);
      } 

      const pines= document.createElement("div");
      const stockLabel = stock ? "Disponible" : "Agotado";

      pines.innerHTML=  `
      <h1 class= "product__name">${name}</h1>
      <img src="${images}" alt="">
      <h2 class= "product__kind">${kind}</h2>
      <h3 class= "product__material">${material}</h3>
      <p>${description}</p>
      <p class="product__price">${price}</p>
      <p>${stockLabel}</p>
      `;
      
      divobjects.appendChild(pines);


   });











 