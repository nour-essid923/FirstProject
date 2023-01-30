// Import the functions you need from the SDKs you need
import app from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHYRnQrX2RpTMy5ptRRjTs6YRgW9vVC4I",
  authDomain: "react-native-application-3dd38.firebaseapp.com",
  databaseURL: "https://react-native-application-3dd38-default-rtdb.firebaseio.com",
  projectId: "react-native-application-3dd38",
  storageBucket: "react-native-application-3dd38.appspot.com",
  messagingSenderId: "374237972677",
  appId: "1:374237972677:web:c94e445d1256a21f9588ac",
  measurementId: "G-SP7R0BP6M0"
};

// Initialize Firebase
const initfirebase =app.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export default initfirebase;