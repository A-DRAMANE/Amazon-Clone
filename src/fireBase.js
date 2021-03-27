// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAG64_sTViDf5Toa3LOWK6zo6sVSHIRolM",
    authDomain: "e-challange-1e28f.firebaseapp.com",
    projectId: "e-challange-1e28f",
    storageBucket: "e-challange-1e28f.appspot.com",
    messagingSenderId: "28063652847",
    appId: "1:28063652847:web:7a6caf0981a39ec68cf41a",
    measurementId: "G-2CCTCEFEW9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};