const express = require("express");
const Router = express.Router();
const {
  getGoals,
  getGoal,
  updateGoal,
  deleteGoal,
} = require("../../controllers/GoalController");

//Get Goals
Router.get("/", getGoals);

//Get single goal
Router.get("/:id", getGoal);

//Update Goal
Router.put("/:id", updateGoal);

//Delete Goal
Router.delete("/:id", deleteGoal);

module.exports = Router;
