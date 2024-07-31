const { Sequelize, DataTypes } = require("sequelize");
const db = require('../index.js'); 
const sequelize = db.sequelize;
const constct = sequelize.define('photo', {
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        },
        url : {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isurl : true
            }
        }
});

module.exports = photos ;