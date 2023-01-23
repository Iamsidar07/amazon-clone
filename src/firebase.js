import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAv_C12metlrCKPOdbP_9dD5lV2ST7p07E",
  authDomain: "fir-9f669.firebaseapp.com",
  projectId: "fir-9f669",
  storageBucket: "fir-9f669.appspot.com",
  messagingSenderId: "494267629612",
  appId: "1:494267629612:web:3c40cf16b413c415049189",
  measurementId: "G-LXQ5G5H3RJ"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

const auth=getAuth()

export {auth};

export default db;