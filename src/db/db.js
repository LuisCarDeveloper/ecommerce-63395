import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqB3tHWk1yxIp-C0lZ8VvGfLwqo86KQoM",
  authDomain: "beerclickecommerce.firebaseapp.com",
  projectId: "beerclickecommerce",
  storageBucket: "beerclickecommerce.firebasestorage.app",
  messagingSenderId: "283733076486",
  appId: "1:283733076486:web:779211cf4817213d8eb187"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore()

export default db;