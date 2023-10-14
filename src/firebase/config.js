import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxgVdMgLdjWo_4qrZZ3_UfqO5-HqTW-Kk",
  authDomain: "food-recipes-27a65.firebaseapp.com",
  projectId: "food-recipes-27a65",
  storageBucket: "food-recipes-27a65.appspot.com",
  messagingSenderId: "1025471107681",
  appId: "1:1025471107681:web:2ddc996b9b2befbb725020"
};

  initializeApp(firebaseConfig);

  const db = getFirestore()

  export { db }