import {
    sizeConstants,
  } from "../constants";
  
  const initialState = {
    loading: false,
    error: "",
    sizelist: [],
  };
  
  export default function size(state = initialState, action) {
    switch (action.type) {
      case sizeConstants.GET_SIZELIST_REQUEST:
        return { ...state, loading: true };
      case sizeConstants.GET_SIZELIST_SUCCESS:
        return { ...state, loading: false, sizelist: action.payload };
      case sizeConstants.GET_SIZELIST_FAILURE:
        return { ...state, loading: false, error: action.error };
      default:
        return state;
    }
  }