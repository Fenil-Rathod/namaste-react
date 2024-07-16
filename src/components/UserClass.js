import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                name : "Fenil Rathod",
                location : "Default"                
            }
        };
    }
    async componentDidMount(){
            const data =await fetch("https://api.github.com/users/Fenil-Rathod");
            const json = await data.json();
            this.setState({
                userInfo: json,
            })
            console.log(json);
        }
    render ()
    {
            const {name, location, avatar_url} = this.state.userInfo;
            return(
            <div className="userClass-card">
                <img src= {avatar_url}></img>
                <h2> Name : {name} </h2>
                <h3> Location : {location} </h3>
                <h3> Contact : @fenil.gmail.com </h3>
            </div>
            );
        }
};

export default UserClass;