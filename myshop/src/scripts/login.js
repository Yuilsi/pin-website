import { db, auth } from "./app";
import { login, createUser, addUserToDatabase, getUser } from "./functions/auth";

window.addEventListener("load", () => {
  
  // Import the functions you need from the SDKs you need
  
  
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
    location.href= "/index.html"
  console.log(userCreated);
  });
   //--------------------------LOGIN--------------------------------
  
  let user;
  const loginForm = document.getElementById("loginForm");
  
  loginForm.addEventListener("submit", async (e) =>{
    try {   
      e.preventDefault();
      const inputs = loginForm.querySelectorAll("input");
      const data = {};
      inputs.forEach(input => data[input.name] = input.value);
      user = await login(auth,data.username,data.password);
      const userInfo = await getUser(db,user);
      console.log(userInfo.data().isAdmin);
      if(userInfo.data().isAdmin){
        location.href= "/createProduct.html";
      }else{
        location.href= "/index.html"
      }
    } catch(e) {
      console.error(e);
    }
    
    });
  
     

})

//--------------------estilo------------------------

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


window.addEventListener('DOMContentLoaded', (event) => {
    const loginAction = localStorage.getItem("loginAction");
    if (loginAction === "register") {
      container.classList.add("right-panel-active");
    }
});