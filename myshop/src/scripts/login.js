// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { login, createUser,addUserToDatabase, getUser} from "./functions/auth";
import {getFirestore, getDoc} from "firebase/firestore";
import firebaseConfig from "../utils/firebase";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
let user;

const loginForm = document.getElementById("loginForm");



loginForm.addEventListener("submit", e =>{
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;
    user = login(auth,email,password);
    //const userInfo = getUser(db,user);
    
    /*if(user.isAdmin){
      location.href= "../myshop/src/createProduct.html";
    }else{
      location.href= "../myshop/src/index.html"
    }*/
  
  });