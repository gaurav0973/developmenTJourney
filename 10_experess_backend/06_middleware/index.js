import express from "express"
const app = express()


// middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// 💫💫
// app.use("/", (req, res) =>{
//     console.log("first")   -> execurte this 
//     res.send("First")    -> tehn execute this 
//     console.log("second")  -> then execute this
// })



// 💫💫
// app.use("/", (req, res) =>{
//     console.log("first")   
//     res.send("First")    
//     console.log("second")
//     res.send("Second")    -> gives error here because TCP only on time send respoonce on one conncetion
// })


// 🌋Executiion
app.use("/user", (req, res, next) => {
    console.log("first")
    next()
}, 
(req, res, next)=>{
    console.log("second")
    next()
},
(req,res) => {
    console.log("third")
    res.send("Executed")
}
)

/*
first
second
third
fourth
fifth
sixth
- next ke niche wala stack me rah gaya but it will be executed while retuening 
simple javascript execution of code

*/
app.use("/abcd", (req, res, next) => {
    console.log("first")
    next()
    console.log("sixth")
}, 
(req, res, next)=>{
    console.log("second")
    next()
    console.log("fifth")
},
(req,res) => {
    console.log("third")
    res.send("Executed")
    console.log("fourth")
}
)





app.listen(8888, ()=>{
    console.log("server is running 💫")
})