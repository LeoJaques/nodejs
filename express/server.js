const express = require("../node_modules/express")
const app = express()

const PORT = 3000

app.get("/", (req, res) => {
    res.send("Welcome")
})

app.get("/about", (req, res) => {
    res.send("Welcome, about page")
})

app.get("/contact", (req, res) => {
    res.send("Welcome, contact page")
})

app.get("/services", (req, res) => {
    res.send("Welcome, services page")
})

app.get("/ola/:id/:funcao", (req, res) => {
    const { id, funcao }  = req.params
    res.send(`${id} é ${funcao} na empresa AME`)
})



app.listen(PORT, ()=> console.log(`Server running at ${PORT}`)) // dever ser a ultima linha


// https://www.youtube.com/watch?v=u3MrPxq_RyA&list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B&index=9
// instalando nodemon