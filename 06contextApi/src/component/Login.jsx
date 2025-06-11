import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const {setUser} = useContext(UserContext)

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleSubmit = (event) => {
        event.preventDefault() // prevents page from reloading
        setUser({username, password})
    }

  return (
    <div>
        <h2>Login</h2>
        <input 
        type='text' 
        placeholder='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}/>
        {"  "}
        <input 
        type='password' 
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={(e) => handleSubmit(e)}>Login</button>
    </div>
  )
}

export default Login