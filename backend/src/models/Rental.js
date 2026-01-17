import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Rental = sequelize.define(
  "rental",
  {
    rental_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    rental_date: DataTypes.DATE,
    inventory_id: DataTypes.INTEGER,
    customer_id: DataTypes.INTEGER,
    return_date: DataTypes.DATE,
  },
  {
    tableName: "rental",
    timestamps: false,
  }
);

export default Rental;
