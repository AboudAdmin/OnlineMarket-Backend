const { Sequelize, DataTypes } = require("sequelize");
const db = require('../index.js'); 
const sequelize = db.sequelize;

const contact = sequelize.define('contact',{
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    message : {
        type: DataTypes.TEXT,
        allowNull : false,
        
    },
    subject : {
        type: DataTypes.INTEGER,    
        allowNull : false,
        validate : {
            len : [1,50]         
        }
    
    },
    date: {
        type: DataType.DATE,   
        allowNull: false,
    },
});
