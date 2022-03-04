import React, { useReducer } from "react";
import {
  ADD_CATEGORY,
  CLEAN_CATEGORIES,
  CLEAN_CATEGORy,
  GET_ONE_CATEGORY,
  SET_CATEGORY,
  SET_RESTAURANTS,
} from "../types/types";
import InfoContext from "./InfoContext";
import InfoReducer from "./InfoReducer";

const InfoState = ({ children }) => {
  const initialState = {
    restaurant: [],
    categories: [],
    category: [],
  };
  const [state, dispath] = useReducer(InfoReducer, initialState);

  const setRestaurant = (restaurant) => {
    cleanCategories();
    dispath({
      type: SET_RESTAURANTS,
      payload: restaurant,
    });
  };
  const setCategory = (category) => {
    dispath({
      type: SET_CATEGORY,
      payload: category,
    });
  };
  const addCategory = (id, data) => {
    dispath({
      type: ADD_CATEGORY,
      payload: { id, data },
    });
  };
  const getOneCategory = (id) => {
    dispath({
      type: GET_ONE_CATEGORY,
      payload: id,
    });
  };
  const cleanCategories = () => {
    dispath({
      type: CLEAN_CATEGORIES,
    });
  };
  const cleanCategory = () => {
    dispath({
      type: CLEAN_CATEGORy,
    });
  };
  return (
    <InfoContext.Provider
      value={{
        restaurant: state.restaurant,
        categories: state.categories,
        category: state.category,
        setRestaurant,
        setCategory,
        addCategory,
        getOneCategory,
        cleanCategory,
      }}
    >
      {children}
    </InfoContext.Provider>
  );
};

export default InfoState;
