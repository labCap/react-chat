import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyA22L5uM6Ffl3yE9dVEvAFzCLQHD51leRQ",
	authDomain: "react-chat-46e40.firebaseapp.com",
	projectId: "react-chat-46e40",
	storageBucket: "react-chat-46e40.appspot.com",
	messagingSenderId: "622496798454",
	appId: "1:622496798454:web:85e7ba94c0bc7d562ffed7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
