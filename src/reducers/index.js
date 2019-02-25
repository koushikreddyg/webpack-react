export default (state = { image: "" }, actions) => {
  switch (actions.types) {
    case "STORE":
      return {
        image: actions.payload
      };
  }
};
