




// function outer(){

//     function inner(){
//         console.log("Inner function")
//     }

//     return inner
// }

// const res = outer()
// res()




// function outer(){
//     return function inner(){
//         console.log("Inner function")
//     }
// }

// const res = outer()
// res()



// function greet(){
//     console.log("Namaste ji")
// }

// function showMessage(callback, name){
//     console.log(`hii ${name}`)
//     greet()
// }

// showMessage(greet, "Gaurav")




function outer(x){
    return function inner(y){
        return x*y
    }
}

// const res = outer(10)
// console.log(res(20))


const res = outer(10)(20)
console.log(res)





