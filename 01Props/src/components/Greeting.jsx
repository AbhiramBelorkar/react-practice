import React from "react"

function Greeting(props) {
    return (
        // Props are read-only — they cannot be changed by the child component.
        <div>
            <h1>Hello {props.username}</h1>

        </div>
    );
}

export default Greeting;
