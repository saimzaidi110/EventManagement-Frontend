import React, { useRef } from 'react'

export default function Use_ref() {
const emailRef = useRef()
const passwordRef = useRef()

const handlesubmit =()=>{
    let email = emailRef.current.value
    let password = passwordRef.current.value
    console.log("email =>",email)
    console.log("password =>",password)
    localStorage.setItem('user',JSON.stringify({email,password}))

}
  return (
    <div>
      <input type="email" placeholder='email' ref={emailRef} />
      <input type="password" placeholder='password' ref={passwordRef} />
      <button onClick={handlesubmit}>Submit</button>
    </div>
  )
}
