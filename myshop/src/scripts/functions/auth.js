import { doc,setDoc,getDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";


async function createUser(auth,{email,password}){
    try{
      const {user} = await createUserWithEmailAndPassword(auth, email, password);
      return user;
      //adicionar la infomación del usuario

     // alert(`bienvenido, usuario ${user.email}`);    //esto cambiarlo por el id despues
    }catch(e){
  
  if(e.code ==="auth/invalid-password"){
    alert("tu contraseña debe tener min 6 caracteres");
  }
  if(e.code ==="auth/email-already-in-use"){
    alert("el correo ya esta en uso");
  }
    }
  
  }

 /* async function getUser(db, user){
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap;
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    
  }*/
  
  async function login(auth, email,password){
  try {
   const {user} = await signInWithEmailAndPassword(auth,email,password);
   console.log(user);
   return user;
  } catch (e) {
   // alert("corrreo o contraseña invalda : (");
  //  console.log(e)
    if(e.code ==="auth/wrong-password"){
      alert("contraseña incorrecta");
    }
    if(e.code ==="auth/user-not-found"){
      alert("correo no existe");
    }
  }
  }

  async function addUserToDatabase(db,userId,userInfo){
    try { 
        await setDoc(doc(db, "users", userId),userInfo);  
    } catch (e) {
        console.log(e);
    }
  }
  export {
      createUser,
      login,
      addUserToDatabase,// getUser

  }