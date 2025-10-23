function placeOrder(callback){
    console.log("Payment is in Progress...")
    setTimeout(()=>{
        console.log("Payment is recieved and order get Placed")
        callback()
    }, 3000)
}


function preparingOrder(){
    console.log("Your Food preparation Started...")
    setTimeout(()=>{
        console.log("Your order is now prepared")
    }, 3000)
}

function pickupOrder(){
    console.log("Dilevery Boy is on the way to pickup order")
    setTimeout(()=>{
        console.log("I have picked up the order")
    }, 3000)
}

placeOrder(preparingOrder)
// preparingOrder()