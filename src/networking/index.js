import axios from "axios";
import {
  successResponseHandler,
  failureResponseHandler
} from "./responseHandler";

export const sendRequest = ({ url, method, data, responseType, mapper, headers }) =>
  axios({
    method,
    url: `${process.env.API_HOST}${url}`,
    data,
    responseType,
    headers
  })
    .then(response =>
      successResponseHandler({ response, mapper: `${mapper}-${method}` })
    )
    .catch(({ response }) => failureResponseHandler({ response, mapper }));
