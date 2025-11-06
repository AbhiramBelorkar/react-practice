import { useState } from 'react'
import './App.css'

function App() {

  const [name, setName] = useState('')
  const [gender, setGender] = useState('Male')
  const [city, setCity] = useState('Nashik')
  const [skills, setSkills] = useState([])

  const handleSkills=(event) => {
    console.log(event.target.value, event.target.checked);
    if(event.target.checked){
      setSkills([...skills, event.target.value])
    } else{
      setSkills([...skills.filter((item) => item!=event.target.value)])
    }
  }

  return (
    <>
      <h1>Use case of use state</h1>

      <h3>Handle input with useState</h3>
      <input type='text' value={name} onChange={(event) => setName(event.target.value)} placeholder='Enter name' />
      <h2>{name}</h2>
      <button onClick={() => setName('')}>Clear Name</button>
      <br></br>
      <hr></hr>

      <h3>Handle radiobutton withe useState</h3>
      <input type='radio' name='gender' id='male' value={'Male'} checked={gender == 'Male'}
        onChange={(event) => setGender(event.target.value)} />
      <label htmlFor='male' >Male</label>
      <br></br>
      <input type='radio' name='gender' id='female' value={'Female'} checked={gender == 'Female'}
        onChange={(event) => setGender(event.target.value)} />
      <label htmlFor='female' >Female</label>
      <h2>Selected gender: {gender}</h2>
      <hr />

      <h3>Handle dropdown with useState</h3>
      <select defaultValue={'Nashik'} onChange={(event) => setCity(event.target.value)}>
        <option value={'Pune'}>Pune</option>
        <option value={'Mumbai'}>Mumbai</option>
        <option value={'Nashik'}>Nashik</option>
      </select>
      <h2>Selected City: {city}</h2>
      <hr />

      <h3>Handle checkbox with useState</h3>
      <input type='checkbox' value='java' id='java' onChange={handleSkills}/>
      <label htmlFor='java'>Java</label>
      <input type='checkbox' value='sql' id='sql' onChange={handleSkills} />
      <label htmlFor='sql'>SQL</label>
      <input type='checkbox' value='react' id='react' onChange={handleSkills}/>
      <label htmlFor='react'>React</label>
      <input type='checkbox' value='js' id='js' onChange={handleSkills}/>
      <label htmlFor='js'>JS</label>
      <h2>Selected Skills: {skills}</h2>
    
    </>
  )
}

export default App
