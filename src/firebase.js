import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAAZb13R9CmuBp9BsqWbqLzew6csbaRwg",
  authDomain: "react-blogs-app-7a0d8.firebaseapp.com",
  projectId: "react-blogs-app-7a0d8",
  storageBucket: "react-blogs-app-7a0d8.appspot.com",
  messagingSenderId: "878000026911",
  appId: "1:878000026911:web:308e426c32186285af2c2a",
  measurementId: "G-G2NR5WBHP1"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
