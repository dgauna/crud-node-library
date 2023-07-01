const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");

const book = sequelize.define("Book", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    isbn: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    year: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    library: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = book;