// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXTlK7s_vJDIdEQ0ke-7G3pkd3ZGj_Gxg",
    authDomain: "myapp-e5581.firebaseapp.com",
    databaseURL: "https://myapp-e5581-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "myapp-e5581",
    storageBucket: "myapp-e5581.appspot.com",
    messagingSenderId: "507445416163",
    appId: "1:507445416163:web:39bc47d565daee6f88b5d6"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set };
