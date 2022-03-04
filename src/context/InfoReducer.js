import {
  GET_RESTAURANTS,
  ADD_CATEGORY,
  SET_CATEGORY,
  SET_RESTAURANTS,
  GET_ONE_CATEGORY,
  CLEAN_CATEGORIES,
  CLEAN_CATEGORy,
} from "../types/types";
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
        categories: [...state.categories, action.payload],
      };
    case GET_ONE_CATEGORY:
      return {
        ...state,
        category: state.categories.filter((item) => item.id === action.payload),
      };
    case ADD_CATEGORY:
      return {
        ...state,
        categories: state.categories.map((category) => {
          if (category.id === action.payload.id) {
            return (category.categories = [
              ...category.categories,
              action.payload.data,
            ]);
          }
          return category;
        }),
      };
    case CLEAN_CATEGORIES:
      return {
        ...state,
        categories: [],
      };
      case CLEAN_CATEGORy:
      return {
        ...state,
        category: [],
      };

    default:
      return state;
  }
};

export default InfoReducer;
