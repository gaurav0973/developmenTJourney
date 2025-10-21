

const form = document.querySelector("form")

form.addEventListener("submit", (e)=>{
    e.preventDefault()

    const amt = document.getElementById("amt")
    // console.log(amt)
    // console.log(amt.value)
    // console.log(typeof(amt.value))
    // console.log(typeof(Number(amt.value)))
    // console.log(typeof(parseInt(amt.value)))
    /*
               income = 18lakh
    0 - 12lakh - no tax
    12lakh - 16lakh : 15% tax 
       => (18lakh - 12lakh) = 6lakh => ispar 15% lagega
    16lakh-20lakh : 20% tax
       => (18lakh-16lakh) = 2lakh => ispar 20%tax lagega
    */

    const income = Number(amt.value)
    let totalTax = 0
    if(income <= 1200000){
        totalTax = 0
    }else if(income <= 1600000){
        totalTax = (income-1200000)*0.15
    }else if(income <= 2000000){
        totalTax = ((income-1600000)*0.20) + (400000*0.15)
    }else if(income <= 2400000){
        totalTax = ((income-2000000)*0.25) + (400000*0.15) + (400000*0.20)
    }else{
        totalTax = ((income-2400000)*0.30) + (400000*0.15) + (400000*0.20) + (400000*0.25)
    }
    
    const h2 = document.querySelector("h2")
    h2.textContent = `Total Income Tax : Rs. ${totalTax}`

    form.reset()
})