import {
  DELETE_ACTION,
  GET_ERROR,
  GET_LOADING,
  GET_SUCCESS,
} from "./users.types";
import axios from "axios";

export const getUser = () => (dispatch) => {
  dispatch({ type: GET_LOADING });
  axios
    .get(`http://localhost:8080/user`)
    .then((res) => dispatch({ type: GET_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: GET_ERROR }));
};

