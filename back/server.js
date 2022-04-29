const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.port || 5000;

app.use("/api/goals", require("./routes/goals/goalRoutes"));

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
