import {
    areaConstants,
  } from "../constants";
  import { areaServices } from "../services";
  
  export const areaActions = {
    getAreaList,
  };
  
  function getAreaList() {
    return async (dispatch) => {
      dispatch(request())
      const res = await areaServices.getAreaList();
  
      if (res?.status === 200) {
        dispatch(success(res?.data))
      } else {
        dispatch(failure(res?.message))
      }
  
    }
  
    function request() {
      return { type: areaConstants.GET_AREALIST_REQUEST,};
    }
    function success(payload) {
      return { type: areaConstants.GET_AREALIST_SUCCESS, payload };
    }
    function failure(error) {
      return { type: areaConstants.GET_AREALIST_FAILURE, error };
    }
  }