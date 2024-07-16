import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {

        constructor(props) {
            super(props);
        }
        componentDidMount(){
            }
    render() {
        return (
            <div>
                <h1> Contact Us </h1>
                <h3> Hi this is contact us Page.</h3>
                {/* <User name = {"Fenil C Rathod (User)"} location = {"Babra"}/> */}
                <UserClass name = {"Fenil C Rathod (User-Class)"} location = {"Bhiladi"}/>
            </div>
        );
    }; 
};
export default About;