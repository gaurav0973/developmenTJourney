

// const currentTime = Date.now()
// const olympicTime = new Date(2028, 66, 14).getTime()
// let timer = olympicTime - currentTime


// const day = Math.floor((timer)/(1000*60*60*24))
// timer%=(1000*60*60*24)

// const hour = Math.floor((timer)/(1000*60*60))
// timer%=(1000*60*60)

// const min = Math.floor((timer)/(1000*60))
// timer%=(1000*60)

// const second = Math.floor((timer)/(1000))
// timer%=(1000)

// const result = document.getElementById("result")
// result.textContent = `Days: ${day}  Hours: ${hour}  Seconds: ${second}`

const result = document.getElementById("result")
setInterval(()=>{
    const currentTime = Date.now()
    const olympicTime = new Date(2028, 66, 14).getTime()
    let timer = olympicTime - currentTime


    const day = Math.floor((timer)/(1000*60*60*24))
    timer%=(1000*60*60*24)

    const hour = Math.floor((timer)/(1000*60*60))
    timer%=(1000*60*60)

    const min = Math.floor((timer)/(1000*60))
    timer%=(1000*60)

    const second = Math.floor((timer)/(1000))
    timer%=(1000)
    result.textContent = `Days: ${day}  Hours: ${hour}  Seconds: ${second}`
}, 1000)