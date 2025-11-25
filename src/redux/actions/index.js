import Axios from "axios";

export const apiDev = Axios.create({
  baseURL: import.meta.env.VITE_DHIS2_BASE_URL,
  withCredentials: true,
});

export const axiosGeneral = (
  endpoint,
  method,
  data,
  changeBaseURL,
  withCred,
  headers
) => {
  const url = changeBaseURL
    ? endpoint
    : import.meta.env.VITE_DHIS2_BASE_URL + endpoint;
  var withCredentials = withCred !== false;

  const opt = {
    method,
    url,
    withCredentials: withCredentials,
  };
  if (method === "POST") {
    Object.assign(opt, {
      data,
    });
  }
  if (headers) {
    Object.assign(opt, {
      headers,
    });
  }
  return Axios(opt);
};
