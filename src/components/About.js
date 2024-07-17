import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {

        constructor(props) {
            super(props);
        }
        componentDidMount(){
            }
    render() {
        return (
            <div>
                <h1> About Us </h1>
                <h3> Hi this is About us Page.</h3>
                {/* <User name = {"Fenil C Rathod (User)"} location = {"Babra"}/> */}
                <UserClass name = {"Fenil C Rathod (User-Class)"} location = {"Bhiladi"}/>
            </div>
        );
    }; 
};
export default About;