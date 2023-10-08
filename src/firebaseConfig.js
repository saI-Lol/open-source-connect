// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLOdUWOvxTg0-mnUui3Zj52XtgHJD0xyA",
  authDomain: "open-source-hub-d7a42.firebaseapp.com",
  projectId: "open-source-hub-d7a42",
  storageBucket: "open-source-hub-d7a42.appspot.com",
  messagingSenderId: "444393817989",
  appId: "1:444393817989:web:578ab38baa880f589a66ec"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// export const auth = app.auth();