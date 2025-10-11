
function createCounter(){

    let count = 0;
    function increment(){
        count++;
        console.log(count)
    }

    return increment
}
// console.log(count)

const counter = createCounter()
counter()
counter()
counter()
counter()
