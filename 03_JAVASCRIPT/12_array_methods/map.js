// const arr = [1,2,3,4,5,6]

// const doubledArr = arr.map(num => num*2)
// console.log(doubledArr)



const arr = [1,2,3,4,5,6]

Array.prototype.myMap = function(fn){

    const ans = []
    for(let i=0; i<this.length; i++){

        const value = fn(this[i])
        ans.push(value)
    }
    return ans
}

const doubledArray = arr.myMap(num=>num*2)
console.log(doubledArray)

