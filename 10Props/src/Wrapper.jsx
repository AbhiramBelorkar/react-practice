function Wrapper({children, color, name="New User"}){
    return (
        <>
            <h2>Wrapper Component</h2>
            <div style={{color:color, border:"2px solid green", width:"300px"}}>
                <h3>{children}{name}</h3>
            </div>

            <hr></hr>
        </>
    )
}

export default Wrapper;