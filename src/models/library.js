const { DataTypes } = require("sequelize");
const { sequelize } = require('../config/db-config');
const Book = require("./book");

const library = sequelize.define("Library", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

library.hasMany(Book);
Book.belongsTo(library);

module.exports = library;