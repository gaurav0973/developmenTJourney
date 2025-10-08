// function

// 1️⃣ :- function-meth0d-1
function hello(){
    console.log("Kya haal hai")
}
// hello()



function sum(x,y){
    let sum = x + y
    return sum
}
// sum(4,6)


//rest operator
// NOTE : difference between sprade and rest operator
function summ(...x){
    return x
}
// console.log(summ())
// console.log(summ(3))
// console.log(summ(3,5))
// console.log(summ(4, 5,6))
// console.log(summ(6, 7, 8, 8))


// const arr = [1,4,5,7,9]
// const [a, b, ...c] = arr
// console.log(a)
// console.log(b)
// console.log(c)


// 2️⃣-Function-method-2
// const addNumber = function(a, b){
//     return a + b
// }
// console.log(addNumber(4,6))


// 3️⃣ function-method

// const addNumber = (a,b)=>{
//     return a+b
// }
// const addNumber = (a,b)=> a+b
// console.log(addNumber(4,6))

// const squaredNumber = num => num*num
// console.log(squaredNumber(4))

const user = () => {name : "Gaurav", age:21}
console.log(user())
