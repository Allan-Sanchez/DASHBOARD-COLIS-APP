import React, { useState, useEffect, useContext } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { FirebaseContext } from "../firebase";

const UseRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const getRestaurants = async () => {
      const q = query(collection(firebase.db, "restaurants"), orderBy("name"));
      const querySnapshot = await getDocs(q);
      handleSnapshot(querySnapshot);
    };
    getRestaurants();
  }, []);

  function handleSnapshot(snapShot) {
    const response = snapShot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setRestaurants(response);
  }

  return {
    restaurants,
  };
};

export default UseRestaurants;
