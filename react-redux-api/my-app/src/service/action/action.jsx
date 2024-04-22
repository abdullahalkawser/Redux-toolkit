// actions.js

import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "../constant/constant";


  
  export const fetchDataRequest = () => ({
    type: FETCH_DATA_REQUEST
  });
  
  export const fetchDataSuccess = (data) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data
  });
  
  export const fetchDataFailure = (error) => ({
    type: FETCH_DATA_FAILURE,
    payload: error
  });
  
  export const fetchData = () => {
    return async (dispatch) => {
      dispatch(fetchDataRequest());
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        dispatch(fetchDataSuccess(data));
      } catch (error) {
        dispatch(fetchDataFailure(error.message));
      }
    };
  };
  