import { storage, db } from "./app";
import { addProduct, uploadImages } from "./functions/addProduct";


const createProductForm = document.getElementById("createProductForm");
createProductForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("create a new product");

const name =createProductForm.name.value;
const description=createProductForm.description.value;
const price= createProductForm.price.value;
const category= createProductForm.category.value;
const images= createProductForm.images.files;

let gallery = [];


if(images.length){
  //si mi arreglo de imagenes tiene un tamaño, entonces 
  //vamos a subir las imagenes a firestore
  const uploadedImages= await uploadImages(storage,
    [...images]);
console.log(uploadedImages);

gallery = await Promise.all(uploadedImages);


}

const newProduct = {
  name,
  description,
  price,
  category,
   images: gallery, 
}

await addProduct(db,newProduct);
//console.log(newProduct);

});