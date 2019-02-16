import { get } from "lodash";

export const errorMapper = response => {
  const statusCode = get(response, "status");
  const data = get(response, "data");
  return { statusCode, data };
};
