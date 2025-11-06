const http = require("http")

const server = http.createServer((req, res)=>{

    if(req.url === "/"){
        res.end("Home Page ...")
    }
    else if(req.url === "/contact"){
        res.end("Contact Page ...")
    }
    else{
        res.end("Enter a valid url ...")
    }
})


server.listen(8000, ()=>{
    console.log("server is listning")
})