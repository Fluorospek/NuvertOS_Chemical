const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Compound = sequelize.define("Chemical", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    compoundName:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    compoundDesc:{
        type: DataTypes.STRING,
    },
    strImageSource:{
        type: DataTypes.STRING,
    },
    strImageAttribution:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    dateModified:{
        type: DataTypes.DATE
    }
}, {
    tableName: 'chemical',
    timestamps: false
});

module.exports = Compound;