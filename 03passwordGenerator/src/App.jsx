import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  
  const [length, setLength] = useState(8)

  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    console.log(numberAllowed)
    console.log(charAllowed)
    
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "~!@#$%^&*()_+"

    for(let i=0; i<length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

    console.log(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed])

  const copyPassword = useCallback(() => {
    console.log(passwordRef.current)
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <div className="container">
  <div className="top">
    <h2>Password Generator</h2>
    <input type="text" id="password" value={password} ref={passwordRef} readOnly/>
    <button id="copy" onClick={copyPassword}>Copy</button>
  </div>
  <div className="bottom">
      <input type="range" 
              id="length" 
              min="4" 
              max="50" 
              value={length} 
              onChange={(e) => setLength(e.target.value)} />
    <label>
      Length : {length}
    </label>
    <label>
      <input type="checkbox" id="numbers"  onChange={() => setNumberAllowed((prev) => !prev)}/> Numbers
    </label>
    <label>
      <input type="checkbox" id="characters" onChange={() => setCharAllowed((prev) => !prev)}/> Characters
    </label>
  </div>
</div>   
  )
}

export default App
