export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_LINK":
      return action.payload;
    default:
      return state;
  }
};