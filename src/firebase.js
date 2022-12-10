// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyChV-ABHtyRHez8OAcBVEMEZFWbQwjH5uI",
    authDomain: "assignment5-swe.firebaseapp.com",
    projectId: "assignment5-swe",
    storageBucket: "assignment5-swe.appspot.com",
    messagingSenderId: "863281086145",
    appId: "1:863281086145:web:2ef84febc92bf663df1e40",
    measurementId: "G-5F513TY8HZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;