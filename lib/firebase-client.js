import * as firebase from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from "firebase/auth";
import { useState } from "react";
import { doc, setDoc, Timestamp, collection, addDoc, getFirestore } from "firebase/firestore"; 

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};


/**
 * Initializes Firebase APIs using environment variables.
 *
 * See the contributor docs for more info.
 */

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth();

const googleProvider = new GoogleAuthProvider()
export const signInWithGoogle = () => {
  signInWithPopup(auth, googleProvider).then((res) => {
    console.log(res.user)
  }).catch((error) => {
    console.log(error.message)
  })
}

export const signOutWithGoogle = async () => {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}

export const getUser = () => {
  let userObject = null
  onAuthStateChanged(auth, (user) => {
    if (user){
      userObject = user
      userObj=user
      return userObject
    }
    else {

      return null
    }
  })
  return userObject
}

export const getCurrUser = () => {
  const user = auth.currentUser;
  return user;
}

export const postData = async (data) => {
  
  data['userID'] = getCurrUser().uid
  const db = getFirestore(app);
  const docRef = await addDoc(collection(db, "FarmData"), data);
}
