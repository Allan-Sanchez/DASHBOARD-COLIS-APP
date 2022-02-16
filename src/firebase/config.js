const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_DATABASEURL,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
  VITE_MEASUREMENTID,
} = import.meta.env;

var firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  databaseURL: VITE_DATABASEURL,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
  measurementId: VITE_MEASUREMENTID,
};
// const firebaseConfig = {
//   apiKey: "AIzaSyDq-C7jiylt1x3q3ppuzJhcOldEFh6gvEM",
//   authDomain: "fir-alquiler.firebaseapp.com",
//   databaseURL: "https://fir-alquiler.firebaseio.com",
//   projectId: "fir-alquiler",
//   storageBucket: "fir-alquiler.appspot.com",
//   messagingSenderId: "950750978319",
//   appId: "1:950750978319:web:b782e93f8bfd57c4cd1e7a",
//   measurementId: "G-GR2EJQBGVV",
// };

export default firebaseConfig;
