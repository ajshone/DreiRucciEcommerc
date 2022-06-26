import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBEiBSHXn2nNoo0UF9WXpFtDqZv0uFC4ss",
    authDomain: "drei-rucci.firebaseapp.com",
    projectId: "drei-rucci",
    storageBucket: "drei-rucci.appspot.com",
    messagingSenderId: "624856681722",
    appId: "1:624856681722:web:7eeb02b530ef9a056e8d43",
    measurementId: "G-P5SE6WX2RJ"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const analytics = firebase.analytics();
export { auth, db, storage }

