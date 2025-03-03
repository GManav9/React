// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQIbX0VQH7VG1Obyqf0kAHlTbOYdCA_ng",
  authDomain: "fir-48d6c.firebaseapp.com",
  projectId: "fir-48d6c",
  storageBucket: "fir-48d6c.firebasestorage.app",
  messagingSenderId: "398303761750",
  appId: "1:398303761750:web:978523856b89b55a53b2f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

// export default firebaseConfig;
