"use strict"

console.log(this); // In strict mode, this will be undefined
function Hello(){
    console.log("Inside Hello Function : ", this);
}
Hello()
// this => inside function points to global object (window in browser, global in nodejs)
//  In strict mode, this will be undefined
