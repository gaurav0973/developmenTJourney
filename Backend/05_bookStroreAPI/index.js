




import express from "express"
const app = express()

app.use(express.json())


const bookStore = [
    { id: 1, name: "Harry Potter", author: "J.K. Rowling" },
    { id: 2, name: "The Hobbit", author: "J.R.R. Tolkien" },
    { id: 3, name: "Rich Dad Poor Dad", author: "Robert Kiyosaki" },
    { id: 4, name: "Atomic Habits", author: "James Clear" }
];


// get all books 
app.get("/books", (req, res)=>{
    res.send(bookStore)
})

// get a particular book
app.get("/book/:id", (req, res)=>{
    console.log(typeof req.params)
    console.log(req.params)

    const {id} = req.params
    const idx = parseInt(id)
    if(idx <=0)
        res.send("Ask for valid book")
    if(idx > bookStore.length)
        res.send("Ask for valid book")
    res.send(bookStore[idx-1])
})

app.post("/book", (req, res)=>{
    // console.log(req.body)
    const data = req.body
    console.log(data)
    bookStore.push(data)
    res.send("New Book addes successfully")
})





app.listen(8888, ()=>{
    console.log("server is running 💫")
})