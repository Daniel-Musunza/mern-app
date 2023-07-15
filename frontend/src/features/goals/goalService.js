import axios from 'axios'

const API_URL = '/api/goals/'

// Create new goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, goalData, config)

  return response.data
}

// Get user goals
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}
// update user Goal
const updateGoal = async (goalData, goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.put(API_URL + goalId, goalData, config)

  return response.data
}
// Delete user goal
const deleteGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + goalId, config)

  return response.data
}

// Toggle goal completion status
const toggleCompleteGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(
    `${API_URL}${goalId}/toggle-complete`,
    {},
    config
  );

  return response.data;
};


// Edit goal text
const toggleEditGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(
    `${API_URL}${goalId}/toggleEdit`,
    {},
    config
  );

  return response.data;
};
const goalService = {
  createGoal,
  getGoals,
  deleteGoal,
  updateGoal,
  toggleCompleteGoal,
  toggleEditGoal
}


export default goalService
