// function User({name, age, email}) {
//     return (
//         <div>
//             <h3>Name: {name}</h3>
//             <h3>Age: {age}</h3>
//             <h3>Email: {email}</h3>
//             <hr></hr>
//         </div>
//     )
// }

// export default User;

function User(props) {

    return (
        <div>
            <h2>User component</h2>
            <h3>Name: {props.user.name}</h3>
            <h3>Age: {props.user.age}</h3>
            <h3>Email: {props.user.email}</h3>
            <h3>Place: {props.user.place}</h3>
            <h3>State: {props.user.state}</h3>
            <h3>Counrty: {props.user.country}</h3>
            <hr></hr>
        </div>
    )
}

export default User;