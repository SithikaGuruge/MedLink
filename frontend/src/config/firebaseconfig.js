import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import "firebase/storage";

const firebaseConfig = {
 apiKey: "AIzaSyB_Ndnv41ZOpNZbmLjvREZdQt6iYj3nWEk",
  authDomain: "medilink-812fc.firebaseapp.com",
  projectId: "medilink-812fc",
  storageBucket: "medilink-812fc.appspot.com",
  messagingSenderId: "882292413623",
  appId: "1:882292413623:web:a2dd387b03c2b545442932"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
