// prototype and classes


// const obj = {
//     name : "Gaurav",
//     age : 22,
//     greet : function() {
//         console.log("Hello, " + this.name);
//     }
// }

// console.log(obj);
// console.log(obj.name);
// obj.greet();
// console.log(obj.hasOwnProperty('name')); // true
// console.log(obj.hasOwnProperty('toString')); // false


// console.log(Object.getPrototypeOf(obj)); // returns the prototype of the object
// console.log(Object.getPrototypeOf(obj) === Object.prototype); // true   
// console.log(Object.getPrototypeOf(Object.prototype)); // null
// console.log(Object.getPrototypeOf([]) === Array.prototype); // true
// console.log(Object.getPrototypeOf(function() {}) === Function.prototype); // true
// console.log(Object.getPrototypeOf(obj.greet) === Function.prototype); // true
// console.log(obj.__proto__ === Object.prototype); // true

const obj1 = {
    name : "Gaurav",
    age : 22,
    greet : function() {
        console.log("Hello, " + this.name);
    }
}

const obj2 = {
    account : 3000
}

console.log(obj2.name) // undefined
obj2.__proto__ = obj1; // setting prototype of obj2 to obj1
console.log(obj2.name) // Gaurav