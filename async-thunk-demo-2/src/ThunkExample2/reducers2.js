let initialState = {
  isLoading: false,
  users: [],
  error: "",
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_REQUEST":
      return {
        ...state,
        isLoading: true,
      };

    case "FETCH_USERS_SUCCESS":
      return {
        isLoading: false,
        users: action.payload,
        error: "",
      };
    case "FETCH_USERS_FAILURE":
      return {
        isLoading: true,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
