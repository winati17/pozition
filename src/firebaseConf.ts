
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, prodErrorMap, signInWithEmailAndPassword, onAuthStateChanged, User } from 'firebase/auth';
// import { showToast } from "./toast";
// import { app } from './firebaseConfig'; 

// const [toastMessage, setToastMessage] = useState<string | null>(null);

const firebaseConfig = {
  apiKey: "AIzaSyAUVqVqVCGBNOQbUWD4ZoxurYb3D3XR-i4",
  authDomain: "sisfor-6a.firebaseapp.com",
  projectId: "sisfor-6a",
  storageBucket: "sisfor-6a.firebasestorage.app",
  messagingSenderId: "945960582429",
  appId: "1:945960582429:web:a5823d29a1906e4413f5f4",
  measurementId: "G-R25VZRY3TE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export function getCurrentUser() {
  return new Promise<User | null>((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user);
      } else {
        resolve(null);
      }
      unsubscribe();
    });
  });
}


export async function loginUser(username: string, password: string) {
  const email = '$(username)@sisfor.com'
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    console.log(res);
    return {success:true};
    // return true;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    console.log(errorMessage)
    return { success: false, message: errorMessage}
    // return false;
  }
}

export async function signUpUser(username: string, password: string) {
  const email = '$(username)@sisfor.com'
  try{
    const res = await createUserWithEmailAndPassword(auth, email, password);
    console.log(res)
    return {success:true};
    // return true;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    console.log(error)
    return { success: false, message: errorMessage}
    // return false;
  }
}