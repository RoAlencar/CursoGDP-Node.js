const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','root','xxxi.x.mmxvii',{
    host: 'localhost' ,
    dialect: 'mysql'
})

module.exports = connection;