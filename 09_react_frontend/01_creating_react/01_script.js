// create an element - 1
const h1 = document.createElement("h1")
h1.textContent = "Kya haal hai"
h1.style.backgroundColor = "red"
h1.style.color = "yellow"
h1.style.fontSize = "30px"

// create an element - 2
const h2 = document.createElement("h1")
h2.textContent = "Kya haal hai"
h2.style.backgroundColor = "red"
h2.style.color = "yellow"
h2.style.fontSize = "30px"

// create an element - 3
const h3 = document.createElement("h1")
h3.textContent = "Kya haal hai"
h3.style.backgroundColor = "red"
h3.style.color = "yellow"
h3.style.fontSize = "30px"


// select the root element
const root = document.querySelector("#root")
root.append(h1)
root.append(h2)
root.append(h3)



/*
Problem => same code repeat karna pad raha hai 
Idea => kya na ek function create kare
        jo yye kaam baar baar karega 
        aur hume baar baar ye linkna bhi nahi 
        padega 
*/