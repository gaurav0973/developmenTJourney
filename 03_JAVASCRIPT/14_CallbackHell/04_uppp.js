const orderDetail = {
    cost: 520,
    items: ["biryani", 'pani puri', 'pizza'],
    customer_name: "Gaurav",
    customer_location: "Varanasi",
    restaurant_name: "Dominos",
};

function placeOrder(orderDetail, callback){
    console.log(`Payment of ₹${orderDetail.cost} is in Progress for ${orderDetail.customer_name}...`)
    setTimeout(()=>{
        console.log(`Payment received! Order placed at ${orderDetail.restaurant_name} for ${orderDetail.items.join(', ')}`)
        callback()
    }, 3000)
}

function preparingOrder(orderDetail, callback){
    console.log(`Food preparation started at ${orderDetail.restaurant_name} for ${orderDetail.customer_name}`)
    setTimeout(()=>{
        console.log(`Order prepared: ${orderDetail.items.join(', ')}`)
        callback()
    }, 3000)
}

function pickupOrder(orderDetail, callback){
    console.log(`Delivery boy is on the way to pickup order from ${orderDetail.restaurant_name}`)
    setTimeout(()=>{
        console.log(`Order picked up from ${orderDetail.restaurant_name}`)
        callback()
    }, 3000)
}

function orderedDelivered(orderDetail){
    console.log(`Delivery started to ${orderDetail.customer_location} for ${orderDetail.customer_name}`)
    setTimeout(()=>{
        console.log(`Order delivered to ${orderDetail.customer_name} at ${orderDetail.customer_location}! Total: ₹${orderDetail.cost}`)
        console.log("Thank you for your order!")
    }, 3000)
}


placeOrder(orderDetail, function(){
    preparingOrder(orderDetail, function(){
        pickupOrder(orderDetail, function(){
            orderedDelivered(orderDetail)
        })
    })
})



placeOrder(orderDetail, () => {
    preparingOrder(orderDetail, () => {
        pickupOrder(orderDetail, () => {
            orderedDelivered(orderDetail)
        })
    })
})



