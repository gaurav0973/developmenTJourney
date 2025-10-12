
// const arr = [10, 20, 30, 40]
// const firstGreaterThan25 = arr.find(num => num > 25)
// console.log(firstGreaterThan25)



const arr = [10, 20, 30, 40]

Array.prototype.myFind = function(fn){

    for(let i=0; i<this.length; i++){
        if(fn(this[i]))
            return this[i]
    }
    return undefined
}

const firstGreaterThan25 = arr.myFind((num) => num > 25)
console.log(firstGreaterThan25)

