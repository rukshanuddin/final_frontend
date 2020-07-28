const setUser = (payload) => ({ type: "SET_USER", payload });

export const logUserOut = () => ({ type: "LOG_OUT" });

export const fetchUser = (userInfo) => (dispatch) => {
  fetch(`http://localhost:3000/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ auth: userInfo }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        return console.log(data.error);
      } else {
        localStorage.setItem("token", data.jwt);
        dispatch(setUser(data.user));
      }
    });
};

export const signUserUp = (userInfo) => (dispatch) => {
  fetch(`http://localhost:3000/api/v1/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ user: userInfo }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        return console.log(data.error);
      } else {
        localStorage.setItem("token", data.jwt);
        dispatch(setUser(data.user));
      }
    });
};
