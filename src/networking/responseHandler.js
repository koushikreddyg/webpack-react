import { responseMapper, errorResponseMapper } from "./responseMapper";

export const successResponseHandler = response => {
  return Promise.resolve(responseMapper(response));
};

export const failureResponseHandler = response => {
  return Promise.reject(errorResponseMapper(response));
};
