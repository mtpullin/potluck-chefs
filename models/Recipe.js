const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class Recipe extends Model { }

Recipe.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ingredients: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'test'
    }
);

module.exports = Recipe