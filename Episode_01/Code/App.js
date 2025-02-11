const nested = React.createElement(
    "div",
    { id: "child" },
    [
        React.createElement("h1", { id: "child1" }, "I am child 1"),
        React.createElement("h1", { id: "child2" },
            [
                React.createElement("h1", { id: "subChild1" }, "I am child 2-1"),
                React.createElement("h1", { id: "subChild2" }, "I am child 2-2")
            ]),
        React.createElement("h1", { id: "child3" }, "I am child 3"),
        React.createElement("h1", { id: "child4" }, "I am child 4")
    ],
);
console.log(nested);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nested);