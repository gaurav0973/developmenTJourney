// any
let randomValue:any
randomValue = 10
console.log("Random Value:", randomValue)

// unknown
let unknownValue:unknown
unknownValue = "Hello, World!"
// console.log("Unknown Value:", unknownValue.toUpperCase())
console.log("Unknown Value:", (unknownValue as string).toUpperCase())
unknownValue = 42
console.log("Unknown Value:", unknownValue)

/* Difference between 'any' and 'unknown':
   - 'any' type allows you to perform any operation on the variable without type checking.
   - 'unknown' type requires type checking before performing operations, making it safer than 'any'.
*/


//1. array
const num:number[] = [1, 2, 3, 4, 5]
console.log("Number Array:", num)

// mixed array using union types
const mixedArray:(number | string)[] = [1, "two", 3, "four", 5]
console.log("Mixed Array:", mixedArray)
// mixedArray.push(true) // Error: Argument of type 'true' is not assignable to parameter of type 'string | number'.


// 2. tuple => fixed length ka array
const user: [number, string] = [1, "John Doe"]
console.log("User Tuple:", user)


