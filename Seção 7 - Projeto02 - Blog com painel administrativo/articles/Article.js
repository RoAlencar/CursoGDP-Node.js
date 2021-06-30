const Sequelize = require('sequelize')
const connection = require('../database/database')
const Category = require("../categories/Category")

const Article = connection.define('articles',{
    title:{
        type:Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type:Sequelize.TEXT,
        allowNull: false
    }
})

Category.hasMany(Article); //Uma caregoria tem muitos artigos
Article.belongsTo(Category); //Um artigo pertence a uma categoria. - relecionamento 1-p-1

// se precisar sincronizar = Article.sync({force:true});

module.exports = Article;