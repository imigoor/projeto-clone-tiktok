
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDViJIawV86bOxBubcPSYf6DmgDM8j5SEY",
  authDomain: "tiktok---jornada-9dad7.firebaseapp.com",
  projectId: "tiktok---jornada-9dad7",
  storageBucket: "tiktok---jornada-9dad7.appspot.com",
  messagingSenderId: "608306817960",
  appId: "1:608306817960:web:dd91df9b84e718615c4b9d"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;