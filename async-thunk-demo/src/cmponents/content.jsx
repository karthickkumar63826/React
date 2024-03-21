import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContent } from "../reducers/contentSlice";

export default function Content() {
  let data = useSelector((state) => state.contentStore);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent());
  });

  return (
    <>
      <h1>Content</h1>
      {JSON.stringify(data.content)}
    </>
  );
}
