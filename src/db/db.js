import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = { // Credential from FireStore
  apiKey: "AIzaSyCqB3tHWk1yxIp-C0lZ8VvGfLwqo86KQoM",
  authDomain: "beerclickecommerce.firebaseapp.com",
  projectId: "beerclickecommerce",
  storageBucket: "beerclickecommerce.firebasestorage.app",
  messagingSenderId: "283733076486",
  appId: "1:283733076486:web:779211cf4817213d8eb187"
};

const app = initializeApp(firebaseConfig); // Initialize Firestore a particular project
const db = getFirestore(app)// Initialize el DB service

export default db;