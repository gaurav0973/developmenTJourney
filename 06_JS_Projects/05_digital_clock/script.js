


const div = document.getElementById("time")
// let time = new Date()
// time = time.toLocaleTimeString()
// // console.log(time.toLocaleTimeString())
// div.textContent = time

setInterval(()=>{
    let time = new Date()
    time = time.toLocaleTimeString()
    div.textContent = time
}, 1000*1)