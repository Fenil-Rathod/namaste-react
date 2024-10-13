const User = (props) =>
{
    return(
        <div className="user-card">
            <h2> Name : {props.name}</h2>
            <h3> Location : {props.location} </h3>
            <h3> Contact : @fenilcrathod007.gmail.com </h3>
        </div>
    )
}

export default User;