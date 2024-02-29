import { useState } from "react"

export default function ConditionalRenderingDemo(){

    let[state, setState] = useState(false);

    if(state)
    return <><b>Welcome</b></> 
    if(!state)
    return <><b>Please login</b></>
}