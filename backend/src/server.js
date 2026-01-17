import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { createHandler } from "graphql-http/lib/use/express";

import schema from "./graphql/schema.js";
import resolvers from "./graphql/resolvers/index.js";
import sequelize from "./config/database.js";

dotenv.config();

const app = express();
app.use(cors());

app.all(
  "/graphql",
  createHandler({
    schema: schema,
    rootValue: resolvers,
  })
);

const PORT = process.env.PORT || 4000;

sequelize.authenticate()
  .then(() => {
    console.log("MySQL connected ");
    app.listen(PORT, () => {
      console.log(` GraphQL running at http://localhost:${PORT}/graphql`);
    });
  })
  .catch((err) => {
    console.error("DB connection failed:", err);
  });
