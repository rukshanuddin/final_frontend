export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_LINK":
      return [...action.payload];
    case "FETCH_LINKS":
      return [...action.payload];
    case "FETCH_TOPIC_LINKS":
      return [...action.payload];
    default:
      return state;
  }
};