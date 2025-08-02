//import React, { useEffect } from 'react'

// const Useeffect = () => {
//     const [count,setCount] = React.useState(0);
//     const [calculate,setCaculate] = React.useState(10);
//      useEffect(() => {
//         setCaculate((c) => c + 1);
//     }, [count]);

//   return (
//    <center>
//      <div>
//       <p>{count}</p>
//       <button onClick={() => setCount((c) => c + 1)}>+</button>
//       <p>{calculate}</p>
//     </div>
//    </center>
//   )
// }

// export default Useeffect


import { useEffect, useState } from 'react'
import CardComponents from './CardComponents';

export default function Use_effect() {

  function App() {
    const [users, setUsers] = useState([])
    useEffect(() => {


      fetch('')
        .then(res => res.json())
        .then(data => setUsers(data));

    }, [])
  
  return (
    <>
      {users.map((x) => {
        return <CardComponents key={x.id} id={x.id} title={x.title} />
      })
      }
    </>
  )
}}

