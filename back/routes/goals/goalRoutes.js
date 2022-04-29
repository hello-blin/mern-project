const express = require("express");
const Router = express.Router();
const {
  getGoals,
  getGoal,
  createGoal,
  updateGoal,
  deleteGoal,
} = require("../../controllers/GoalController");

//Get and Post goal/s
Router.route("/").get(getGoals).post(createGoal);

//Get, put and delete single Goal
Router.route("/:id").get(getGoal).put(updateGoal).delete(deleteGoal);

module.exports = Router;
