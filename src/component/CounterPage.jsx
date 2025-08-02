import React, { useState } from 'react'

export default function CounterPage() {

    let [count,setCount]= useState(0)
    function increment(){
      count++
        setCount(count)
        console.log(count)
    }

    function decrement(){
        setCount(count - 1)
    }
  return (
    <div>
      <center>
      <h1>Counter</h1>
      <h4>Count is:{count}</h4>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      </center>
    </div>
  )
}
