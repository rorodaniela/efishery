import { priceConstants } from "../constants";
import { priceServices } from "../services";

export const priceActions = {
  getPriceList,
  addPrice,
};

function getPriceList(payload) {
  return async (dispatch) => {
    dispatch(request());
    const res = await priceServices.getPriceList(payload);

    if (res?.status === 200) {
      dispatch(success(res?.data));
    } else {
      dispatch(failure(res?.message));
    }
  };

  function request() {
    return { type: priceConstants.GET_PRICELIST_REQUEST };
  }
  function success(payload) {
    return { type: priceConstants.GET_PRICELIST_SUCCESS, payload };
  }
  function failure(error) {
    return { type: priceConstants.GET_PRICELIST_FAILURE, error };
  }
}

function addPrice(payload) {
  return async (dispatch) => {
    dispatch(request());
    const res = await priceServices.addPrice(payload);

    if (res?.status === 200) {
      dispatch(success(res?.data));
    } else {
      dispatch(failure(res?.message));
    }
  };

  function request() {
    return { type: priceConstants.GET_PRICELIST_REQUEST };
  }
  function success(payload) {
    return { type: priceConstants.GET_PRICELIST_SUCCESS, payload };
  }
  function failure(error) {
    return { type: priceConstants.GET_PRICELIST_FAILURE, error };
  }
}
