const express = require("express");
const Router = express.Router();

Router.get("/", (req, res) => {
  res.status(200).json({ message: "All goals" });
});
Router.get("/:id", (req, res) => {
  res.status(200).json({ message: `Single Goal: ${req.params.id}` });
});
Router.post("/", (req, res) => {
  res.status(200).json({ message: "Set Goal" });
});
Router.put("/:id", (req, res) => {
  res.status(200).json({ message: `Update Goal: ${req.params.id}` });
});
Router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Delete Goal: ${req.params.id}` });
});

module.exports = Router;
