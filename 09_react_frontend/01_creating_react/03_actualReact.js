
const element = React.createElement("h1", {}, "hello ji")

// ReactDOM.render(element, document.getElementById("root")) => no longer exists in React=>18
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(element)
