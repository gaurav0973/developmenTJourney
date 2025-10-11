// // --> returns a new array 
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



const arr = [3,4,2,6,7]
Array.prototype.filtering = function(compare){
    let ans = []
    for(let num of this){
        if(compare(num)){
            ans.push(num)
        }
    }
    return ans
}
const filteredArray = arr.filtering((num) => num > 5)
console.log(filteredArray)
