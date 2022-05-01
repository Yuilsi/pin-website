// Import the functions you need from the SDKs you need
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import firebaseConfig from "../utils/firebase";
import { addProduct, uploadImages, uploadImages} from "./functions/addProduct";
import {getStorage} from "firebase/storage";


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const createProductForm = document.getElementById("createProductForm");
const storage = getStorage(app);
//console.log(storage)


createProductForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("create a new product")
    ;

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