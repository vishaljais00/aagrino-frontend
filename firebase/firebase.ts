import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

// web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCHRUyrgA0D2uTRs82pADCCSHNUDOOFkts",
    authDomain: "aagrino-58428.firebaseapp.com",
    projectId: "aagrino-58428",
    storageBucket: "aagrino-58428.appspot.com",
    messagingSenderId: "810284806580",
    appId: "1:810284806580:web:722be9a94fe8e3416d42e1"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth();

export default db;
export {app, auth};


