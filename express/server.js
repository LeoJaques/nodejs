const express = require('express')
const app = express()
const handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars') 
const { Sequelize, DataTypes } = require('sequelize')


//CONFIG----------------------------------------------------

//TEMPLATE ENGINE
app.engine('handlebars', expressHandlebars.engine)
app.set('view engine', 'handlebars')

// DATABASE CONNECTION
const sequelize = new Sequelize('teste', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})


//routers
app.get('/cad', (req, res) => {
    res.send('kk ai man')
})


const PORT = 3000

app.listen(PORT, () => console.log(`Server running at ${PORT}`)) // dever ser a ultima linha
