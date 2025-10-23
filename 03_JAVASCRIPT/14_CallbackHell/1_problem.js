

/*
Problem with core JS
=> If JS waits for these things, everything elese
   will freeze
- Making API call
- reading files
- db queries
- timers

=> Solution
        => CallBack => Call me back
*/



function placeOrder(){
    console.log("Payment is in Progress...")
    setTimeout(()=>{
        console.log("Payment is recieved and order get Placed")
    }, 3000)
}


function preparingOrder(){
    console.log("Your Food preparation Started...")
    setTimeout(()=>{
        console.log("Your order is now prepared")
    }, 3000)
}

placeOrder()
preparingOrder()

/*
         Output 
 Sync-code first
    - Payment is in Progress...
    -  Your Food preparation Started...
 Async-code follows
    - Payment is recieved and order get Placed
    - Your order is now prepared

    My objective 
We need a way to say "when this time-consuming operation finishes, THEN do this next thing" => calllback comes into picture
*/