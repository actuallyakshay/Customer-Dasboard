import {
  DELETE_ACTION,
  GET_ERROR,
  GET_LOADING,
  GET_SUCCESS,
} from "./users.types";

const iState = {
  data: [],
  isLoading: false,
  isError: false,
};

export const userReducer = (state = iState, { type, payload }) => {
  switch (type) {
    case GET_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case GET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    case GET_ERROR:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};
