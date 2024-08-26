// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseKey from "@/keys/firebase-key"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration





// Initialize Firebase:避免重初始化所以增加getApps變數的判斷式
if (getApps().length === 0) {
    const app = initializeApp(firebaseKey);
}

//宣告db，用來接收 getFirestore() 函数返回的 Firestore 值。
const db = getFirestore();
export default db;