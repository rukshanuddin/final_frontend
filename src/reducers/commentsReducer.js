

export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_COMMENTS":
      return [...action.payload];
    case "ADD_COMMENT":
      return [...action.payload];
    case "REMOVE_COMMENT":
      return [...action.payload];
    default:
      return state;
  }
};