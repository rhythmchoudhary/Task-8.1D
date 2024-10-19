import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCM7D10narLnNCITBO3J6TMz5bs9WmzyfE",
    authDomain: "task8d-8b05e.firebaseapp.com",
    projectId: "task8d-8b05e",
    storageBucket: "task8d-8b05e.appspot.com",
    messagingSenderId: "911419195112",
    appId: "1:911419195112:web:9b9f60e3a7cc3e8f9e535d",
    measurementId: "G-E3Q97JR2YB"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
