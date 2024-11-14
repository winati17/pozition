import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const config = {
    apiKey: "AIzaSyA8qecvl1Y05SM-n0Ye-ksgtrGbgC8MvCg",
    authDomain: "credentials-2c825.firebaseapp.com",
    projectId: "credentials-2c825",
    storageBucket: "credentials-2c825.firebasestorage.app",
    messagingSenderId: "868689616981",
    appId: "1:868689616981:web:f82a4cf4c814ca228cb4dc",
    measurementId: "G-SHTL1CNHFS"
  };

  const app = initializeApp(config);
  const auth = getAuth(app);

export async function loginUser(username: string, password: string) {
  const email = `${username}@blabla.com`;
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    console.log(res);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}