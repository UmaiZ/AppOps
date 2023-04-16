import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDkwo92oExUsbdEqizu5eFXuDQC08WseJs",
    authDomain: "theappops.firebaseapp.com",
    projectId: "theappops",
    storageBucket: "theappops.appspot.com",
    messagingSenderId: "948095914256",
    appId: "1:948095914256:web:8e436b120de346d45d1595",
    measurementId: "G-M23EEGKJJS"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)