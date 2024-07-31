const {Sequelize, DataType} = require("sequelize");
const db = require('../index.js')
const sequelize = db.Sequelize;

const order = sequelize.define('order', {
OrderID: {
type: DataType.INTEGER,
autoIncrement: true,
primaryKey: true,
},
userID: {
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    },
    date: {
        type: DataType.DATE,   
        allowNull: false,
    },
    total: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
  /*  validate : {
        min {
            args [0],
        }

    }*/
   status : DataType.INTEGER,
   allowNull : false,
});

module.exports = order;