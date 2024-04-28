export const fetchUserRequest = () => {
  return {
    type: "FETCH_USERS_REQUEST",
  };
};

export const fetchUserSuccess = (posts) => {
  return {
    type: "FETCH_USERS_SUCCESS",
    payload: posts,
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: "FETCH_USERS_FAILURE",
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => dispatch(fetchUserSuccess(users)))
      .catch((error) => dispatch(fetchUserFailure(error.message)));
  };
};
