import {
    priceConstants,
  } from "../constants";
  
  const initialState = {
    loading: false,
    error: "",
    pricelist: [],
  };
  
  export default function price(state = initialState, action) {
    switch (action.type) {
      // Get price list
      case priceConstants.GET_PRICELIST_REQUEST:
        return { ...state, loading: true };
      case priceConstants.GET_PRICELIST_SUCCESS:
        return { ...state, loading: false, pricelist: action.payload };
      case priceConstants.GET_PRICELIST_FAILURE:
        return { ...state, loading: false, error: action.error };
      
      // Add new price
      case priceConstants.ADD_PRICE_REQUEST:
        return { ...state, loading: true };
      case priceConstants.ADD_PRICE_SUCCESS:
        return { ...state, loading: false };
      case priceConstants.ADD_PRICE_FAILURE:
        return { ...state, loading: false, error: action.error };
      default:
        return state;
    }
  }