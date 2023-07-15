const express = require('express');
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
  toggleCompleteGoal,
  toggleEditGoal,
} = require('../controllers/goalController');

const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getGoals).post(protect, setGoal);
router
  .route('/:id')
  .delete(protect, deleteGoal)
  .put(protect, updateGoal);
  
router.route('/:id/toggle-complete').put(protect, toggleCompleteGoal);
router.route('/:id/toggleEdit').put(protect, toggleEditGoal);

module.exports = router;
