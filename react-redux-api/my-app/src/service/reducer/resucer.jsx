// reducer.js

import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "../constant/constant";


  
  const initialState = {
    data: [],
    isLoading: false,
    error: null
  };
  
  const reducer = (state = initialState, action) => {
    
    switch (action.type) {
      case FETCH_DATA_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: null
        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          data: action.payload,
          isLoading: false,
          error: null
        };
      case FETCH_DATA_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  