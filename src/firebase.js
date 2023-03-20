import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCjU1jidsHePnG-u9HofubQQBekJQPHUI",
  authDomain: "neeleshblog-881e7.firebaseapp.com",
  projectId: "neeleshblog-881e7",
  storageBucket: "neeleshblog-881e7.appspot.com",
  messagingSenderId: "276541816921",
  appId: "1:276541816921:web:ee8431e43c1909c25f3148",
  measurementId: "G-WEJBTHEW2Q"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
