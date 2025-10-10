import express from "express"
const app = express()


// app.use(express.json())

// app.get("/user", (req, res)=>{
//     console.log("THis is res : ", res.body)
//     console.log("THis is params in req : ", req.params)
//     res.send({
//         user : "Gaurav",
//         age : 22
//     })
// })

// app.post("/user", (req, res)=>{
//     console.log(req.body)
//     res.send({
//         message : "Responce body is being send"
//     })
// })


app.listen(8888, ()=>{
    console.log("server is running 💫")
})