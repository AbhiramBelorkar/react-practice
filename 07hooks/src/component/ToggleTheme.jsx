import React, { useCallback, useState } from 'react'
import Child from './Child'

function ToggleTheme() {

    const [count, setCounter] = useState(0)
    const [dark, setDark] = useState(false)

    const increment = useCallback(() => {
        setCounter((prev) => prev +1)
    }, [])

    const themeStyles = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#000",
    padding: "20px",
    marginTop: "10px"
  };

  return (
    <div>
        <button onClick={() => setDark((prev) => !prev)}>Toggle theme </button>
        <div style={themeStyles}>
            <Child onClick={increment}></Child>
        </div>
    </div>
  )
}

export default ToggleTheme