import axios from "axios";
import {
  successResponseHandler,
  failureResponseHandler
} from "./responseHandler";

export const sendRequest = ({ url, method, data, responseType, mapper }) =>
  axios({
    method,
    url,
    data,
    responseType
  })
    .then(response =>
      successResponseHandler({ response, mapper: `${mapper}-${method}` })
    )
    .catch(({ response }) => failureResponseHandler({ response, mapper }));
