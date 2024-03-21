export const fetchPostRequest = () => {
  return {
    type: "FETCH_POSTS_REQUEST",
  };
};

export const fetchPostSuccess = (posts) => {
  return {
    type: "FETCH_POSTS_SUCCESS",
    payload: posts,
  };
};

export const fetchPostFailure = (error) => {
  return {
    type: "FETCH_POSTS_FAILURE",
    payload: error,
  };
};

export const fetchPosts = () => {
  return (dispatch) => {
    console.log("fetch");
    dispatch(fetchPostRequest());
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => dispatch(fetchPostSuccess(posts.slice(0, 10))))
      .catch((error) => dispatch(fetchPostFailure(error.message)));
    console.log("end");
  };
};
