import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBx9HH4iq80jDwxj9lcXZOIAOyeRJkTWtM",
    authDomain: "fir-83e44.firebaseapp.com",
    projectId: "fir-83e44",
    storageBucket: "fir-83e44.firebasestorage.app",
    messagingSenderId: "295454276253",
    appId: "1:295454276253:web:1b39410fdc3a6baf1eb274",
    measurementId: "G-2W7P620Q4V"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
