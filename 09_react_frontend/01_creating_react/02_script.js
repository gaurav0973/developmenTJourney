// React : Object
// ReactDOM : Object


const React = {
    createElement: function(tag, style, children){
        // 1. create element
        const element = document.createElement(tag)

        //2. add styles 
        for(let key in style){
            element.style[key] = style[key]
        }
        // 3. talk about children
        if(typeof children === "object"){
            for(let val of children){
                element.append(val)
            }
        }
        else{
            element.textContent = children
        }
        return element
    }
}

const ReactDOM = {
    render: function(element, root){
        root.append(element)
    }
}


const h1 = React.createElement("h1", {backgroundColor: "red", color : "yellow", fontSize : "30px"}, "kya haal hai")
const h2 = React.createElement("h2", {}, "mai badhiya aap batao")

// lets create an unordered list
const l1 = React.createElement("li", {}, "HTML")
const l2 = React.createElement("li", {}, "CSS")
const l3 = React.createElement("li", {}, "Javascript")
const ul = React.createElement("h2", {}, [l1, l2, l3])

const div = document.querySelector("#root")
// div.append(h1)
// div.append(h2)


ReactDOM.render(h1, root)
ReactDOM.render(h2, root)
ReactDOM.render(ul, root)
