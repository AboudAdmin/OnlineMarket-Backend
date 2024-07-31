const config = require('../config/config');
const mysql = require('mysql2');
const Sequelize = require('sequelize');


module.exports =db ={}

const { host,port,user,password, database } = config.database;
const pool = mysql.createPool({host,port,user,password});
pool.query(`CREATE DATABASE IF NOT EXIST ${database}`);

const sequelize = new Sequelize(database,user,password,{
    dialect:"mysql",
    pool:{
        max: config.pool.max ,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle
    }
})

db.sequelize = sequelize;


const User = require('./User');
const category = require('./category');
const Produit = require('./product');
const photo = require('./photos')
const contact =  require('./contact')
const reviews = require('./reviews')
const OrderItems = require('./OrderItems')
user.hasMany(user)
user.belongsTo(user)

Category.hasMany(Produit);
Produit.belongsTo(Category);

User.hasMany(Product);
Product.belongsTo(User);

photo.hasMany(product)
product.belongsTo(photo)

contact.hasMany(user)
user.hasMany(contact)

reviews.hasMany(user)
user.belongsTo(reviews)

OrderItems.hasMany(product,order)
product,order.belongsTo(OrderItems)




sequelize.sync({ force: false });
