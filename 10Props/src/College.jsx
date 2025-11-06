function College (props) {

    return (
        <>
        <h2>College Component</h2>
        <h3>{props.college[0]}</h3>
        <h3>{props.college[1]}</h3>
        <h3>{props.college[2]}</h3>
        <hr></hr>
        </>
    )
}

export default College;