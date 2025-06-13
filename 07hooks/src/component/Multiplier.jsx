import React from 'react'
import { useState } from 'react'

function Multiplier() {

    const[value, setValue] = useState(0)

    const handleClick = () =>{
      if( value == 0){
        setValue(value + 1)
        console.log(value);

      }
        setValue((prev) => prev * 5)
    }

  return (
    <div>
        <h3>{value}</h3>
        <button onClick={handleClick}>Multiply by 5</button>
    </div>
  )
}

export default Multiplier