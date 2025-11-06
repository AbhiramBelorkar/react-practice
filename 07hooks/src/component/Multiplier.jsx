import React from 'react'
import { useState } from 'react'

function Multiplier() {

    const[value, setValue] = useState(1)

    const handleClick = () =>{
      if( value == 0){
        setValue(value + 1)
        console.log(value);

      }
        setValue((prev) => prev * 5)
    }

  return (
    <div>
        <h3 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
          {value}</h3>
        <button onClick={handleClick} 
        className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>
          Multiply by 5</button>
    </div>
  )
}

export default Multiplier