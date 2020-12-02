const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");

dotenv.config({ path: "./config/config.env" });

const transactions = require("./routes/transactions");

const app = express();

const PORT = process.env.PORT || 5000;

app.use("/api/v1/transactions", transactions);

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);