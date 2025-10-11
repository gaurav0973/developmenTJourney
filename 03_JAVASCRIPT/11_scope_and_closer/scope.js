
/*
let  global = 10
function greet(){

    let global = 30
    
    function meet(){
        console.log(global)
    }
    meet()

}
greet()
console.log(global)

*/


function createCounter(){

    let count = 0;
    function increment(){
        count++;
        return count
    }

    return increment
}
console.log(count)

const counter = createCounter()
