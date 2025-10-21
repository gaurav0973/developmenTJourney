

const form = document.querySelector("form")

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    // console.log(e.target) -> when click
    const boy = document.getElementById("boy")
    const girl = document.getElementById("girl")

    // names
    const boyName = boy.value.trim();
    const girlName = girl.value.trim();

    if (!boyName || !girlName) {
        alert("Please enter both names ❤️");
        return;
    }


    // console.log(boy.value)
    const x = boy.value.length
    const y = girl.value.length

    // need a number in the range of [0,100]
    const loveScore = Math.pow(x+y, 3)%101

    const h2 = document.querySelector("h2")
    h2.textContent = `💖 Love Compatibility between ${boyName} & ${girlName} is ${loveScore}% 💖`;
    form.reset()

})