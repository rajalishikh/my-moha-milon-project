// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_v8fcKTRd9JyIArQdB7tDbbtMRRKsebM",
  authDomain: "jorina-banu.firebaseapp.com",
  projectId: "jorina-banu",
  storageBucket: "jorina-banu.firebasestorage.app",
  messagingSenderId: "873746856766",
  appId: "1:873746856766:web:fc31eb1035954034d54a6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };

