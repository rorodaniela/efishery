import axios from "axios";

const baseUrl =
  "https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/";

export const priceServices = {
  getPriceList,
  addPrice,
};

async function getPriceList(payload) {
  let search = payload
    ? `search={"area_kota":"${payload?.city}", "size":"${payload?.size}"}`
    : "";
  try {
    const requestUrl = `list?${search}`;

    const response = await axios.get(`${baseUrl}${requestUrl}`).then((res) => {
      if (res.status === 200) {
        return {
          data: res?.data,
          status: res?.status,
        };
      } else {
        return {
          message: "Something went wrong, please check your server",
          status: res?.status,
        };
      }
    });

    return response;
  } catch (error) {
    return {
      message: "Something went wrong, please check your server",
      status: error?.status || 500,
    };
  }
}

async function addPrice(payload) {
  try {
    const requestUrl = `list`;
    const bodyRequest = payload;

    const response = await axios
      .post(`${baseUrl}${requestUrl}`, bodyRequest)
      .then((res) => {
        if (res.status === 201) {
          return {
            data: res?.data,
            status: res?.status,
          };
        } else {
          return {
            message: "Something went wrong, please check your server",
            status: res?.status,
          };
        }
      });

    return response;
  } catch (error) {
    return {
      message: "Something went wrong, please check your server",
      status: error?.status || 500,
    };
  }
}
