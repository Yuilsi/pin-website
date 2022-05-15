import { getDoc, setDoc, doc } from "firebase/firestore"; 

//funcion de crearlos en el user
async function createFirebaseCart(db, userId, cart) {
    try {
        await setDoc(doc(db, "cart", userId), {
            cart
        });
    } catch (e) {
        console.log(e);
    }
}

async function getFirebaseCart(db, userId) {
    const docRef = doc(db, "cart", userId);
    const docSnap = await getDoc(docRef);
    const result = docSnap.data();
    return (result) ? result.cart : [];
}


async function changeCounter(db, userId, counterValue){
    try {
        const productRef = doc(db, "cart", userId);
        await updateDoc(productRef, { counter: counterValue});
    } catch (error) {
        console.log(error);
    }
}

export {
    createFirebaseCart,
    getFirebaseCart,
    changeCounter
}