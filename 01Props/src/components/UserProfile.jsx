function UserProfile(props){

    return (
        <div>
            <h2>My name is {props.userProfile.name}</h2>
            <p>Age : {props.userProfile.age}</p>
            <p>City : {props.userProfile.city}</p>
        </div>
    );
}

export default UserProfile