import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDawciYk34z0F59QQFfx7eUys4FuVe27SI",
  authDomain: "yt-clone-a8da6.firebaseapp.com",
  projectId: "yt-clone-a8da6",
  storageBucket: "yt-clone-a8da6.appspot.com",
  messagingSenderId: "855377009473",
  appId: "1:855377009473:web:7234f809ccdea66a7b5fc0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
