import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react'

const Usememo = () => {
    const [count,setCount] = useState(0);
    const [search,setSearch] = useState("");
// console.log(count)
    function showFnc(){
      let sum = 0;
      for(let i = 0;i<100000000;i++){
        sum+=i;
      }
      return sum;
    }

    const result = useMemo(()=>{
      console.log("useMemo")
      return showFnc();
    },[])

  return (
    <div>
        <input type="text" onChange={(e)=>{setSearch(e.target.value)}} />
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}

export default Usememo