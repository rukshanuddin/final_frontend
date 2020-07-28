
export const fetchTopics = () => {
  return (dispatch) => {
    return fetch("http://localhost:3000/api/v1/topics")
      .then((resp) => resp.json())
      .then((topics) => {
        dispatch({ type: "FETCH_TOPICS", payload: topics });
      });
  };
};

