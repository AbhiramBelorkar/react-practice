import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import College from './College'
import { SubjectContext } from './SubjectContext'

function App() {

  const [subject, setSubject] = useState('');

  return (
    <>
    <div style={{backgroundColor:'yellow', padding:'10px'}}>
      <SubjectContext.Provider value={subject}>
      <h1>Use Context</h1>
      <select onClick={(e) => setSubject(e.target.value)}>
        <option value={'Maths'}>Maths</option>
        <option value={'English'}>English</option>
        <option value={'History'}>History</option>
        <option value={'Science'}>Science</option>
      </select>
      <button onClick={() => setSubject('')}>Clear</button>
      <College />
      </SubjectContext.Provider>

    </div>
      
    </>
  )
}

export default App
