const {add} = require("./second.js")
// what it does is, second.js get wrapped in IIFE at the begenning to the code
// (function() {
//     console.log("this is second")

//     function add(a,b){
//         console.log("Sum is : ", a+b)
//     }
// })();
console.log("This is first")
add(3,5)