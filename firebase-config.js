// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyB0_WAvqnepPH2slauRyXh7y14uhvvJ2rM",
  authDomain: "mungkorn888-72072.firebaseapp.com",
  databaseURL: "https://mungkorn888-72072-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mungkorn888-72072",
  storageBucket: "mungkorn888-72072.firebasestorage.app",
  messagingSenderId: "15500489348",
  appId: "1:15500489348:web:3cee0ae802bc04eb5c48d1",
  measurementId: "G-VH5Y1T4PNT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
