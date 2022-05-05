// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage'
import 'firebase/compat/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGw6tF-crTsBbNbaXHT_CK1FRbFJU1lW0",
    authDomain: "reels-91614.firebaseapp.com",
    projectId: "reels-91614",
    storageBucket: "reels-91614.appspot.com",
    messagingSenderId: "1011486939604",
    appId: "1:1011486939604:web:b2b0b2809bb724868e9e41"
  
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users'),
    posts : firestore.collection('posts'),
    comments : firestore.collection('comments'),
    getTimeStamp : firebase.firestore.FieldValue.serverTimestamp
}

export const storage = firebase.storage();