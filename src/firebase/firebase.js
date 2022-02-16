// import app from "firebase/app";
import firebaseConfig from "./config";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// modulos firebase
import "firebase/firestore";

class Firebase {
  constructor() {
    // app.initializeApp(firebaseConfig);
    // if (!app.apps.length) {
    //   app.initializeApp(firebaseConfig);
    // }
    // this.db = app.firestore();
    this.app = initializeApp(firebaseConfig);
    this.db = getFirestore(this.app);
  }
}

const firebase = new Firebase();
export default firebase;
