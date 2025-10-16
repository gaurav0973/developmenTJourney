


const ul = document.getElementById("shopping-list")


const li1 = document.createElement("li")
const li2 = document.createElement("li")

li1.textContent = "Eggs"
li2.textContent = "Butter"

ul.prepend(li1, li2)