import { useEffect, useState } from "react"

export default function List(getMultiples){

    let [multiples, setMultiples] = useState([]);

    useEffect(() => {
        setMultiples(getMultiples);
    },[getMultiples])
    return (
        <>
        <ul>
           {
             multiples.map((m) => <li>{m}</li>)
           }
        </ul>
        </>
    )
}