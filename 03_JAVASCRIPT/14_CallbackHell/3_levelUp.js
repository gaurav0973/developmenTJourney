function placeOrder(callback){
    console.log("Payment is in Progress...")
    setTimeout(()=>{
        console.log("Payment is recieved and order get Placed")
        callback()
    }, 3000)
}


function preparingOrder(callback){
    console.log("Your Food preparation Started...")
    setTimeout(()=>{
        console.log("Your order is now prepared")
        callback()
    }, 3000)
}

function pickupOrder(callback){
    console.log("Dilevery Boy is on the way to pickup order")
    setTimeout(()=>{
        console.log("I have picked up the order")
        callback()
    }, 3000)
}

function orderedDelivered(){
    console.log("Order will be deliverd with 10 minutes")
    setTimeout(()=>{
        console.log("Ordered Delivered...")
    }, 3000)
}

placeOrder(function(){
    preparingOrder(function(){
        pickupOrder(function(){
            orderedDelivered()
        })
    })
})


// placeOrder(() => {
//     preparingOrder(() => {
//         pickupOrder(() => {
//             orderedDelivered()
//         })
//     })
// })


