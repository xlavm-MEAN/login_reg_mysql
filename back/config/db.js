const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('nodejs_login1', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5, //numero maximo de conexiones
        min: 0, //numero minimo de conexiones
        acquire: 30000, //tiempo de inactividad en milisegundos para ser liberada la conexion
        idle: 10000
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db