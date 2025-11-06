import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const userRef = useRef();
  const passwordRef = useRef();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = document.querySelector("#username").value
    const password = document.querySelector("#password").value
    console.log(username, password)
  }

  const handleFormRef = (e) => {
    e.preventDefault();
    const username = userRef.current.value
    const password = passwordRef.current.value
    console.log(username, password)
  }

  return (
    <>
      <h3>Uncontrolled component</h3>

      <form action="" method="" onSubmit={handleSubmit}>
        <input type='text' id='username' placeholder='enter username' />
        <br></br><br></br>
        <input type='password' id='password' placeholder='enter password' />
        <br></br><br></br>
        <button>Submit</button>
      </form>

      <hr></hr>

      <h3>Uncontrolled component with useRef</h3>

      <form action="" method="" onSubmit={handleFormRef}>
        <input type='text' ref={userRef} placeholder='enter username' />
        <br></br><br></br>
        <input type='password' ref={passwordRef} placeholder='enter password' />
        <br></br><br></br>
        <button>Submit</button>
      </form>
    </>
  )
}

export default App
