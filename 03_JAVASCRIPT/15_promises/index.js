console.log("start")

const promise = fetch("https://api.github.com/users")
// console.log(promise)

const anotherPromise = promise.then((responce)=>{
    // console.log(responce)
    // console.log(responce.body)
    // console.log(responce.json())
    const anotherPromise = responce.json()
    return anotherPromise
})

anotherPromise.then((data)=>{
    console.log(data)
})

console.log("end")