import {
    areaConstants,
  } from "../constants";
  
  const initialState = {
    loading: false,
    error: "",
    arealist: [],
  };
  
  export default function area(state = initialState, action) {
    switch (action.type) {
      case areaConstants.GET_AREALIST_REQUEST:
        return { ...state, loading: true };
      case areaConstants.GET_AREALIST_SUCCESS:
        return { ...state, loading: false, arealist: action.payload };
      case areaConstants.GET_AREALIST_FAILURE:
        return { ...state, loading: false, error: action.error };
      default:
        return state;
    }
  }