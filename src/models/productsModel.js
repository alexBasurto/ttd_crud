import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const productsModel = sequelize.define("tbProducts", {
    idProducto: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    brand: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

export { productsModel };