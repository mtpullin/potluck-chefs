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
    },
    amounts: {
        type: DataTypes.STRING,
        allowNull:false
    },
    steps: {
        type: DataTypes.STRING,
        allowNull:false
    },
    videoLink: {
        type: DataTypes.STRING,
    }
},
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'recipe'
    }
);

module.exports = Recipe