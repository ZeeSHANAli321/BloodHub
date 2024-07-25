/* // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnc91I-geh5tktZOI8cee-On3l7lMLUj4",
  authDomain: "bloodhub-8eabb.firebaseapp.com",
  projectId: "bloodhub-8eabb",
  storageBucket: "bloodhub-8eabb.appspot.com",
  messagingSenderId: "50863312358",
  appId: "1:50863312358:web:8fea02e579e47ed9fb5a27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase app and messaging instance
const messaging = getMessaging(app);
export { app, messaging }; */