import {
    sizeConstants,
  } from "../constants";
  import { sizeServices } from "../services";
  
  export const sizeActions = {
    getSizeList,
  };
  
  function getSizeList() {
    return async (dispatch) => {
      dispatch(request())
      const res = await sizeServices.getSizeList();
  
      if (res?.status === 200) {
        dispatch(success(res?.data))
      } else {
        dispatch(failure(res?.message))
      }
  
    }
  
    function request() {
      return { type: sizeConstants.GET_SIZELIST_REQUEST,};
    }
    function success(payload) {
      return { type: sizeConstants.GET_SIZELIST_SUCCESS, payload };
    }
    function failure(error) {
      return { type: sizeConstants.GET_SIZELIST_FAILURE, error };
    }
  }