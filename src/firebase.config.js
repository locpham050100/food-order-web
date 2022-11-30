import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCbXcohO5XpN6CCs4uNsdeCrzuFjhwoso4",
  authDomain: "foodapp-e3dd4.firebaseapp.com",
  databaseURL: "https://foodapp-e3dd4-default-rtdb.firebaseio.com",
  projectId: "foodapp-e3dd4",
  storageBucket: "foodapp-e3dd4.appspot.com",
  messagingSenderId: "1078465552193",
  appId: "1:1078465552193:web:41724993a961f8bca6cbc0",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
