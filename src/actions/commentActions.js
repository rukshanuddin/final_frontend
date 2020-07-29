export const fetchComments = (link_id) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/links/${link_id}/comments`)
      .then((resp) => resp.json())
      .then((comments) => {
        dispatch({ type: "FETCH_COMMENTS", payload: comments });
      });
  };
};

export const addComment = (link_id, comment) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/links/${link_id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ comment: comment }),
    })
      .then((resp) => resp.json())
      .then((comments) => {
        dispatch({ type: "ADD_COMMENT", payload: comments });
      });
  };
};

export const removeComment = (link_id, commentId) => {
  return (dispatch) => {
    return fetch(
      `http://localhost:3000/api/v1/links/${link_id}/comments/${commentId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((resp) => resp.json())
      .then((comments) => {
        dispatch({ type: "REMOVE_COMMENT", payload: comments });
      })
      .catch((err) => {
        console.log(
          "There has been a problem with your fetch DELETE operation: ",
          err.message
        );
      });
  };
};
