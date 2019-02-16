import { todoMapper, errorMapper } from "./mappers";

export const responseMapper = ({ mapper, response }) => {
  switch (mapper) {
    case "TODO_MAPPER-GET":
      return todoMapper(response);
    default:
      return response;
  }
};

export const errorResponseMapper = ({ response, mapper }) => errorMapper(response);
