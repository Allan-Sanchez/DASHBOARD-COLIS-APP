import React, { useReducer } from "react";
import { SET_CATEGORY, SET_RESTAURANTS } from "../types/types";
import InfoContext from "./InfoContext";
import InfoReducer from "./InfoReducer";

const InfoState = ({ children }) => {
  const initialState = {
    restaurant: [],
    categories: [],
  };
  const [state, dispath] = useReducer(InfoReducer, initialState);

  const setRestaurant = (restaurant) => {
    dispath({
      type: SET_RESTAURANTS,
      payload: restaurant,
    });
  };
  const setCategory = (index, category) => {
    dispath({
      type: SET_CATEGORY,
      payload: { index, category },
    });
  };
  return (
    <InfoContext.Provider
      value={{
        restaurant: state.restaurant,
        categories: state.categories,
        setRestaurant,
        setCategory,
      }}
    >
      {children}
    </InfoContext.Provider>
  );
};

export default InfoState;
