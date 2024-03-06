import { useMemo, useState } from "react";


function factorial(n){
    console.log("Calculating factorial...")
    if(n === 1) return 1;
    let fact = 1;
    for(let i=2; i<= n; i++){
        fact = fact *i;
    }

    return fact;
}

export default function MemoDemo2(){

    let[number, setNumber] = useState();
    let factorialValue = useMemo(() => factorial(number), [number]);

    return (
        <>
       <input type="text"  value={number} onChange={(e) => setNumber(Number(e.target.value))} /><br/>
       factorial value = {factorialValue};
        </>
    )

} 