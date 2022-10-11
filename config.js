import firebase from "firebase"
require ("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyB7i7OfJWejOcEBHiMH4wFF6dFWKMpsJ2w",
    authDomain: "e-library-ee5ef.firebaseapp.com",
    projectId: "e-library-ee5ef",
    storageBucket: "e-library-ee5ef.appspot.com",
    messagingSenderId: "890105192138",
    appId: "1:890105192138:web:bdc959800569d1ebf81e33"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase.firestore()