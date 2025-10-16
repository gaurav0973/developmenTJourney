


const items = document.querySelector(".items")


const div = document.createElement("div")
div.className = "item"
div.textContent = "Second Item"

const firstElement = items.children[0]
firstElement.after(div)


const lastElement = items.children[items.children.length-1]
console.log(lastElement)

const div2 = document.createElement("div")
div2.className = "item"
div2.textContent = "Fourth Item"
lastElement.after(div2)