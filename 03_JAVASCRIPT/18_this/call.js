"use strict"


function greet(){
    console.log("Hello " + this.name);
}

function incrementAge(val){
    this.age += val;
    console.log(`${this.name} Age is now:`,this.age);
}


const user1 = {
    name : "Gaurav",
    age : 22
}
const user2 = {
    name : "Mohit",
    age : 25
}

// what is want ?
// greet function to be called in context of user1 and user2

// Possible thinking
// user.greet() // does not work as user1 and user2 do not have greet method

// greet.call(user1) 
// greet.call(user2)
// incrementAge.call(user1, 1)
// incrementAge.call(user2, 1)
// call(something) => this will points to something for that function call


// Apply =>same as call but takes arguments as array
// greet.apply(user1, [])
// greet.apply(user2, [])
// incrementAge.apply(user1, [2])
// incrementAge.apply(user2, [3])


// Bind => returns a new function with this bound to something
// const greetUser1 = greet.bind(user1)
// const greetUser2 = greet.bind(user2)
// const incrementUser1Age = incrementAge.bind(user1, 5)
// const incrementUser2Age = incrementAge.bind(user2, 10)
// greetUser1()
// greetUser2()
// incrementUser1Age()
// incrementUser2Age()


//  Arrow function and this
// const hii = ()=>{
//     console.log(this);
// }
// hii()


// const stopwatch = {
//     second : 0,
//     start : function(){
//         setInterval( function(){
//             this.second++;
//             console.log(this.second);
//         }, 1000);
//     }
// }
// stopwatch.start();



const stopwatch = {
    second : 0,
    start : function(){
        setInterval( () => {
            this.second++;
            console.log(this.second);
        }, 1000);
    }
}
stopwatch.start();