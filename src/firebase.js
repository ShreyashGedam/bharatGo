import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
const APIKEY = import.meta.env.VITE_APIKEY;
const AUTHDOMAIN = import.meta.env.VITE_AUTHDOMAIN;
const PROJECTID = import.meta.env.VITE_PROJECTID;
const STORAGE_BUCKET = import.meta.env.VITE_STORAGE_BUCKET;
const MESSAGINGSENDERID = import.meta.env.VITE_MESSAGINGSENDERID;
const APPID = import.meta.env.VITE_APPID;

const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID,
};

initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
export { provider };
