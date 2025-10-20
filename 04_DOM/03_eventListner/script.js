// METHOD-1 : onClick in html tags
// function handleClick(){
//     const element = document.getElementById("heading")
//     element.textContent = "Apna badhiya, aap batao"
// }

// METHOD-2 : This will override if written another time
// const element = document.getElementById("heading")
// element.onclick = function(){
//     element.textContent = "Apna badhiya, aap batao"
// }
// element.onclick = function(){
//     element.textContent = "Chupp"
// }

// METHOD-3 : Best Method
// const element = document.getElementById("heading")

// element.addEventListener("click", ()=>{
//     element.textContent = "Apna badhiya, aap batao"
// })

// element.addEventListener("click", ()=>{
//     element.style.background = "brown"
// })



const grandparent = document.getElementById("grandparent")
const parent = document.getElementById("parent")
const child = document.getElementById("child")

grandparent.addEventListener("click", () => {
  console.log("Grandparent hu mai");
}, true)

parent.addEventListener("click", () => {
  console.log("Parent hu mai");
}, true)

child.addEventListener("click", () => {
  console.log("Child (Target)");
}, true)
