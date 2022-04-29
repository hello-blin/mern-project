const asyncHandler = require("express-async-handler");
//@desc Get Goals
//@route GET api/goals
//@access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});
//@desc Get single goal
//@route GET api/goals/:id
//@access Private
const getGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Single Goal: ${req.params.id}` });
});

//@desc Create Goal
//@route POST api/goals/
//@access Private
const createGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Posted Goal" });
});

//@desc Update Goal
//@route PUT api/goals/:id
//@access Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Updated Goal: ${req.params.id}` });
});
//@desc Delete Goals
//@route DELETE api/goals/:id
//@access Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Deleted Goal: ${req.params.id}` });
});

//Export
module.exports = {
  getGoals,
  getGoal,
  createGoal,
  updateGoal,
  deleteGoal,
};
