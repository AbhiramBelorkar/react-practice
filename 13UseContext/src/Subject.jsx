import { useContext } from "react"
import { SubjectContext } from "./SubjectContext"

function Subject() {

    const subject = useContext(SubjectContext)

    return (
        <div style={{backgroundColor:'grey', padding:'10px'}}>
            <h1>Subject: {subject}</h1>
            
        </div>
    )
}

export default Subject