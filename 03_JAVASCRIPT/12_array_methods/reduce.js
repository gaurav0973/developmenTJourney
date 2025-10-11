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

