console.log("start")

// const promise = fetch("https://api.github.com/users")
//                         .then((responce)=> {
//                             return responce.json()
//                         })
// console.log(promise)

// const data = fetch("https://api.github.com/users")
//                         .then((responce)=> {
//                             return responce.json()
//                         })
//                         .then((data)=>{
//                             return data
//                         })
// console.log(data) // => gives Promise => directly execute 


// fetch("https://api.github.com/users")
//     .then((responce)=> {
//         return responce.json()
//     })
//     .then((data)=>{
//         console.log(data)
//     })


// fetch("https://api.github.com/users")
//     .then((responce)=> {
//         return responce.json()
//     })
//     .then((data)=>{
//         console.log(data)
//     })
//     .catch((error)=>{
//         console.log("Error : ", error.message)
//     })
//     .finally(()=>{
//         console.log("I will run every time")
//     })

// No intrnet => Error :  TypeError: fetch failed

fetch("https://api.github.com/users")
    .then((responce)=> {
        console.log(responce)
        if(!responce.ok){
            throw new Error("Promise is filfilled here also ")
        }
        return responce.json()
    })
    .then((data)=>{
        console.log(data)
    })
    .catch((error)=>{
        console.log("Error : ", error)
    })
    .finally(()=>{
        console.log("I will run every time")
    })

console.log("end")