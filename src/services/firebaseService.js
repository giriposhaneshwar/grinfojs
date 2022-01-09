// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.GR_INFO_APIKEY,
  authDomain: process.env.GR_INFO_AUTHDOMAIN,
  projectId: process.env.GR_INFO_PROJECTID,
  storageBucket: process.env.GR_INFO_STORAGEBUCKET,
  messagingSenderId: process.env.GR_INFO_MESSAGINGSENDERID,
  appId: process.env.GR_INFO_APPID,
};

// Initialize Firebase
export default const firebase = initializeApp(firebaseConfig);