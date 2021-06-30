const Sequelize = require('sequelize');

const connection = new Sequelize('guiapress','root','xxxi.x.mmxvii',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;