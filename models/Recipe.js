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
        allowNull: false
    },
    steps: {
        type: DataTypes.STRING,
        allowNull: false
    },
    videoLink: {
        type: DataTypes.STRING,
    },
    videoImage: {
        type: DataTypes.STRING
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
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