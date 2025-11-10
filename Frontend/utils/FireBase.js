import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_apiKey,
  authDomain: "onecartproject-95637.firebaseapp.com",
  projectId: "onecartproject-95637",
  storageBucket: "onecartproject-95637.firebasestorage.app",
  messagingSenderId: "940673578082",
  appId: "1:940673578082:web:3261fd427b3de8c1eb4d3b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
