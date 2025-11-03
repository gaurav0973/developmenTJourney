function placeOrder(){
    console.log("Payment is in Progress...")
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // Simulate random failure
            if(Math.random() < 0.2) {
                reject(new Error("Payment failed!"))
            } else {
                console.log("Payment is received and order get Placed")
                resolve()
            }
        }, 3000)
    })
}

function preparingOrder(){
    console.log("Your Food preparation Started...")
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Your order is now prepared")
            resolve()
        }, 3000)
    })
}

function pickupOrder(){
    console.log("Delivery Boy is on the way to pickup order")
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("I have picked up the order")
            resolve()
        }, 3000)
    })
}

function orderedDelivered(){
    console.log("Order will be delivered within 10 minutes")
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Order Delivered...")
            resolve()
        }, 3000)
    })
}

placeOrder()
    .then(preparingOrder)
    .then(pickupOrder)
    .then(orderedDelivered)
    .then(() => {
        console.log("All steps completed successfully!")
    })
    .catch((error) => {
        console.log("Something went wrong:", error)
    })