import React, { useEffect, useContext } from "react";
import { FirebaseContext } from "../firebase";
import InfoContext from "../context/InfoContext";

function useDishes(id, name) {
  const { firebase } = useContext(FirebaseContext);
  const { restaurant, categories, setCategory } = useContext(InfoContext);
  useEffect(async () => {
    try {
      const response = await firebase.getCollections(
        `menu/${restaurant.id}/${id}`
      );
      // create object
      let data = {
        id,
        name,
        categories: response,
      };
      setCategory(data);
      // setData(categories.categories);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return {
    categoriesList: categories,
  };
}

export default useDishes;
