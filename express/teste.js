const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('teste', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
})


const postagem = sequelize.define('postagem', {
  titulo: {
    type: DataTypes.STRING
  },
  conteudo: {
    type: DataTypes.TEXT
  },
  autor: {
    type: DataTypes.STRING
  }
})


const user = sequelize.define('usuario', {
  nome: {
    type: DataTypes.STRING
  },
  sobrenome: {
    type: DataTypes.STRING
  },
  idade: {
    type: DataTypes.INTEGER
  },
  email: {
    type: DataTypes.STRING
  }
})


// postagem.sync()
// user.sync()


await user.create({
  nome: "Leonardo",
  sobrenome: "Jaques",
  idade: 22,
  email: "leonardo.jaquesdev@outlook.com"
})


await postagem.create({
  titulo: "Blog com node",
  conteudo: "lorem ipsum",
  autor: "Leonardo Jaques"
})

