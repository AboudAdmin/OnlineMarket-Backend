const { Sequelize, DataTypes } = require("sequelize");
const db = require('../index.js'); 
const sequelize = db.sequelize;

const reviews = sequelize.define('reviews',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    date: {
        type: DataTypes.DATE,   
        allowNull: false,
    },
    comment : {
        type: DataTypes.STRING,
        allowNull: true,
        valdaite: {
            len : [3 , 300]
        }

    },
});
module.exports = reviews;