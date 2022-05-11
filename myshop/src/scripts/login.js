// Import the functions you need from the SDKs you need

import { db, auth } from "./app";
import { login, createUser, addUserToDatabase } from "./functions/auth";

//--------------------------SIGN UP---------------------------------
const createUserForm = document.getElementById("createUserForm");
//const loginForm = document.getElementById("loginForm");
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
console.log(userCreated);
});

/*loginForm.addEventListener("submit", e =>{
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
*/
 //--------------------------LOGIN--------------------------------

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

   