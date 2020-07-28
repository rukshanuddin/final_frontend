export const fetchLink = (id) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/links/${id}`)
      .then((resp) => resp.json())
      .then((link) => {
        dispatch({ type: "FETCH_LINK", payload: link });
      });
  };
};

export const fetchTopicLinks = (id) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/topics/${id}`)
      .then((resp) => resp.json())
      .then((links) => {
        dispatch({ type: "FETCH_TOPIC_LINKS", payload: links });
      });
  };
};

export const fetchLinks = () => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/links/`)
      .then((resp) => resp.json())
      .then((links) => {
        dispatch({ type: "FETCH_LINKS", payload: links });
      });
  };
};
