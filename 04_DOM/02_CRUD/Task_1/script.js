
// 😃----------------------Task-1
// selecting element
const container = document.getElementById("container")

// creating element
const pContainer = document.createElement('p')
const sContainer = document.createElement("span")

pContainer.textContent = "Hello World!"
sContainer.textContent = "Welcome✌🏻"
container.append(pContainer, sContainer)


