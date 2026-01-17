import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Film = sequelize.define(
  "film",
  {
    film_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
  },
  {
    tableName: "film",
    timestamps: false,
  }
);

export default Film;
