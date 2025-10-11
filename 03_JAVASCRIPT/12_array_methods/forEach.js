


// const arr = [3,4,2,6,7]
// arr.forEach((num , index) => {
//     console.log(index, num)
// });


const arr = [3,4,2,6,7]

Array.prototype.myForEach= function(fn){

    let n = this.length
    for(let i=0; i<n; i++){
        fn(this[i], i)
    }
}

arr.myForEach((num , index) => {
    console.log(index, num)
});

