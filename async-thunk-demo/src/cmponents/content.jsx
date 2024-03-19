import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchContent } from "../reducers/contentSlice";

export default function Content(){

    let data = useSelector((state) => state.contentStore);

    let dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchContent());
    })

    return(
        <>
        <h1>Content</h1>
        {
            data.content.map((c) => return(
                <h1>{c.title}</h1>
                <p>{c.Body}</p>
                <hr />
            ))
        }
        </>
    )
}