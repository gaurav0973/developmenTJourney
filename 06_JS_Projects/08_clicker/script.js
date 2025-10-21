


const body = document.querySelector("body")
body.addEventListener("click", (e)=>{
    console.log("X-cordinate : ", e.clientX)
    console.log("Y-cordinate : ", e.clientY)

    const circleElement = document.createElement("div")
    circleElement.classList.add("circle")
    circleElement.textContent = "Hi"
    const color = ["red", "green", "orange", "pink", "purple", "blue"]
    circleElement.style.backgroundColor = color[Math.floor(Math.random()*6)]

    circleElement.style.top = `${e.clientY}px`
    circleElement.style.left = `${e.clientX}px`

    body.append(circleElement)

    setTimeout(()=>{
        circleElement.remove()
    }, 1000*5)
})