import useCounter from "../hook/customHook"

function Counter() {

    const {count, increment, decrement, reset} = useCounter(0)

    return (
        <div>
            <h1>COUNT : {count}</h1>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>

    )
}

export default Counter