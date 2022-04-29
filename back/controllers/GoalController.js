//@desc Get Goals
//@route GET api/goals
//@access Private
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get Goals" });
};
//@desc Get single goal
//@route GET api/goals/:id
//@access Private
const getGoal = (req, res) => {
  res.status(200).json({ message: `Single Goal: ${req.params.id}` });
};
//@desc Update Goal
//@route PUT api/goals/:id
//@access Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Updated Goal: ${req.params.id}` });
};
//@desc Delete Goals
//@route DELETE api/goals/:id
//@access Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Deleted Goal: ${req.params.id}` });
};

//Export
module.exports = {
  getGoals,
  getGoal,
  updateGoal,
  deleteGoal,
};
