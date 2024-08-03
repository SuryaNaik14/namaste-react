// This is used to create 1 heading tag...

// const heading = React.createElement("h1", {id:"heading"},"Hello world in React...!");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// -----------------------------------------------------------------------------

// i need to create the html tag that div inside the div means nested div in react....

// const parent = React.createElement(
//     "div" , 
//     {id : "parent"},
//     React.createElement(
//         "div",
//         {id : " child"},
//         React.createElement("h1",{}," iam heading tag 1")
//         )
//     );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// ----------------------------------------------------------------------------

// creating the html tag with siblings of the h1 tag by using react

// const parent = React.createElement(
//     "div", 
//     {id:"parent"},
//     React.createElement(
//         "div", 
//         {id:"child"},[
//         React.createElement("h1", {},"Hello i am h1 tag"),
//         React.createElement("h2", {},"Hello i am h2 tag")
//         ]
//         ));


// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// -----------------------------------------------------------------------------------

// creating the html tag by using the react like div parent one heading div child one heading tag.

const parent = React.createElement(
    "div", 
    {id:"parent"},[
        React.createElement("div", {id:"child"},[
            React.createElement("h1", {},"Hello i am h1 tag"),
            React.createElement("h2", {},"Hello i am h2 tag")
            ]),
            React.createElement("div", {id:"child"},[
                React.createElement("h1", {},"Hello i am h1 tag"),
                React.createElement("h2", {},"Hello i am h2 tag")
            ])     
    ]
    );


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

