import React, { useState,useEffect } from 'react'

function CounterUseState() {
    const [count,setCount] = useState(0)

    useEffect(()=>{
      return  console.log("useEffect");
    },[])

    //useEffect is combimation of componentDidMount,componentDidUpdate,componentWillUnmount
  return (
    <div>
        <h2>Counter App</h2>
        <h2>Count: {count}</h2>
        <button className='btn btn-primary m-3' 
            onClick = {()=>{
                setCount(count+1);
            }}
        >INCREMENT</button>
        <button className='btn btn-primary'
            onClick = {()=>{
                setCount(count-1)
            }}
        >DECREMENT</button>
    </div>
  )
}

export default CounterUseState