import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Inventory = sequelize.define(
  "inventory",
  {
    inventory_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    film_id: DataTypes.INTEGER,
    store_id: DataTypes.INTEGER,
  },
  {
    tableName: "inventory",
    timestamps: false,
  }
);

export default Inventory;
