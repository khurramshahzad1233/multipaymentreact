import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCTFQIqozw0w0pYbKURo5mkG_pQE0Y6IVE",
  authDomain: "multipayment-8153e.firebaseapp.com",
  projectId: "multipayment-8153e",
  storageBucket: "multipayment-8153e.appspot.com",
  messagingSenderId: "564698227517",
  appId: "1:564698227517:web:ab1a1db83a24633b40db54",
  measurementId: "G-04YMGZ3SRM"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
export const db=getFirestore(firebaseapp)