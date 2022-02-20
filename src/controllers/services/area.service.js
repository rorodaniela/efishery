import axios from "axios";

const baseUrl = "https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/";

export const areaServices = {
  getAreaList,
};

async function getAreaList() {
  try {
    const requestUrl = `option_area`;

    const response = await axios
      .get(`${baseUrl}${requestUrl}`)
      .then((res) => {

        if (res.status === 200) {
          return {
            data: res?.data,
            status: res?.status
          }
        } else {
          return {
            message: 'Something went wrong, please check your server',
            status: res?.status
          }
        }
      })
      
    return response;

  } catch (error) {
    return {
      message: 'Something went wrong, please check your server',
      status: error?.status || 500
    }
  }
}
