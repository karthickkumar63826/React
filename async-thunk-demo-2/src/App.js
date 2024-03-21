import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { fetchPosts } from "./Thunkexample1/action";

function App() {
  const dispatch = useDispatch();

  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <div className="App">
      <h1>Posts</h1>
      {/* {JSON.stringify(posts)} */}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {posts
          ? posts.map((post) => {
              return( <li key={post.id}>{post.title}</li>)
            })
          : ""}
      </ul>
    </div>
  );
}

export default App;
