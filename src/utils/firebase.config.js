import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import {getFirestore} from "@firebase/firestore"

const app =  firebase.initializeApp ({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-firebase-redux-cc698.firebaseapp.com",
  projectId: "react-firebase-redux-cc698",
  storageBucket: "react-firebase-redux-cc698.appspot.com",
  messagingSenderId: "44728931853",
  appId: "1:44728931853:web:899afeb9ac036602d9e744"
});

export const auth = app.auth()
export const db = getFirestore()
export default app
