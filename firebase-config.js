// 1. Import the necessary Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// 2. Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuGdLXbn4IrvFKrMxOQ1jh7Az04_wZSJs",
  authDomain: "campuskona-796f1.firebaseapp.com",
  projectId: "campuskona-796f1",
  storageBucket: "campuskona-796f1.firebasestorage.app",
  messagingSenderId: "223156849382",
  appId: "1:223156849382:web:9023e44ef924b246244927"
};

// 3. Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 4. Export the database tools for index.html and post.html
export { db, collection, getDocs, addDoc, deleteDoc, doc };