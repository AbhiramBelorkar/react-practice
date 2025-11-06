import User from './User'
import './App.css'
import College from './College'
import Student from './Student'
import Wrapper from './Wrapper'
import { useState } from 'react'

function App() {

  let userObject = {
    name: "Akash",
    place: "Nashik",
    state: "Maharashtra",
    country: "India"
  }

  let collegeArray = ['IIT', 'NIT', 'COEP', 'VIT']

  const [student, setStudent] = useState();
  
  return (
    <>  
      <h1>Props Demo</h1>
      {/* <User name="Anil" />
      <User name="Ajay" age="26" email="ajay@test.com" /> */}
      <User user={userObject}/>
      <College college={collegeArray}/>
      {student && <Student studentName={student}/> }  {/* Condition: show only if student is present */}
      <button onClick={() => setStudent("Akshay")}>Click to show name</button>

      <Wrapper >
        <h3>Hi </h3>
      </Wrapper>

      <Wrapper color="orange" name="Anil">
        <h3>Hi </h3>
      </Wrapper>
    </>
  )
}

export default App
