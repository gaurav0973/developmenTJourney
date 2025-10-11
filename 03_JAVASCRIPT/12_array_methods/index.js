

// arr = [3,4,2,6,7]

// arr.forEach((num , index, arr) => {
    
//     console.log(index, num, arr)

// });



// --> returns a new array 
// arr = [3,4,2,6,7]
// const filteredArr = arr.filter((num)=>{
//     return num>5
// })
// console.log("filteredArr : ", filteredArr)
// console.log("arr : ", arr)



// arr = [3,4,2,6,7]
// arr.filtering = function(compare){
//     let ans = []
//     for(let num of this){
//         if(compare(num)){
//             ans.push(num)
//         }
//     }
//     return ans
// }
// const filteredArray = arr.filtering((num) => num > 5)
// console.log(filteredArray)


// const arr = [3,4,2,6,7]
// Array.prototype.filtering = function(compare){
//     let ans = []
//     for(let num of this){
//         if(compare(num)){
//             ans.push(num)
//         }
//     }
//     return ans
// }
// const filteredArray = arr.filtering((num) => num > 5)
// console.log(filteredArray)



// const arr = [1,2,3,4,5,6]

// const doubledArr = arr.map(num => num*2)
// console.log(doubledArr)



// const arr = [1,2,3,4,5,6]

// Array.prototype.myMap = function(fn){

//     const ans = []
//     for(let i=0; i<this.length; i++){

//         const value = fn(this[i])
//         ans.push(value)
//     }
//     return ans
// }

// const doubledArray = arr.myMap(num=>num*2)
// console.log(doubledArray)

// const arr = [1,2,3,4,5,6]
// const ans = arr.reduce((acc, currVal)=> acc + currVal)
// console.log(ans)


// const arr = [1,2,3,4,5,6]
// // this = [1,2,3,4,5,6]

// Array.prototype.myReduce = function(fn){
//     let acc = this[0]
//     for(let i=1; i<this.length; i++){
//         // console.log(this[i])
//         acc = fn(acc, this[i])
//     }
//     return acc
// }

// const ans = arr.myReduce((acc, curr)=> acc + curr)
// console.log(ans)


// const arr = [1,2,3,4,5,6]
// const ans = arr.reduce((acc, currVal)=> acc + currVal, 21)
// console.log(ans)



const arr = [1,2,3,4,5,6]
// this = [1,2,3,4,5,6]

Array.prototype.myReduce = function(fn, initial){

    let acc = initial ? initial :  0
    for(let i=0; i<this.length; i++){
        // console.log(this[i])
        acc = fn(acc, this[i])
    }
    return acc
}

const ans = arr.myReduce((acc, curr)=> acc + curr, 21)
console.log(ans)

