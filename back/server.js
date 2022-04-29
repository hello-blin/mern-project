const express = require("express");
const dotenv = require("dotenv").config();

const colors = require('colors')

const connectdb = require('./config/db')

const { errorHandler } = require("./middlewares/errorMiddleware");
const app = express();
const port = process.env.port || 5000;

app.use("/api/goals", require("./routes/goals/goalRoutes"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectdb()

app.use(errorHandler);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
