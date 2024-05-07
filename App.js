


// const heading = React.createElement("h1", {id: "myheading"}, " hello my dear React Library.");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


/* <div id = "parent">
    <div id= "child"> 
        <h1> This is H1 tag inside child element.</h1>
    </div>
</div> */
const parent= React.createElement("div", {id : "parent"}, 
    [
        React.createElement("div", {id: "child"},
        [React.createElement("h1",{}, " This is H1 tag inside child element."),
        React.createElement("h2",{}, " This is H2 tag inside child element.")
        ]
    ),
    React.createElement("div", {id: "child2"},
        [React.createElement("h1",{}, " This is H1 tag inside child element."),
        React.createElement("h2",{}, " This is H2 tag inside child element.")
        ]
    )
    ]
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

