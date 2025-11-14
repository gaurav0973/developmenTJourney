// strict v/s non-strict
const a = 10
b = 20
// console.log(a, b); // => b is not declared but works in non-strict mode
// this call apply bind

// Learning about this keyword
// console.log(this); // Node: Empty Object, Browser: Window Object


const user = {
    name : "Gaurav",
    greet : function(){
        console.log("This is : ", this); 
        console.log("Comparison : ", this === user); 
        console.log("Hello " + this.name);
    }
}
// this => inside function called as method of object, this refers to that object
// user.greet();

function Hello(){
    console.log("Inside Hello Function : ", this);
}
Hello()

// this => inside function points to global object (window in browser, global in nodejs)
//  In strict mode, this will be undefined


