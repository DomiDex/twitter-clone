// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB2Ei4adzbkRwE11_hveyKIoRJHitedIq4',
  authDomain: 'twitter-app-d54f2.firebaseapp.com',
  projectId: 'twitter-app-d54f2',
  storageBucket: 'twitter-app-d54f2.appspot.com',
  messagingSenderId: '573897192586',
  appId: '1:573897192586:web:9baf46009b8ea5fd56e973',
  measurementId: 'G-3XB6GL3R51',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
