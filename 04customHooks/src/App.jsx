import { useState } from 'react'
import './App.css'
import useCounter from './hook/customHook'
import Counter from './component/Counter'
import Toggle from './component/Toggle'

function App() {



  return (
    <>
      <Counter></Counter>
      <br></br>
      <Toggle></Toggle>
    </>
  )
}

export default App
