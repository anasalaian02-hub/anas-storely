import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCBK8tj9YiBzuRGTM16xRUPTU_G8zYU5SQ",
  authDomain: "anas-store-34d5b.firebaseapp.com",
  projectId: "anas-store-34d5b",
  storageBucket: "anas-store-34d5b.firebasestorage.app",
  messagingSenderId: "1075583329709",
  appId: "1:1075583329709:web:61183edc0d9b62f0782d24"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);