const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')
const User = require('../models/userModel')

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id })

  res.status(200).json(goals)
})

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const goal = await Goal.create({
    text: req.body.text,
    time: req.body.time,
    user: req.user.id,
  })

  res.status(200).json(goal)
})

const toggleCompleteGoal = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    // Find the goal by ID
    const goal = await Goal.findById(id);

    if (!goal) {
      return res.status(404).json({ message: 'Goal not found' });
    }

    // Toggle the completion status
    goal.completed = !goal.completed;

    // Save the updated goal
    await goal.save();

    res.json(goal);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

const toggleEditGoal = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    // Find the goal by ID
    const goal = await Goal.findById(id);

    if (!goal) {
      return res.status(404).json({ message: 'Goal not found' });
    }

    // Toggle the completion status
    goal.isEditing = !goal.isEditing;

    // Save the updated goal
    await goal.save();

    res.json(goal);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});
// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
    try {
      const { id } = req.params;
      const { text, time } = req.body;

      // Find the goal by ID
      const goal = await Goal.findById(id);

      if (!goal) {
        return res.status(404).json({ message: 'Goal not found' });
      }

      // Update the goal properties
      goal.text = text;
      goal.time = time;

      // Save the updated goal
      await goal.save();

      res.json(goal);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
})

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  if (!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (goal.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await goal.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
  toggleCompleteGoal,
  toggleEditGoal
}
