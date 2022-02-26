import { GET_RESTAURANTS, SET_CATEGORY, SET_RESTAURANTS } from "../types/types";
const InfoReducer = (state, action) => {
  switch (action.type) {
    case GET_RESTAURANTS:
      return {
        ...state,
        restaurant: state.restaurants,
      };
    case SET_RESTAURANTS:
      return {
        ...state,
        restaurant: action.payload,
      };
    case SET_CATEGORY:
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }
};

export default InfoReducer;
