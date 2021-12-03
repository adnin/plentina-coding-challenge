import * as actionTypes from "../constants/productConstants";
import axios from "axios";

require("dotenv").config();

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });
    const { data } = await axios.get(
      `${process.env.REACT_APP_SERVER_URI}/plans`
    );
    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: data.data.bundle
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
