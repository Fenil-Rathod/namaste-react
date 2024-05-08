import React from "react";
import ReactDOM from "react-dom/client";

const parent= React.createElement("div", {id : "parent"}, 
    [
        React.createElement("div", {id: "child"},
        [React.createElement("h1",{}, " This is H1 tag inside child element."),
        React.createElement("h2",{}, " Hello my name is fenil Rathod.")
        ]
    ),
    React.createElement("div", {id: "child2"},
        [React.createElement("h1",{}, " This is H1 tag inside child element."),
        React.createElement("h2",{}, " This is H2 tag inside 2'nd child element.")
        ]
    )
    ]
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

