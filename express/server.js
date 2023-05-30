const express = require("../node_modules/express")
const app = express()



const PORT = 3000

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/public/about.html")
})

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/public/contact.html")
})

app.get("/services", (req, res) => {
    res.send("Welcome, services page")
})




app.listen(PORT, ()=> console.log(`Server running at ${PORT}`)) // dever ser a ultima linha


// https://www.youtube.com/watch?v=u3MrPxq_RyA&list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B&index=9
// instalando nodemon