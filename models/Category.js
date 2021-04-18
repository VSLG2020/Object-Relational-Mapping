const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model { }

Category.init(
  {
    // define columns example:
    //       password: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     validate: {
    //       len: [4]
    //     }
    //   }
    // },
    ////reqs/////
    id: {
      // Integer
      type: DataTypes.INTEGER,
      // Doesn't allow null values
      allowNull: false,
      // Set as primary key
      primaryKey: true,
      // Uses auto increment
      autoIncrement: true,
    },
    // category_name
    category_name: {
      // String
      type: DataTypes.STRING,
      // Doesn't allow null values
      allowNull: false,
      validate: {
        len: [1]
      }

    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
