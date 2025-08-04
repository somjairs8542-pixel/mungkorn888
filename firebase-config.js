// firebase-database.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyB0_WAvqnepPH2slauRyXh7y14uhvvJ2rM",
  authDomain: "mungkorn888-72072.firebaseapp.com",
  databaseURL: "https://mungkorn888-72072-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mungkorn888-72072",
  storageBucket: "mungkorn888-72072.appspot.com",
  messagingSenderId: "15500489348",
  appId: "1:15500489348:web:3cee0ae802bc04eb5c48d1",
  measurementId: "G-VH5Y1T4PNT"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, set };
