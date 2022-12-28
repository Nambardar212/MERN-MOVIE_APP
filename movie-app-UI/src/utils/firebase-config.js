import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA2-gj39Wldns2jIOPpYtByLo5a09LKOOY",
    authDomain: "react-movie-app-30b49.firebaseapp.com",
    projectId: "react-movie-app-30b49",
    storageBucket: "react-movie-app-30b49.appspot.com",
    messagingSenderId: "565132326296",
    appId: "1:565132326296:web:334504097d16e6a9c967ed",
    measurementId: "G-V13GM2H4L5"
  };


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);