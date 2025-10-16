

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
