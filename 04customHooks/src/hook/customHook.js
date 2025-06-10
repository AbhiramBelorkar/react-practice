import {useState} from 'react'


function useCounter(initialValue = 0){
    
    const [count, setCounter] = useState(0);

    const increment = () => {
        setCounter((prev) => prev+1)
    }

    const decrement = () => {
        setCounter((prev) => prev-1)
    }
    
    const reset = () => {
        setCounter(0)
    }

    return { count, increment, decrement, reset}
}

export default useCounter