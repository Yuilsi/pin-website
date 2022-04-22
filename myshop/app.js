// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { login, createUser,addUserToDatabase} from "./src/scripts/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBFTtgH2DhH2Hn7SUfmttvJ9dA9QQTRtbI",
  authDomain: "webshop-372b4.firebaseapp.com",
  projectId: "webshop-372b4",
  storageBucket: "webshop-372b4.appspot.com",
  messagingSenderId: "433842013330",
  appId: "1:433842013330:web:d586ced29278cda9d0524b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

const createUserForm = document.getElementById("createUserForm");
const loginForm = document.getElementById("loginForm");

createUserForm.addEventListener("submit", async (e) =>{
  e.preventDefault();
  
  const name = createUserForm.name.value;
  const email = createUserForm.email.value;
  const password = createUserForm.password.value;

  const newUser = {
    name,
    email,
    password,
    isAdmin:false,
  }
  const userCreated= await createUser(auth,newUser);
 await addUserToDatabase(db,userCreated.uid,newUser);
//console.log(userCreated);
});

loginForm.addEventListener("submit", e =>{
  e.preventDefault();
  const email = loginForm.email.value;
  const password = loginForm.password.value;
  login(auth,email,password);
  if(user.isAdmin){
    location.href= "./create-product.html";
  }else{
    location.href= "./products"
  }

});

