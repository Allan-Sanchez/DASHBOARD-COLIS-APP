// import app from "firebase/app";
import firebaseConfig from "./config";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDocs,
  collection,
  addDoc,
  getDoc,
  doc,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
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
    this.storage = getStorage();
  }

  async getCollections(nameCollection) {
    try {
      const citiesCol = collection(this.db, nameCollection);
      const citySnapshot = await getDocs(citiesCol);
      const cityList = citySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      return cityList;
    } catch (error) {
      console.log(error);
    }
  }

  async getOneCollection(nameCollection, id) {
    try {
      const citiesCol = doc(this.db, nameCollection, id);
      const citySnapshot = await getDoc(citiesCol);
      // const cityList = citySnapshot.docs.map((doc) => {
      //   return {
      //     id: doc.id,
      //     ...doc.data(),
      //   };
      // });
      if (citySnapshot.exists()) {
        return citySnapshot.data();
      }
    } catch (error) {
      console.log(error);
    }
  }

  async setDocument(documentName, data) {
    try {
      await addDoc(collection(this.db, documentName), data);
    } catch (error) {
      console.log(error);
    }
  }

  async uploadImageFirebase(pathName, file) {
    const storege = this.storage;
    return new Promise(function (resolve, reject) {
      const storegeRef = ref(storege, pathName);
      const uploadTask = uploadBytesResumable(storegeRef, file);
      uploadTask.on(
        "state_changed",
        null,
        function error(err) {
          console.log("error", err);
          reject();
        },
        function complete() {
          // uploadTask.snapshot.ref.getDownloadURL()
          getDownloadURL(uploadTask.snapshot.ref).then(function (downloadURL) {
            resolve(downloadURL);
          });
        }
      );
    });
  }
}

const firebase = new Firebase();
export default firebase;
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export { app, db };
