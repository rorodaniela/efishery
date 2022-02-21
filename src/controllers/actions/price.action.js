import { priceConstants } from "../constants";
import { priceServices } from "../services";
import Swal from "sweetalert2";

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

function addPrice(payload, setOpen) {
  return async (dispatch) => {
    dispatch(request());
    const res = await priceServices.addPrice(payload);

    if (res.status === 200 || res.status === 201) {
      dispatch(getPriceList());
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Hasil Panen Berhasil Ditambahkan",
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(success(res?.data));
      setOpen(false);
    } else {
      dispatch(failure(res?.message));
    }
  };

  function request() {
    return { type: priceConstants.ADD_PRICE_REQUEST };
  }
  function success(payload) {
    return { type: priceConstants.ADD_PRICE_SUCCESS, payload };
  }
  function failure(error) {
    return { type: priceConstants.ADD_PRICE_FAILURE, error };
  }
}
