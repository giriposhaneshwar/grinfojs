import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.GR_INFO_APIKEY,
  authDomain: process.env.GR_INFO_AUTHDOMAIN,
  projectId: process.env.GR_INFO_PROJECTID,
  storageBucket: process.env.GR_INFO_STORAGEBUCKET,
  messagingSenderId: process.env.GR_INFO_MESSAGINGSENDERID,
  appId: process.env.GR_INFO_APPID,
};

if (!firebase.app.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;