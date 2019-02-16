import { get } from "lodash";

export const todoMapper = response => {
  const list = get(response, "data");
  return list;
};
