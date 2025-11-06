import React from 'react'

const Child = React.memo(({onClick}) => {

    console.log('chilc rendered')
    return (
        <div>
    <button onClick={onClick}>Increment</button>
    </div>
    )
})

export default Child